import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibir-id',
  templateUrl: './recibir-id.component.html',
  styleUrls: ['./recibir-id.component.css']
})
export class RecibirIdComponent {
  id:number=0
  
  constructor(public route:ActivatedRoute){
    this.id=this.route.snapshot.params['id']
  }
}
