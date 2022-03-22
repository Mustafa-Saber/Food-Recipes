import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuhtService } from 'src/app/auht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  isWating: boolean = false;
  isrgs: boolean = false;
  isSuccess: string = '';
  Register: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(80),
      Validators.min(16),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.min(8)]),
  });

  constructor(private _AuhtService: AuhtService, private _Router: Router) {}

  ngOnInit(): void {
    this.callSign();
  }

  getData() {
    this.isWating = true;
    this._AuhtService.registerUsers(this.Register.value).subscribe((data) => {
      if (this.Register.status == 'VALID') {
        if (data.message == 'success') {
          this.Register.reset();
          this.isSuccess = data.message;
          this.isWating = false;
          this.callSign();
        } else {
          this.isSuccess = data.message;
          this.isWating = false;
        }
      } else {
        this.isWating = false;
      }
    });
  }
  getLogin() {
    this._AuhtService.AuthUserLogin(this.login.value).subscribe((data) => {
      if (this.login.status == 'VALID') {
        if (data.message == 'success') {
          this.login.reset();
          this.isSuccess = data.message;
          this._Router.navigate(['/home']);
        } else {
          this.isSuccess = data.message;
        }
      }
    });
  }

  // in style css  add , remove class
  callSign() {
    const btn = document.querySelector('.layout');

    this.isrgs = !this.isrgs;
    if (this.isrgs === true) {
      btn?.classList.add('go-registe');
      btn?.classList.remove('go-login');
    } else {
      btn?.classList.add('go-login');

      btn?.classList.remove('go-registe');
    }
  }
}
