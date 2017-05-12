import {Component, OnInit} from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hello';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/hello.css'],
  template: require('./heroes.html'),
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}

