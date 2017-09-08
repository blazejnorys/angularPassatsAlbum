import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarsCardComponent } from './cars-card/cars-card.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import {HttpModule} from "@angular/http";
import {HttpCarsService} from "./http-cars.service";
import {CarsListComponent} from "./cars-list/cars-list.component";
import { CarsPanelComponent } from './cars-panel/cars-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],

  exports:[
    CarsCardComponent,
    CarsFormComponent,
    CarsListComponent,
    CarsPanelComponent
  ],

  providers: [
  { provide: 'CarsService', useClass: HttpCarsService }
],

  declarations: [CarsCardComponent, CarsFormComponent, CarsListComponent, CarsPanelComponent]
})
export class CarsModule { }
