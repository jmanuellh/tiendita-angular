import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { Producto } from "../model/producto.model";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl: string = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<any>(this.baseUrl+'/productos/'+id)
  }
  actualizarProducto(producto: Producto): Observable<void> {
    return this.http.put<any>(this.baseUrl+'/productos/'+producto.id, producto)
  }
  agregarProducto(producto: Producto): Observable<void> {
    return this.http.post<any>(this.baseUrl+'/productos', producto);
  }
  getProductos(): Observable<{data: Producto[]}> {
    return this.http.get<{data: Producto[]}>(this.baseUrl+'/productos');
  }
}
