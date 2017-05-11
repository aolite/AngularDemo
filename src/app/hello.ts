import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'fountain-app',
  styleUrls: ['app/hello.css'],
  template: require('./hello.html')
})
export class HelloComponent {

  public title: string;

  public heroes = HEROES;

  constructor() {
    this.title = 'Tour of heroes';
  }
}

