import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Login } from '../data_model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
@Input() showProgress = false;
@Input() showMessage = false;
@Input() mensagemSucesso: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  onSubmit(value: any): void {
    this.showMessage = false;
    if (this.loginForm.valid) {
      this.showProgress = true;
      setTimeout(() => {
        this.showProgress = false;
      }, 2000);
      if (value.email !== 'henderix@gmail.com' || value.password !== '12345678') {
        this.showMessage = true;
        this.mensagemSucesso = 'Login invalid.';
        console.log(value.email);
      } else {
        this.showMessage = true;
        this.mensagemSucesso = 'Login acomplisshed with success.';
      }
    } else {
      this.showMessage = true;
      this.mensagemSucesso = 'Inform fields email and password for login.';
    }
  }
}
