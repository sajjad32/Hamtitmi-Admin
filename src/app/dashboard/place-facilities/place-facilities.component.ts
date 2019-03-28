import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Facility} from './Facility';
import {AdminService} from '../../_services/admin.service';

@Component({
  selector: 'app-place-facilities',
  templateUrl: './place-facilities.component.html',
  styleUrls: ['./place-facilities.component.css']
})
export class PlaceFacilitiesComponent implements OnInit {

  facilities = Array(Facility);
  new_facility_title = '';
  edit_facility_title = new Facility();
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getFacilities();
  }

  getFacilities() {
    this.adminService.getFacilities().subscribe(
      data => {
        this.facilities = data['data']['place_facilities'];
        console.log('get-facilities response: \n', data);
      },
      error => {
        console.log('get-facilities response error: \n', error);
      }
    );
  }

  addFacility() {
    if (this.new_facility_title !== '') {
      this.adminService.addFacility(this.new_facility_title).subscribe(
        data => {
          console.log('add-facility response: \n', data);
          this.new_facility_title = '';
          this.getFacilities();
        },
        error => {
          console.log('add-facility response error: \n', error);
        }
      );
    }
  }

  removeFacility(facility_id: string) {
    this.adminService.removeFacility(facility_id).subscribe(
      data => {
        console.log('remove-facility response: \n', data);
        this.getFacilities();
      },
      error => {
        console.log('remove-facility response error: \n', error);
      }
    );
  }

  loadFacility(facility) {
    this.edit_facility_title._id = facility._id;
    this.edit_facility_title.facility_title = facility.facility_title;
  }

  updateFacility() {
    this.adminService.updateFacility(this.edit_facility_title).subscribe(
      data => {
        console.log('update-facility response: \n', data);
        this.getFacilities();
      },
      error => {
        console.log('update-facility response error: \n', error);
      }
    );
  }

}
