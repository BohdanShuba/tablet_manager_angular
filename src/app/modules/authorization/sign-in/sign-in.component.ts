import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../../services/login/login.service';
import {TokenStorageService} from '../../../services/storage/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService: LoginService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  signIn(signInForm: any) {
    this.loginService.signIn(signInForm).subscribe((result: any) => {
      this.tokenStorage.saveToken(result.token);
      this.tokenStorage.saveUser(result);
    });
  }

}
