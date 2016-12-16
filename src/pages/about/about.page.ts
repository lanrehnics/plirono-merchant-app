import { SignupPage } from './../signup/signup.page';

import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';


@Component({
  templateUrl:  'about.page.html',
})
export class AboutPage {
  conferenceDate: string = '2047-05-17';

  constructor(
      private popoverCtrl: PopoverController,
      private navCtrl    : NavController,
  ) {}

  presentPopover(event: EventListenerOrEventListenerObject): void {
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({ ev: event });
  }

  onSignup(): void {
    this.navCtrl.setRoot(SignupPage);
  }
}
