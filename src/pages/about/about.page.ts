import { SignupPage } from './../signup/signup.page';

import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';


@Component({
  templateUrl:  'about.page.html',
})
export class AboutPage {
  public conferenceDate: string = '2047-05-17';

  public constructor(
      public popoverCtrl: PopoverController,
      public navCtrl    : NavController,
  ) {}

  public presentPopover(event: EventListenerOrEventListenerObject): void {
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({ ev: event });
  }

  public onSignup(): void {
    this.navCtrl.setRoot(SignupPage);
  }
}
