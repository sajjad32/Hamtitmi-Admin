import { Component, OnInit } from '@angular/core';
import {AdminService} from '../_services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {'admin_username': '', 'admin_password': null};
  private msg: any;
  error = '';
  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.msg = this.adminService.login(this.formData);
    if (this.msg !== '') {
      this.error = 'نام کاربری یا رمز عبور نادرست میباشد';
    }
  }
}
