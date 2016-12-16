import { UserDataProvider } from './../../providers/user-data.provider';
import { DashboardPage } from './../dashboard/dashboard.page';
import { SignupPage } from './../signup/signup.page';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl:  'login.page.html',
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted: boolean = false;

  constructor(
      private navCtrl: NavController,
      private userDataProvider: UserDataProvider,
  ) {}

  onLogin(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.userDataProvider.login(this.login.username);
      this.navCtrl.setRoot(DashboardPage);
    }
  }

  onSignup(): void {
    this.navCtrl.setRoot(SignupPage);
  }
}
