import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CreateProductModel } from '../../../models/create-product-model';

@Component({
  selector: 'basta-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public isNewProduct = false;

  public detailsForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    manufacturer: new FormControl(null),
    color: new FormControl(null),
    description: new FormControl(null)
  });

  constructor(private readonly _productService: ProductsService,
              private readonly _route: ActivatedRoute,
              private readonly _router: Router) {
  }

  public ngOnInit() {

    this._route.data
      .subscribe((data: { product: any }) => {
        this.detailsForm.patchValue(data.product);
        if (!data.product.id) {
          this.isNewProduct = true;
        }
      });

  }

  public storeNewProduct() {
    // todo
    const model = {
      name: this.detailsForm.value.name,
      description: this.detailsForm.value.description,
      manufacturer: this.detailsForm.value.manufacturer,
      color: this.detailsForm.value.color
    } as CreateProductModel;

    this._productService.createProduct(model)
      .subscribe((createdProduct) => {
        debugger;
        this._router.navigate(['products'])
      })

  }

}
