import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductServiceService } from "./../product-service.service";
import { Product } from "./../product";
@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

  productForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductServiceService,
    private _Router: Router
  ) {}

  ngOnInit(): void {

    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;

      this._ProductService.find(id).subscribe(product => {
        this.product = product;
        this.productForm = new FormGroup({
          name: new FormControl(this.product.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          price: new FormControl(this.product.price,[
            Validators.required,
            Validators.minLength(3)
          ]),
        });
      });

      
    });

    
  }

  handleSubmit():void {
    // console.log(this.productForm.value);
    let productData:Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    // call service update
    this._ProductService.update(this.id, productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/product']);
    }, e => {
      console.log(e);
    });

  }

}
