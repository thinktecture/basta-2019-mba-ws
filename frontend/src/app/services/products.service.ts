import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListItem } from '../models/product-list-item';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ProductDetailsItem } from '../models/product-details-item';
import { CreateProductModel } from '../models/create-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly _http: HttpClient) {
  }

  public getAllProducts(): Observable<ProductListItem[]> {
    const requestUrl = `${environment.apiRoot}`;
    return this._http.get<ProductListItem[]>(requestUrl)
      .pipe(
        retry(3),
        tap(result => console.log(result)),
        catchError(err => of([]))
      );
  }

  public getProductById(id: string): Observable<ProductDetailsItem> {
    const requestUrl = `${environment.apiRoot}/${id}`;
    return this._http.get<ProductDetailsItem>(requestUrl)
      .pipe(
        catchError(err => of(null))
      );
  }

  public createProduct(model: CreateProductModel): Observable<ProductDetailsItem>{
    const requestUrl = `${environment.apiRoot}`;
    return this._http.post<ProductDetailsItem>(requestUrl, model);
  }
}
