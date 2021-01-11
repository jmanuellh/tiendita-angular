import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { ProductoService } from "../../service/producto.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []
  public productoForm = this.fb.group({
    nombre: [''],
    precio: ['']
  });

  constructor(public productoService: ProductoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this.productoService.getProductos()
      .subscribe( response => {
        this.productos = response.data
    });
  }

  agregarProducto() {
    
  }

}
