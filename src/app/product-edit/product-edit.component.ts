import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.productForm = new FormGroup({
      name: new FormControl('San pham A',[
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl('10000',[
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  handleSubmit():void {
    console.log(this.productForm.value);
  }

}
