import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Output() event= new EventEmitter();

  public addEvent(color:string){
    this.event.emit(color);
  }

}
