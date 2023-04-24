import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  @Input() mensaje2:string

  constructor(){
    this.mensaje2=""
  }
}
