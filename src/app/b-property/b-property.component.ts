import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html'
})
export class BPropertyComponent implements OnInit {

  colSpan:number = 2;
  isDisabled:boolean = true;
  color:string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  applyColor(color:any): void{
    this.color = color;
  }

}
