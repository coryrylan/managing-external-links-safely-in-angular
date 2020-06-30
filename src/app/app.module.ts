import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ExternalLinkDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
