import { AuthFactory } from './../../../domain/auth.factory';
import { AuthApplication } from './../../../application/auth.application';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public group: FormGroup;

  constructor(
    private readonly _authApplication: AuthApplication,
  ) {
    this.group = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    const values = this.group.value;
    const auth = AuthFactory.create(values.correo, values.password)
    this._authApplication.login(auth);
  }

}
