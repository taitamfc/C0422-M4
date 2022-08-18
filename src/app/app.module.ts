import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { AppNumbersComponent } from './app-numbers/app-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    BPropertyComponent,
    AppNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
