import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


@Injectable()
export class UserDataProvider {
  private HAS_LOGGED_IN: string = 'hasLoggedIn';

  constructor(
      private events: Events,
      private storage: Storage,
  ) {}

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  }

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

  setUsername(username: string): void {
    this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username')
      .then((value: string) => {
        return value;
      });
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN)
      .then((value: boolean) => {
        return value === true;
      });
  }
}
