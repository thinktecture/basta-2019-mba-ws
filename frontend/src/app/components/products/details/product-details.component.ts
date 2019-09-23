import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'basta-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public detailsForm = new FormGroup({
    name: new FormControl(null,),
    manufacturer: new FormControl(null),
    color: new FormControl(null),
    description: new FormControl(null)
  });

  constructor(private readonly _productService: ProductsService,
              private readonly _route: ActivatedRoute) {
  }

  ngOnInit() {
    const productId = this._route.snapshot.paramMap.get('id');
    
    this._productService.getProductById(productId)
      .subscribe(foundProduct => {
        this.detailsForm.patchValue(foundProduct);
      });

  }

}
