import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  //cha
  @Output('appClick') appClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  childClick(value:any){
    //value: 123
    alert('childClick');
    this.appClick.emit(value);
  }

}
