import { AboutPage } from './../pages/about/about.page';
import { DashboardPage } from './../pages/dashboard/dashboard.page';
import { LoginPage } from './../pages/login/login.page';
import { SignupPage } from './../pages/signup/signup.page';
import { UserDataProvider } from './../providers/user-data.provider';
import { IPage } from './../structures/page.interface';

import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';


@Component({
  templateUrl: './app.html',
})
export class PlironoMerchantApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) public nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  public loggedInAppPages: IPage[] = [
    { title: 'Dashboard', component: DashboardPage, icon: 'home'},
    { title: 'About', component: AboutPage, icon: 'information-circle' },
  ];
  public loggedInAccountPages: IPage[] = [
    { title: 'Logout', component: LoginPage, icon: 'log-out', logsOut: true },
  ];
  public loggedOutAppPages: IPage[] = [
    { title: 'About', component: AboutPage, icon: 'information-circle' },
  ];
  public loggedOutAccountPages: IPage[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', component: SignupPage, icon: 'person-add' },
  ];
  public rootPage: Component;

  public constructor(
      public events           : Events,
      public userDataProvider : UserDataProvider,
      public MenuController   : MenuController,
      public storage          : Storage,
  ) {
    // Decide which menu items should be hidden by current login status stored in local storage
    this.userDataProvider.hasLoggedIn()
      .then((hasLoggedIn: boolean) => {
        if (hasLoggedIn) {
          this.enableMenu(true);
          this.rootPage = DashboardPage;
        } else {
          this.enableMenu(false);
          this.rootPage = AboutPage;
        }
      });

    this.listenToLoginEvents();
  }

  public openPage(page: IPage): void {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component)
      .catch(() => {
        console.error('Didn\'t set nav root');
      });

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
         this.userDataProvider.logout();
      }, 1000);
    }
  }

  public listenToLoginEvents(): void {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  public enableMenu(loggedIn: boolean): void {
    this.MenuController.enable(loggedIn, 'loggedInMenu');
    this.MenuController.enable(!loggedIn, 'loggedOutMenu');
  }
}
