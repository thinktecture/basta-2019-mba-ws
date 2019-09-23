import { CreateProductModel } from '../models/create-product-model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProductResolver implements Resolve<CreateProductModel> {

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CreateProductModel> | Promise<CreateProductModel> | CreateProductModel {
    return new CreateProductModel();
  }

}
