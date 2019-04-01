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
  new_base_price = '';
  change_base_price = false;

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

  logout() {
    this.adminService.place_id = '';
  }

  editBasePrice() {
    this.new_base_price = this.place.place_base_price;
    this.change_base_price = true;
  }

  onSubmitNewBasePrice() {
    this.adminService.updatePlaceBasePrice(this.new_base_price).subscribe(
      data => {
        if (data['status'] === 200) {
          this.place.place_base_price = this.new_base_price;
          this.change_base_price = false;
        }
        console.log('update-place-base-price response: \n', data);
      },
      error => {
        console.log('update-place-base-price response error: \n', error);
      }
    );
  }
}
