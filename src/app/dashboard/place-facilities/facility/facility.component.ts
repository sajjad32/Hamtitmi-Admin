import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../Facility';
import {AdminService} from '../../../_services/admin.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  @Input() facility: Facility;
  edit_state = false;
  is_deleted = false;
  edited_facility = new Facility();

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.edited_facility._id = this.facility._id;
  }

  removeFacility(facility_id: string) {
    this.adminService.removeFacility(facility_id).subscribe(
      data => {
        if (data['status'] === 200) {
          this.is_deleted = true;
        }
        console.log('remove-facility response: \n', data);
      },
      error => {
        console.log('remove-facility response error: \n', error);
      }
    );
  }

  toggleEditState() {
    this.edited_facility.facility_title = this.facility.facility_title;
    this.edit_state = !this.edit_state;
  }

  updateFacility() {
    this.adminService.updateFacility(this.edited_facility).subscribe(
      data => {
        if (data['status'] === 200) {
          this.facility.facility_title = this.edited_facility.facility_title;
          this.edit_state = false;
        }
        console.log('update-facility response: \n', data);
      },
      error => {
        console.log('update-facility response error: \n', error);
      }
    );
  }

}
