import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CarsModule} from './cars/cars.module';
import passatsData from './passats.data';

import { AppComponent } from './app.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarsModule
  ],
  providers: [
    { provide: 'PassatsData', useValue: passatsData },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
