import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../service/producto.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this.productoService.getProductos()
      .subscribe( response => {
        console.log(response.data);
      });
  }

}
