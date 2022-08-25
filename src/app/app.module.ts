import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { AppNumbersComponent } from './app-numbers/app-numbers.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { AppRoutingModule } from "./app-routing.module";

import { ProductModule } from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent,
    BPropertyComponent,
    AppNumbersComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
