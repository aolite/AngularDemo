import {Component} from '@angular/core';


export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'fountain-app',
  styleUrls: ['app/hello.css'],
  template: require('./hello.html'),
})

export class HelloComponent {

  public title: string;

  constructor() {
    this.title = 'Tour of heroes';
  }
}

