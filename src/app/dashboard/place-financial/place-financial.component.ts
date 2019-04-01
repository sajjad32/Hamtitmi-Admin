import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import {AdminService} from '../../_services/admin.service';

@Component({
  selector: 'app-place-financial',
  templateUrl: './place-financial.component.html',
  styleUrls: ['./place-financial.component.css']
})
export class PlaceFinancialComponent implements OnInit {

  input_month = '';
  month_name = '';
  month_income = 0;
  monthes = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  datePickerConfig = {format: 'YYYY/MM'};
  income_loading = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.currentMonth();
  }

  currentMonth() {
    this.income_loading = true;
    const Date = moment();
    const current_month_number = Date.clone().locale('fa').format('MM');
    this.month_name = this.monthes[Number(current_month_number) - 1];
    const current_month = Date.clone().locale('fa').format('jYYYY/jMM');
    this.getMonthIncome(current_month);
  }

  getMonthName() {
    if (this.input_month) {
      this.income_loading = true;
      const Date = moment(this.input_month, 'jYYYY/jMM');
      const month = Date.clone().locale('fa').format('MM');
      this.month_name = this.monthes[Number(month) - 1];
      this.getMonthIncome(this.input_month);
    }
  }

  getMonthIncome(month) {
    this.adminService.getMonthIncome(month).subscribe(
      data => {
        this.month_income = data['data']['month_income'];
        this.income_loading = false;
        console.log('get-times-table response: \n', data);
      },
      error => {
        console.log('get-times-table response error: \n', error);
      }
    );
  }

}
