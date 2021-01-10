import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { ProductoService } from "../../service/producto.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this.productoService.getProductos()
      .subscribe( response => {
        this.productos = response.data
    });
  }

}
