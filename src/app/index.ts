import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { FormsModule }   from '@angular/forms';

import {HelloComponent} from './hello';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
