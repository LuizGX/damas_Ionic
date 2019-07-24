import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pieces: any = [];
  test: any = "assets/imgs/black.png";
  chosenPiece:any;
  pieceI:any;
  pieceJ:any;
  turn: any = "blue";
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

  movement(i, j){
    this.clearMoves();
    if(this.pieces[i][j] == "pieceRed" && this.turn == "red"){
      this.showPossibleMoves(i,j);
    } else if(this.pieces[i][j] == "pieceBlue" && this.turn == "blue"){
      this.showPossibleMoves(i,j);
    }
    console.log(this.pieces);
  }

  showPossibleMoves(i,j){
    this.pieceI = i;
    this.pieceJ = j;

    if(this.pieces[i][j] == "pieceBlue"){
      this.chosenPiece = "pieceBlue";
      if(this.pieces[i+1][j]){
        if(this.pieces[i+1][j-1] && this.pieces[i+1][j-1] != "pieceBlue" && this.pieces[i+1][j-1] != "pieceRed"){
          this.pieces[i+1][j-1]="move";
        } else if(this.pieces[i+2][j-2] && this.pieces[i+1][j-1] == "pieceRed" && this.pieces[i+2][j-2] == "black"){
          //else if the is a square on the left to jump to && the left piece is red && the square to go is black
          this.pieces[i+2][j-2]="move";
        }

        if(this.pieces[i+1][j+1] && this.pieces[i+1][j+1] != "pieceBlue" && this.pieces[i+1][j+1] != "pieceRed"){
          this.pieces[i+1][j+1]="move";
        } else if(this.pieces[i+2][j+2] && this.pieces[i+1][j+1] != "pieceBlue" && this.pieces[i+2][j+2] == "black"){
          this.pieces[i+2][j+2]="move";
        }

      }



    } else if(this.pieces[i][j] == "pieceRed"){
      this.chosenPiece = "pieceRed";
      if(this.pieces[i-1][j]){
        if(this.pieces[i-1][j-1] && this.pieces[i-1][j-1] != "pieceRed" && this.pieces[i-1][j-1] != "pieceBlue"){
          //if he can go to left && the left piece is not red nor blue
          this.pieces[i-1][j-1]="move";
        } else if(this.pieces[i-2][j-2] && this.pieces[i-1][j-1] == "pieceBlue" && this.pieces[i-2][j-2] =="black"){
          //else if there is a square on the left to jump to && the left piece is blue && the square to go is black
          this.pieces[i-2][j-2]="move";
        }

        if(this.pieces[i-1][j+1] && this.pieces[i-1][j+1] != "pieceRed" && this.pieces[i-1][j+1] != "pieceBlue"){
          this.pieces[i-1][j+1]="move";
        } else if(this.pieces[i-2][j+2] && this.pieces[i-1][j+1] == "pieceBlue" && this.pieces[i-2][j+2] == "black"){
          this.pieces[i-2][j+2]="move";
        }
      } 
    }

  }

  moveHere(i2,j2){
    //remove the piece
    try{
      if(this.chosenPiece == "pieceBlue"){
        this.pieces[this.pieceI][this.pieceJ] = "black";
        this.pieces[i2][j2] = "pieceBlue";
        this.turn = "red";
      } else if (this.chosenPiece == "pieceRed"){
        this.pieces[this.pieceI][this.pieceJ] = "black";
        this.pieces[i2][j2] = "pieceRed";
        this.turn = "blue";
      }
      this.capture(this.pieceI, this.pieceJ, i2, j2);
    }catch(err){
      alert(err);
    }
  }

  capture(cameFromi, cameFromj, goToi2, goToj2){
    if(goToi2 - cameFromi == 2){//blue captures
      
      if(goToj2 - cameFromj == 2){//to the right
        this.pieces[goToi2-1][goToj2-1] = "black";
      } else if(goToj2 - cameFromj == -2){//to the left
        this.pieces[goToi2-1][goToj2+1] = "black";
      }
      
    } else if (goToi2 - cameFromi == -2){//red captures
      
      if(goToj2 - cameFromj == 2){//to the right
        this.pieces[goToi2+1][goToj2-1] = "black";
      } else if(goToj2 - cameFromj == -2){//to the left
        this.pieces[goToi2+1][goToj2+1] = "black";
      }
      
    }
    
    this.clearMoves();
  }

  clearMoves(){
    for(let i = 0; i<8; i++){
      for(let j = 0; j<8; j++){
        if(this.pieces[i][j] == 'move'){
          this.pieces[i][j] = "black";
        }
      }
    }
  }

}
