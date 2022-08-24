import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [];

  constructor() {
    this.products = [
      {
        id:1,
        name:'Iphone 7',
        price:20000
      },
      {
        id:2,
        name:'Iphone 8',
        price:20000
      },
      {
        id:3,
        name:'Iphone 9',
        price:20000
      }
    ];
  }

  // lay tat ca
  getAll(): Product[]{
    return this.products;
  }

  //lay chi tiet
  find(idx:any): Product{

    return this.products[idx];

    // let product!:Product;

    // for( let i = 0; i < this.products.length; i++ ){
    //   if( id == this.products[i].id ){
    //     product = this.products[i];
    //     return product;
    //   }
    // }
    
    // return product;
  }

  //luu
  save(product:Product){
    this.products.push(product);
  }

  //cap nhat
  update(idx:number,product:Product){
    this.products[idx] = product;
    // for( let i = 0; i < this.products.length; i++ ){
    //   if( id == this.products[i].id ){
    //     this.products[i] = product
    //   }
    // }
  }

  //xoa
  destroy(idx:number){
    this.products.splice(idx,1);
  }
}
