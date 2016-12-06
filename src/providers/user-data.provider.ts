import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


@Injectable()
export class UserDataProvider {
  private HAS_LOGGED_IN: string = 'hasLoggedIn';

  public constructor(
      public events: Events,
      public storage: Storage
  ) {}

  public login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }

  public signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  }

  public logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

  public setUsername(username: string): void {
    this.storage.set('username', username);
  }

  public getUsername(): Promise<string> {
    return this.storage.get('username')
      .then((value: string) => {
        return value;
      });
  }

  public hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN)
      .then((value: boolean) => {
        return value === true;
      });
  }
}
