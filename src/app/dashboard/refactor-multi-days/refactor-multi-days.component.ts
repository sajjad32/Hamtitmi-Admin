import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../_services/admin.service';
import * as moment from 'jalali-moment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-refactor-multi-days',
  templateUrl: './refactor-multi-days.component.html',
  styleUrls: ['./refactor-multi-days.component.css']
})
export class RefactorMultiDaysComponent implements OnInit {

  timesArray = ['00:30', '02:00', '03:30', '05:00', '06:30', '08:00', '09:30', '11:00',
    '12:30', '14:00', '15:30', '17:00', '18:30', '20:00', '21:30', '23:00'];
  daysArray = [
    {'name': 'شنبه'},
    {'name': 'یکشنبه'},
    {'name': 'دوشنبه'},
    {'name': 'سه شنبه'},
    {'name': 'چهارشنبه'},
    {'name': 'پنجشنبه'},
    {'name': 'جمعه'}
  ];
  formData = {'from_date': '', 'to_date': '', 'day_name': '', 'time_time': '', 'action': '', 'price': this.adminService.place_base_price};
  datePickerConfig = {format: 'YYYY/MM/DD'};
  error = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onSubmitRefactorTimes() {
    let is_complete = true;
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        const value = this.formData[key];
        if (value === '') {
          is_complete = false;
          this.error = 'پر کردن تمامی فیلدا الزامی است';
        }
      }
    }
    if (is_complete) {
      const times = [];
      const from_date_week_start_day = moment(this.formData.from_date, 'jYYYY/jMM/jDD').clone().locale('fa').weekday(0)
        .format('YYYY/MM/DD');
      const to_date_week_start_day = moment(this.formData.to_date, 'jYYYY/jMM/jDD').clone().locale('fa').weekday(0)
        .format('YYYY/MM/DD');
      const check_first_item = moment(this.formData.from_date, 'jYYYY/jMM/jDD').locale('fa').weekday();
      const check_last_item = moment(this.formData.to_date, 'jYYYY/jMM/jDD').locale('fa').weekday();
      let week_start_day = from_date_week_start_day;
      let counter = 0;
      if (check_first_item > Number(this.formData.day_name)) {
        counter = 1;
      }
      while (week_start_day !== to_date_week_start_day) {
        week_start_day = moment(from_date_week_start_day, 'jYYYY/jMM/jDD').add((counter * 7), 'day')
          .locale('fa').format('YYYY/MM/DD');
        const date = moment(week_start_day, 'jYYYY/jMM/jDD').add(this.formData.day_name, 'day')
          .locale('fa').format('YYYY/MM/DD');
        times.push({
          'place_id': this.adminService.place_id,
          'time_date': date,
          'time_time': this.formData.time_time,
          'time_price': this.formData.price,
        });
        counter += 1;
      }
      if (check_last_item < Number(this.formData.day_name)) {
        times.pop();
      }
      console.log(times);
      this.refactorTimes(times);
    }
  }

  refactorTimes(times) {
    let response: Observable<any>;
    if (this.formData.action === 'disable') {
      response = this.adminService.disableTime(times);
    } else if (this.formData.action === 'reserve') {
      response = this.adminService.reserveTime(times);
    } else if (this.formData.action === 'edit') {
      response = this.adminService.editTime(times);
    } else if (this.formData.action === 'enable') {
      response = this.adminService.enableTime(times);
    }
    response.subscribe(
      data => {
        console.log('times-refactor(', this.formData.action, ')response: \n', data);
      },
      error => {
        console.log('times-refactor(', this.formData.action, ')response error: \n', error);
      }
    );
  }
}
