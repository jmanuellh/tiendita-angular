import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from "./producto/lista-producto/lista-producto.component";

const routes: Routes = [
  {
    path: 'productos',
    component: ListaProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
