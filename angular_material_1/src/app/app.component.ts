import { Component } from '@angular/core';
import { ServicioMenuService } from './servicio-menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angular_material_1';

  constructor(public menu:ServicioMenuService){}
}
