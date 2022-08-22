import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';//data
  name:string = 'Nguyen Van A';
  image:string = 'https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg';


  handleClick():void {
    // alert(123);
    this.name = 'Nguyen Van C';
  }

  appComponentClick(value:any){
    alert('appComponentClick' + value);
  }
}