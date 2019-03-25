import { Component, OnInit } from '@angular/core';
import {Time} from '../Time';
import {TimeService} from '../../../services/time.service';
import {DatePipe} from '@angular/common';
import * as moment from 'jalali-moment';
import {variable} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  currentDate;
  weekNo = 0;
  days = [
    {'name': 'شنبه', 'date': ''},
    {'name': 'یکشننبه', 'date': ''},
    {'name': 'دوشنبه', 'date': ''},
    {'name': 'سه شنبه', 'date': ''},
    {'name': 'چهارشنبه', 'date': ''},
    {'name': 'پنجشنبه', 'date': ''},
    {'name': 'جمعه', 'date': ''},
  ];
  times: Time[] = [
    {place_id: 0, date: '1397-12-12', time: '14:00', price: 50000, state: '', enable: false}
  ];
  hours: [
    '14 تا 15:30',
    '15:30 تا 17'
  ];

  constructor(private timeService: TimeService) { }
  ngOnInit() {}

  getTimes() {
    const D = moment();
    const week_start_day = D.clone().locale('fa').weekday(0).format('YY/M/D');
    const start = moment.from(week_start_day, 'fa', 'YY/M/D');
    const startDate = start.add(0, 'day').locale('fa').format('YY/M/D');
    const req = {'salon_id': 0, 'startDate': startDate};
    // this.timeService.getTimes(req);
  }
  getCurrentDate() {
    const pipe = new DatePipe('en-US');
    const now = Date.now();
    this.currentDate = pipe.transform(now, 'yyyy-MM-dd');
    this.currentDate = moment(this.currentDate, 'YYYY-MM-DD').locale('fa').format('YY/M/D');
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
  getDays() {}
  getHours() {}
  createReservationTable() {
    this.getTimes();
    this.getCurrentDate();
    this.createWeek();
  }
  goToNextWeek() {
    this.weekNo++;
    // this.times = [];
    this.createReservationTable();
  }
  goToPrevWeek() {
    this.weekNo--;
    this.createReservationTable();
  }
  comeToday() {
    this.weekNo = 0;
    this.createReservationTable();
  }
}
