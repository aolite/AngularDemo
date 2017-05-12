import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { FormsModule }   from '@angular/forms';

import {HelloComponent} from './hello';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
