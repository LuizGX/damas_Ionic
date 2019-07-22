import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
        if(i==0 || i==1 || i==2){
          if(i%2 == 0 && j%2 == 0){
            this.pieces[i][j] = "pieceBlue";
          }else if(i%2 != 0 && j%2 != 0){
            this.pieces[i][j] = "pieceBlue"
          } else {
            this.pieces[i][j] = "white";
          }
        } else if(i==5 || i==6 || i==7){
          if(i%2 == 0 && j%2 == 0){
            this.pieces[i][j] = "pieceRed";
          }else if(i%2 != 0 && j%2 != 0){
            this.pieces[i][j] = "pieceRed"
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

  moveBlue(i, j){
    try{
      //remove the piece
      // this.pieces[i][j] = "black";
      this.showPossibleMoves(i,j);
      console.log(this.pieces);
      
      //set the piece in the other square
      //this.pieces[i2][j2] = "pieceBlue";
    } catch (err){
      alert(err);
    }
  }

  showPossibleMoves(i,j){
    if(this.pieces[i+1][j]){

      if(this.pieces[i+1][j-1]){
        this.pieces[i+1][j-1]="move";
      }
      if(this.pieces[i+1][j+1]){
        this.pieces[i+1][j+1]="move";
      }

    }
  }

}
