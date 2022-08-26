import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "./../product-service.service";
import { Product } from "./../product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './../templates/product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
  constructor(
    private _ProductService:ProductServiceService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    
    // this.products = this._ProductService.getAll();
    // console.log(this.products);
    this.getAll();
  }

  getAll(){
    this._ProductService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  deleteItem(id:any):void{
    this._ProductService.destroy(id).subscribe(product => {
      //goi lai danh sach san pham
      this.getAll();
    });
  }

}
