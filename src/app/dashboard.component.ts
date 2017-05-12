import {Component, OnInit} from '@angular/core';

import { HeroService } from './hero.service';
import {Hero} from './hello';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.css'],
  template: require('./dashboard.html')
})

export class DashboardComponent implements OnInit {
  private heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
