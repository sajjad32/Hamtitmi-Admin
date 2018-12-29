import {Component, Input, OnInit} from '@angular/core';
import { TimeService } from '../time.service';
import { Time } from '../Time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() time: Time;
  box_state = [true, false, false]; // disable , not-reserved, reserved

  constructor(private timeService: TimeService) { }

  ngOnInit() {}

  enableTime() {
    this.timeService.enableTime(this.time);
  }
  disableTime() {
    this.timeService.disableTime(this.time);
  }
  updateTime() {
    this.timeService.updateTime(this.time);
  }

}
