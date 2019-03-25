import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {'username': '', 'password': null};
  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  onSubmitLogin() {
    this.loginService.login(this.formData);
  }
}
