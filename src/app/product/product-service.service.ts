import { Injectable } from '@angular/core';
import { Product } from "./product";
import { environment } from "./../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  api_url:string = '';
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url
  }


  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(this.api_url);
  }

  //lay chi tiet
  find(id:any):Observable<Product>{
    return this.http.get<Product>(this.api_url+'/'+id);
  }

  //luu
  save(product:Product){
    this.products.push(product);

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //cap nhat
  update(id:number,product:Product){
    return this.http.put<Product>(this.api_url + '/' + id, product);
  }

  //xoa
  destroy(id:any){
    return this.http.delete<Product>(this.api_url + '/' + id);
  }
}

