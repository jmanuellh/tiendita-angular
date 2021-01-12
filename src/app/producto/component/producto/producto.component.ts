import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { ProductoService } from "../../service/producto.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []
  public productoForm = this.fb.group({
    id: [null],
    nombre: [null],
    precio: [null]
  });

  constructor(public productoService: ProductoService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.obtenerProductos()
  }

  limpiarForm(): void {
    this.productoForm.reset()
    console.log(this.productoForm.value)
  }

  obtenerProductos(): void {
    this.productoService.getProductos()
      .subscribe( response => {
        this.productos = response.data
    });
  }
  agregarProducto(): void {
    this.productoService.agregarProducto(this.productoForm.value)
      .subscribe( () => {
        this.limpiarForm()
        this.obtenerProductos()
      })
  }
  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id)
      .subscribe( () => {
        this.obtenerProductos()
      })
  }
  editandoProducto(producto: Producto): void {
    this.productoForm.setValue(producto);
  }
  actualizarProducto(): void {
    this.productoService.actualizarProducto(this.productoForm.value)
      .subscribe( () => {
        this.limpiarForm()
        this.obtenerProductos()
      })
  }
}
