import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/products/list/product-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/products/details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesktopProductsService } from './services/desktop.products.service';
import { ProductsService } from './services/products.service';
import { MobileProductsService } from './services/mobileProductsService';

export function ProductsServiceFactory(http: HttpClient) {
  if (process['electron_version']) {
    return new DesktopProductsService(http);
  } else if (window['cordova']) {
    return new MobileProductsService(http);
  }
  return new ProductsService(http);
}

@NgModule({
  declarations: [

    RootComponent,
    NavigationComponent,
    ProductListComponent,
    NotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ProductsService, useFactory: ProductsServiceFactory, deps: [HttpClient]}
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
