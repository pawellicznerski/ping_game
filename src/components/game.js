//creating contructor for Game object
import Pallet from "./pallet.js"
import Ball from "./ball.js"
import Info from "./info.js"
import Score from "./score.js"

export const ball = new Ball();
const palletPlayer = new Pallet();
palletPlayer.palletDOM = document.getElementsByClassName('pallet_left')[0];
const palletComp = new Pallet();
palletComp.palletDOM = document.getElementsByClassName('pallet_right')[0];
const info = new Info();
const score = new Score()


export default class Game{
  constructor(){
    // this.scorePLayer=0;
    // this.scoreComputer=0;
    // this.scoreBoth=0;
  }
  play(){
    document.addEventListener("mousemove",(e)=>{
      const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
      palletPlayer.palletDOM.setAttribute("style",`top:${topPosition}px`)
    });

    const id = setInterval(movingBall,1);

    function movingBall(){
      const palletTopLeft= document.getElementsByClassName('pallet_left')[0].offsetTop;
      const palletTopRight= document.getElementsByClassName('pallet_right')[0].offsetTop;

      if(ball.ballLeft==20||ball.ballLeft+40==window.innerWidth){
        const val = ball.ballLeft==20?palletTopLeft:palletTopRight;
        ball.hitTheBall(val);
      }

      if(ball.ballLeft<=0||ball.ballLeft+20>=window.innerWidth){
        clearInterval(id);
        ball.stopBall();
      }



      if(ball.ballTop<=0||ball.ballTop+24>=window.innerHeight){
        ball.ballDirectionTop=ball.ballDirectionTop*(-1);
      }

      if(ball.ballTop<palletComp.palletTop){
        palletComp.palletTop=palletComp.palletTop-2;
        palletComp.palletDOM.setAttribute("style",`top:${palletComp.palletTop}px`)
      } else if(ball.ballTop>palletComp.palletTop+91){
        palletComp.palletTop=palletComp.palletTop+2;
        palletComp.palletDOM.setAttribute("style",`top:${palletComp.palletTop}px`)
      }


      const rondomValue = Math.random();
      ball.ballDOM.setAttribute("style",`top:${ball.ballTop}px;left:${ball.ballLeft}px`);
      ball.ballLeft=ball.ballLeft-ball.ballDirectionLeft;
      ball.ballTop=ball.ballTop+(ball.ballSpeed*ball.ballDirectionTop);
      // console.log(currentLeft);
    }
  };
}
