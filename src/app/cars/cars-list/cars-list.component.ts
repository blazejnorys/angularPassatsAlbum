import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input() //nazwa do odwołania domyślnie nazwa pola
  passats =[];

  @Output('select')
  onSelect = new EventEmitter()
  selected={};


  constructor() { }

  ngOnInit() {
  }

  select(passat){
    this.selected=passat;
    this.onSelect.emit(passat)
  }
}
