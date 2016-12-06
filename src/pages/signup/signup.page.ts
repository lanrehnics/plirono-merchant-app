import { UserDataProvider } from './../../providers/user-data.provider';
import { DashboardPage } from './../dashboard/dashboard.page';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl:  'signup.page.html',
})
export class SignupPage {
  public signup: {username?: string, password?: string} = {};
  public submitted: boolean = false;

  public constructor(
      public navCtrl: NavController,
      public userDataProvider: UserDataProvider,
  ) {}

  public onSignup(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.userDataProvider.signup(this.signup.username);
      this.navCtrl.setRoot(DashboardPage);
    }
  }
}
