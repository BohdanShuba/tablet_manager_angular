import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
  }

  signIn(loginForm: any) {
    console.log(loginForm);
    this.loginService.signIn(loginForm).subscribe((result: string) =>
      console.log(result));
  }
}
