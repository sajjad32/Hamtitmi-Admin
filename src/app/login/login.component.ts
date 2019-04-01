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
    this.error = '';
    if (this.formData.admin_username === '' || this.formData.admin_password === null) {
      this.error = 'حداقل یکی از فیلدها خالی میباشد';
    } else {
      this.msg = this.adminService.login(this.formData).subscribe(
        data => {
          if (data['status'] !== 200) {
            this.error = 'نام کاربری یا رمز عبور نادرست میباشد';
          }
        }
      );
    }
  }
}
