import { Component } from '@angular/core';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.scss']
})
export class Course2Component {

  public favoriteColor : string = '';
  public setValue(){
    this.favoriteColor='Red';
  }

}
