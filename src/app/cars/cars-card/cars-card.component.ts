import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.css']
})
export class CarsCardComponent  {

  @Input()
  passat={};
  @Input()
  isSelected=false;
  @Output ('selected')
  onSelect = new EventEmitter();

  get passatStyle(){
    return {color: 'gray'}
  }

  select(){
    this.onSelect.emit(this.passat)
  }
}
