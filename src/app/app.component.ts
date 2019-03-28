import {Component, OnInit} from '@angular/core';
import {AdminService} from './_services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  place_id = '';

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }
}
