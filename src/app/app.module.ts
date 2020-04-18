import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../app/home/search.pipe';
import { RatingModule } from 'ng-starrating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '../app/home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, routing,FormsModule,RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
