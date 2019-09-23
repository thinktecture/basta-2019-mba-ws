import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductListItem } from '../../../models/product-list-item';
import { Router } from '@angular/router';

@Component({
  selector: 'basta-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private readonly _productsService: ProductsService,
              private readonly _router: Router) { }

  public allProducts: ProductListItem[] = [];

  public ngOnInit() {
    this._productsService.getAllProducts()
      .subscribe(products => {
          this.allProducts = products;
      });
  }

  public goToDetails(id: string){
    if(id) {
      this._router.navigate(['details', id]);
    }
  }

}
