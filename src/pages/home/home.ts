import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  board: any = [];
  test: any = "assets/imgs/black.png";
  constructor(public navCtrl: NavController) {
    console.log("board", this.board);
    for(let i=0; i < 8; i++){
      this.board[i] = [];
      for(var j: number = 0; j< 8; j++) {
        if(i%2 == 0 && j%2 == 0){
          this.board[i][j] = "black";
        }else if(i%2 != 0 && j%2 != 0){
          this.board[i][j] = "black"
        } else{
          this.board[i][j] = "white"
        }
      }
    }
    console.log(this.board);
  }

}
