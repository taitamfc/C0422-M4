import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input('title') title:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
  }

}
