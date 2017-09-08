import {Component, Inject, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars-panel',
  templateUrl: './cars-panel.component.html',
  styleUrls: ['./cars-panel.component.css']
})
export class CarsPanelComponent implements OnInit {


  selected={};
  edited=null;
  passats=[];

  constructor(@Inject('CarsService') private carsService:CarsService){

  }

  ngOnInit(): void {
    this.refresh()
  }

  private refresh(){
    this.carsService.getAll()
      .subscribe(passats=>this.passats =passats)
  }

  newPassat(){
    this.edited={}
  }

  remove(passat){
    this.carsService.remove(passat).subscribe(()=>this.refresh());
  }

  select(passat){
    this.selected=passat;
    this.edited=Object.assign({},passat);
  }

  reset(){
    this.selected={};
    this.edited=null;
  }

  save(){
    if(this.edited.id){
      this.carsService.update(this.edited)
        .subscribe(() => this.refresh())

      if(this.edited.available==true) {
        this.carsService.saveId(this.edited.id)
          .subscribe(() => this.refresh())

      }else{
        this.carsService.removeId(this.edited.id)
          .subscribe(() => this.refresh())
      }

    }else{


      this.carsService.save(this.edited)
        .subscribe(()=>this.refresh());

      if(this.edited.available==true){
        this.carsService.saveId(this.edited.id)
          .subscribe(() => this.refresh())

      }else{
        this.carsService.removeId(this.edited.id)
          .subscribe(() => this.refresh())
      }

    }
    this.reset();
  }



  cancel(){
    this.reset();
  }
}
