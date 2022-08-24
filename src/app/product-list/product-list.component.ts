import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "./../product-service.service";
import { Product } from "./../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
  constructor(
    private _ProductService:ProductServiceService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
    console.log(this.products);
  }

}
