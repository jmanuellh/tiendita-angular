import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { Producto } from "./producto/producto.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8000/api';

  getProductos(): Observable<Producto> {
    return this.http.get<Producto>(this.baseUrl);
  }

}
