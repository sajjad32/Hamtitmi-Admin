import {Component, Input, OnInit} from '@angular/core';
import { AdminService } from '../../../_services/admin.service';
import { Time } from '../Time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() time: Time;
  box_state = {'enable': true, 'reserved': false, 'reserving': false};
  box_edit_state = false;
  new_price = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.initTime();
  }

  initTime() {
    if (this.time.time_status === 'disable') {
      this.box_state.enable = false;
    }
    if (this.time.time_state === '0') {
      this.box_state.reserved = false;
    } else if (this.time.time_state === '1') {
      this.box_state.reserved = true;
    } else {
      this.box_state.reserving = true;
    }
  }
  enableTime() {
    this.adminService.enableTime(this.time.time_date, this.time.time_time).subscribe(
      data => {
        console.log('enable-time response: \n', data);
        if (data['status'] === 200) {
          this.box_state.enable = true;
        }
      },
      error => {
        console.log('enable-time response error: \n', error);
      }
    );
  }
  disableTime() {
    this.adminService.disableTime(this.time.time_date, this.time.time_time).subscribe(
      data => {
        console.log('disable-time response: \n', data);
        if (data['status'] === 200) {
          this.box_state.enable = false;
        }
      },
      error => {
        console.log('disable-time response error: \n', error);
      }
    );
  }

  enableEditState() {
    this.new_price = this.time.time_price;
    this.box_edit_state = true;
  }

  updateTime() {
    this.adminService.editTime(this.time.time_date, this.time.time_time, this.new_price).subscribe(
      data => {
        console.log('edit-time response: \n', data);
        if (data['status'] === 200) {
          this.time.time_price = this.new_price;
          this.box_edit_state = false;
        }
      },
      error => {
        console.log('edit-time response error: \n', error);
      }
    );
  }

}
