import {Component, OnInit} from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hello';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  template: require('./heroes.html'),
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router) { }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

}

