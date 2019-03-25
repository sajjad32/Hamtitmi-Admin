import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-place-facilities',
  templateUrl: './place-facilities.component.html',
  styleUrls: ['./place-facilities.component.css']
})
export class PlaceFacilitiesComponent implements OnInit {

  @Input() place_id;
  facilities = [
    {'id': 1, 'text': 'مجهز به سیتسم گرمایشی'},
    {'id': 2, 'text': 'پارکینگ اختصاصی دارد'}
  ];
  facility_text = '';
  facility: any = '';
  constructor() { }

  ngOnInit() {
    this.getFacilities(this.place_id);
  }

  getFacilities(place_id: number) {
    // this.facility = this.facilityService.getFacilities(place_id);
  }

  addFacility(place_id: number) {
    // this.facilityService.addFacility(place_id, facility);
    if (this.facility_text !== '') {
      this.facilities.push({'id': 3, 'text': this.facility_text});
      this.facility_text = '';
    }
  }

  removeFacility(place_id: number, facility_id: number) {
    // this.facilityService.removeFacility(place_id, facility_id);
    this.facilities.pop();
  }

  loadFacility(facility) {
    this.facility = facility;
  }

  editFacility(form: NgForm) {
    this.updateFacility(form);
  }

  updateFacility(form: NgForm) {
    const a = form.value;
    console.log(a);
  }

}
