import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samra-pauline-TP1';

  color = "white";

  public changeColor(newColor : string){
    console.log(newColor);
    this.color = newColor;
  }
}
