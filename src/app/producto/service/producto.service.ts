import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { Producto } from "../model/producto.model";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  agregarProducto(producto: Producto): Observable<void> {
    return this.http.post<any>(this.baseUrl+'/productos', producto);
  }
  private baseUrl: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<{data: Producto[]}> {
    return this.http.get<{data: Producto[]}>(this.baseUrl+'/productos');
  }
}
