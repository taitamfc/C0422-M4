import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductAddComponent } from './components/product-add.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
