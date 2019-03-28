import { Component, OnInit } from '@angular/core';
import {AdminService} from '../_services/admin.service';
import { Place } from './Place';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  place = new Place();

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getPlaceInfo();
  }

  getPlaceInfo() {
    this.adminService.getPlaceInfo().subscribe(
      data => {
        this.place = data['data'];
        console.log('get-place-info response: \n', data);
      },
      error => {
        console.log('get-place-info response error: \n', error);
      }
    );
  }

}
