import { Component, Input } from '@angular/core';
import {Hero} from './hello';

@Component({
  selector: 'hero-detail',
  template: require('./hero-detail.html')
})
export class HeroDetailComponent {
  @Input() hero: Hero;

}


