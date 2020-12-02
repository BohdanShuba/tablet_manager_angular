import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {TokenStorageService} from '../../services/storage/token-storage.service';

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

  constructor(private loginService: LoginService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  signIn(loginForm: any) {
    this.loginService.signIn(loginForm).subscribe((result: any) => {
      this.tokenStorage.saveToken(result.token);
      this.tokenStorage.saveUser(result);
    });
  }
}
