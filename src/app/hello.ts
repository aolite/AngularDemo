import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
export class HelloComponent {
  public title: string;

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {
    this.title = 'Tour of heroes';
  }
}

export class Hero {
  id: number;
  name: string;
}
