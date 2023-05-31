import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path : 'supplier', component : SupplierComponent},
  {path : 'client', component : ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
