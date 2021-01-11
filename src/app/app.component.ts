import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tiendita-angular';
  links: {url:string, nombre:string}[] = [
    {
      url: "inicio",
      nombre: "Inicio"
    },
    {
      url: "productos",
      nombre: "Productos"
    }
  ];
}
