import {Component} from '@angular/core';

import { HeroService } from './hero.service';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'fountain-app',
  styleUrls: ['app/hello.css'],
  template: require('./hello.html'),
  providers: [HeroService]
})
export class HelloComponent {

  public title: string;
  public selectedHero: Hero;
  public heroes: Hero[];


  constructor(private heroService: HeroService) {
    this.title = 'Tour of heroes';
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}

