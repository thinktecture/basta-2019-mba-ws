import { ProductDetailsItem } from '../models/product-details-item';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductDetailsItem> {

  constructor(private readonly _productsService: ProductsService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetailsItem> | Promise<ProductDetailsItem> | ProductDetailsItem {
    const id = route.paramMap.get('id');
    return this._productsService.getProductById(id);
  }

}
