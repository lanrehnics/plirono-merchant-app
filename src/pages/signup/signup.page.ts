import { UserDataProvider } from './../../providers/user-data.provider';
import { DashboardPage } from './../dashboard/dashboard.page';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl:  'signup.page.html',
})
export class SignupPage {
  signup: {username?: string, password?: string} = {};
  submitted: boolean = false;

  constructor(
      private navCtrl: NavController,
      private userDataProvider: UserDataProvider,
  ) {}

  onSignup(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.userDataProvider.signup(this.signup.username);
      this.navCtrl.setRoot(DashboardPage);
    }
  }
}
