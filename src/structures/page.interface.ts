import { Component } from '@angular/core';


export interface IPage {
  title     : string;
  component : Component;
  icon      : string;
  logsOut?  : boolean;
}
