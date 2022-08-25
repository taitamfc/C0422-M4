import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [];

  constructor() {

    let old_products = window.localStorage.getItem('products');
    if( !old_products ){
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
      let stringProducts = JSON.stringify(this.products);
      window.localStorage.setItem('products',stringProducts);
    }else{
      this.products = JSON.parse(old_products);
    }

    
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

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //cap nhat
  update(idx:number,product:Product){
    this.products[idx] = product;
    // for( let i = 0; i < this.products.length; i++ ){
    //   if( id == this.products[i].id ){
    //     this.products[i] = product
    //   }
    // }

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //xoa
  destroy(idx:number){
    this.products.splice(idx,1);
  }
}

