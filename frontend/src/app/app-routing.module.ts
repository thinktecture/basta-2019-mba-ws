import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/products/list/product-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/products/details/product-details.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'details/:id', component: ProductDetailsComponent},
  { path: '', pathMatch: 'full', redirectTo: '/products'},

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
