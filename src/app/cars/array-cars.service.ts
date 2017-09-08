import {CarsService} from './cars.service';
import {Inject, Injectable, Optional} from '@angular/core';

@Injectable()
export class ArrayCarsService {

  private passats = [];

  constructor(@Optional() @Inject('PassatsData') passats=[]) {
    this.passats=passats;
  }

  getAll(){
    return this.passats
  }

  save(passat){
    passat.id=this.nextId();
    this.passats.push(passat)
  }



  update(passat){
    let index=this.findIndex(passat.id);
    if(index!=-1){
      this.passats[index]=passat;
    }
  }

  remove(passat){
    let index=this.findIndex(passat.id);
    if(index!=-1){
      this.passats.splice(index,1)
    }
    console.log(this.passats)
  }

  private findIndex(id:String){
    return this.passats.findIndex(passat=>id == passat.id)

  }
  private nextId() {
    return `passerati-${Date.now()}`;
  }

}
