import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-app-numbers',
  templateUrl: './app-numbers.component.html',
  styleUrls: ['./app-numbers.component.css']
})
export class AppNumbersComponent implements OnInit, OnChanges {

  isPlayingGame:boolean = false;
  numbers:number[] = [];
  point:number = 0;
  next:number = 1;
  timeleft:number = 60;

  constructor() { }

  ngOnInit(): void {
    for( let i = 1; i <= 100; i++ ){
      this.numbers.push(i)
    }
    //xao tron mang
    this.numbers = this.shuffle(this.numbers);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  playGame():void {
    this.isPlayingGame = true;
  }

  stopGame():void {
    this.isPlayingGame = false;
  }

  play(number:number):void {
    if( number == this.next ){
      //tang next
      this.next++;
      //cong diem
      this.point++;
      //xao tron
      //xao tron mang
      this.numbers = this.shuffle(this.numbers);
    }else{
      alert('Game Over !')
    }
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
