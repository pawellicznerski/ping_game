//creating contructor for Game object
import Pallet from "./pallet.js"
import Ball from "./ball.js"
import Info from "./info.js"

const ball = new Ball();
const pallet = new Pallet();


export default class Game{
  constructor(top,left,height){
    this.score=false;
    this.balls=2;
  }
  play(){
    document.addEventListener("mousemove",(e)=>{
      const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
      pallet.palletDOM.setAttribute("style",`top:${topPosition}px`)
      // const palletDOM = document.getElementsByClassName('pallet_left');
      // console.log("top",document.getElementsByClassName('pallet_left')[0].offsetTop);
      // console.log('palletTop',palletTop);

    });

    const id = setInterval(movingBall,1);

    function movingBall(){
      const palletTop= document.getElementsByClassName('pallet_left')[0].offsetTop;
      // let ballDirectionTopVal=1;
      // console.log("currentLeft",currentLeft,ball.ballDirectionLeft);
      // const theBall = document.getElementById('ball');
      // console.log("theBall",theBall);
      // console.log('palletTop',palletTop);

      // if(ball.ballLeft<=20||ball.ballLeft+40>=window.innerWidth){
      if(ball.ballLeft<=20){
        if(palletTop<=ball.ballTop+20&&palletTop+100>=ball.ballTop-20){
          ball.ballDirectionLeft=ball.ballDirectionLeft*(-1);
          ball.ballDirectionTop=Math.random()>0.5?-1:1;
          ball.ballSpeed=(((Math.random()*2.9)+0.1)*window.innerWidth)/window.innerWidth;
          console.log('ball.ballSpeed',ball.ballSpeed);
        }
      }
      if(ball.ballLeft+20>=window.innerWidth){
        ball.ballDirectionLeft=ball.ballDirectionLeft*(-1);
      }
      if(ball.ballLeft<=0){
        clearInterval(id);
      }

      if(ball.ballTop<=0||ball.ballTop+20>=window.innerHeight){
        ball.ballDirectionTop=ball.ballDirectionTop*(-1);
      }

      const rondomValue = Math.random();
      ball.ballDOM.setAttribute("style",`top:${ball.ballTop}px;left:${ball.ballLeft}px`);
      ball.ballLeft=ball.ballLeft-ball.ballDirectionLeft;
      ball.ballTop=ball.ballTop+(ball.ballSpeed*ball.ballDirectionTop);
      // console.log(currentLeft);
    }
  };
  gameOver(){

  }
}
