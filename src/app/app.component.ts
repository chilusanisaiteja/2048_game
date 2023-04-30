import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2048_game';
  score:number =0;
  gamewon:boolean = false;
  
   
  board:number[][]=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  arr:number[]=[0,1,2,3];

  ngOnInit(){

  }

  handlesubmit(r:number,c:number){
    if(this.board[r][c]==0){
      this.board[r][c]=2;
    }
  }

  slide1(arr:Array<number>){
    var a: number[]=[];
    if(arr.length>0){
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]==arr[i+1]){
        arr[i]*=2;
        this.score += arr[i];
        arr[i+1]=0;
        if (arr[i] === 2048) {
          this.gamewon = true;
      }
      }
    }
  }

  a=arr.filter((val)=>(val!==0));
  while(a.length < 4){
    a.push(0);
  }
  return a;
  }

  slideleft(){
    for(let i=0;i<4;i++){
    const arr = this.board[i].filter((x)=>(x!==0));
    this.board[i]=this.slide1(arr);
    }
  }

  slideright(){
    for(let i=0;i<4;i++){
      const arr = this.board[i].filter((x)=>(x!==0));
      this.board[i] = this.slide1(arr.reverse()).reverse();
    }
  }

  slideup(){
    for(let i=0;i<4;i++)
    {
      const b = [];
      for(let j=0;j<4;j++){
        b.push(this.board[j][i]);
      }
      const d = b.filter((x)=>(x!=0));
      const c = this.slide1(d);
      for(let j=0;j<4;j++){
        this.board[j][i] = c[j];
      }
    }  
  }

  slidedown(){
    for(let i=0;i<4;i++)
    {
      const b = [];
      for(let j=0;j<4;j++){
        b.push(this.board[j][i]);
      }
      const d = b.filter((x)=>(x!=0));
      const c = this.slide1(d.reverse()).reverse();
      for(let j=0;j<4;j++){
        this.board[j][i] = c[j];
      }
    }  
  }

}
