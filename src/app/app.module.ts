import { AboutPage } from './../pages/about/about.page';
import { DashboardPage } from './../pages/dashboard/dashboard.page';
import { LoginPage } from './../pages/login/login.page';
import { SignupPage } from './../pages/signup/signup.page';
import { UserDataProvider } from './../providers/user-data.provider';
import { PlironoMerchantApp } from './app';

import { ErrorHandler, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PlironoMerchantApp,
    AboutPage,
    DashboardPage,
    LoginPage,
    SignupPage,
  ],
  imports: [
    IonicModule.forRoot(PlironoMerchantApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PlironoMerchantApp,
    AboutPage,
    DashboardPage,
    LoginPage,
    SignupPage,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    Storage,
  ],
})
export class AppModule {}
