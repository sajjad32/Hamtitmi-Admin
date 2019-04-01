import { Component, OnInit } from '@angular/core';
import {Time} from '../Time';
import {AdminService} from '../../../_services/admin.service';
import {DatePipe} from '@angular/common';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  timesArray = ['00:30 تا 02:00', '02:00 تا 03:30', '03:30 تا 05:00', '05:00 تا 06:30', '06:30 تا 08:00',
    '08:00 تا 09:30', '09:30 تا 11:00', '11:00 تا 12:30', '12:30 تا 14:00', '14:00 تا 15:30', '15:30 تا 17:00',
    '17:00 تا 18:30', '18:30 تا 20:00', '20:00 تا 21:30', '21:30 تا 23:00', '23:00 تا 00:30'];
  days = [
    {'name': 'شنبه', 'date': ''},
    {'name': 'یکشننبه', 'date': ''},
    {'name': 'دوشنبه', 'date': ''},
    {'name': 'سه شنبه', 'date': ''},
    {'name': 'چهارشنبه', 'date': ''},
    {'name': 'پنجشنبه', 'date': ''},
    {'name': 'جمعه', 'date': ''},
  ];
  currentDate;
  weekNo = 0;
  loading = false;
  times: Array<Time>;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  getTimes() {
    const Date = moment();
    const week_start_day = Date.clone().locale('fa').weekday(0).format('YYYY/MM/DD');
    const start = moment.from(week_start_day, 'fa', 'YYYY/M/D');
    const start_date = start.add((this.weekNo * 7), 'day').locale('fa').format('YYYY/MM/DD');
    const end_date = start.add(6, 'day').locale('fa').format('YYYY/MM/DD');
    this.adminService.getTimesTable(start_date, end_date).subscribe(
      data => {
        this.times = data['data']['times'];
        this.loading = false;
        console.log('get-times-table response: \n', data);
      },
      error => {
        console.log('get-times-table response error: \n', error);
      }
    );
  }
  getCurrentDate() {
    const pipe = new DatePipe('en-US');
    const now = Date.now();
    this.currentDate = pipe.transform(now, 'yyyy-MM-dd');
    this.currentDate = moment(this.currentDate, 'YYYY-MM-DD').locale('fa').format('YYYY/M/D');
  }
  createWeek() {
    const D = moment();
    const week_start_day = D.clone().locale('fa').weekday(-1).format('YY/M/D');
    const start = moment.from(week_start_day, 'fa', 'YY/M/D');
    start.add((this.weekNo * 7), 'day').locale('fa').format('YY/M/D');
    for (let i = 0 ; i < 7; i++) {
      const day = start.add(1, 'day').locale('fa').format('YY/M/D');
      this.days[i].date = day;
    }
  }
  createReservationTable() {
    this.getTimes();
    this.getCurrentDate();
    this.createWeek();
  }
  goToNextWeek() {
    this.loading = true;
    this.weekNo++;
    this.createReservationTable();
  }
  goToPrevWeek() {
    this.loading = true;
    this.weekNo--;
    this.createReservationTable();
  }
  comeToday() {
    this.loading = true;
    this.weekNo = 0;
    this.createReservationTable();
  }
}
