import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './../templates/product-add.component.html'
})
export class ProductAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(value:any):void {
    console.log(value);
  }

}
