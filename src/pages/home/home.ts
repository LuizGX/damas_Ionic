import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  board: any = [];
  pieces: any = [];
  test: any = "assets/imgs/black.png";
  constructor(public navCtrl: NavController) {
    this.innitialize();
    console.log("pieces", this.pieces);
  }

  innitialize(){
    for(let i=0; i < 8; i++){
      this.pieces[i] = [];
      for(var j: number = 0; j< 8; j++) {
        if(i==0 || i==1 || i==2 || i==5 || i==6 || i==7){
          if(i%2 == 0 && j%2 == 0){
            this.pieces[i][j] = "piece";
          }else if(i%2 != 0 && j%2 != 0){
            this.pieces[i][j] = "piece"
          } else {
            this.pieces[i][j] = "white";
          }
        } else if(i%2 == 0 && j%2 == 0){
          this.pieces[i][j] = "black";
        }else if(i%2 != 0 && j%2 != 0){
          this.pieces[i][j] = "black"
        } else{
          this.pieces[i][j] = "white"
        }
      }
    } 
  }

}
