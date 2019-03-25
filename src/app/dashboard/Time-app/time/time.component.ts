import {Component, Input, OnInit} from '@angular/core';
import { TimeService } from '../../../services/time.service';
import { Time } from '../Time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() time: Time;
  box_state = {'enable': false, 'reserved': false};

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.intiTime();
  }

  intiTime() {
    this.box_state['enable'] = this.time.enable;
    if (this.time.state === 'reserved') {
      this.box_state['reserved'] = true;
    } else if (this.time.state === 'not-reserved') {
      this.box_state['reserved'] = false;
    } else {
      this.box_state['reserved'] = null;
    }
  }
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
