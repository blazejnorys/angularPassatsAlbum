import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {

    @Input()
    passat={};

    @Output('save')
    onSave = new EventEmitter();
    @Output('cancel')
    onCancel = new EventEmitter();
    @Output('remove')
    onRemove = new EventEmitter();


    save(carForm){
      if(carForm.valid)
      this.onSave.emit(this.passat);
    }

    remove(){
      this.onRemove.emit(this.passat);
    }

    cancel(){
      this.onCancel.emit();
    }
}
