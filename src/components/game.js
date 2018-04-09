//creating contructor for Game object
import Pallet from "./pallet.js"
import Ball from "./ball.js"
import Info from "./info.js"
import Score from "./score.js"

export const ball = new Ball();
export const info = new Info();
export const score = new Score()

const palletPlayer = new Pallet();
palletPlayer.palletDOM = document.getElementsByClassName('pallet_left')[0];

const palletComp = new Pallet();
palletComp.palletDOM = document.getElementsByClassName('pallet_right')[0];
palletComp.movePalletComp = function(){
  if(ball.ballTop<palletComp.palletTop){
    palletComp.palletTop=palletComp.palletTop-2;
    palletComp.palletDOM.setAttribute("style",`top:${palletComp.palletTop}px`)
  } else if(ball.ballTop>palletComp.palletTop+91){
    palletComp.palletTop=palletComp.palletTop+2;
    palletComp.palletDOM.setAttribute("style",`top:${palletComp.palletTop}px`)
  }
}


export default class Game{

  play(){
    ball.setInitialState();
    
    document.addEventListener("mousemove",(e)=>{
      const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
      palletPlayer.palletDOM.setAttribute("style",`top:${topPosition}px`)
    });

    const id = setInterval(movingBall,1);

    function movingBall(){
      if(ball.ballLeft==20||ball.ballLeft+40==window.innerWidth){
        ball.hitTheBall();
      }
      if(ball.ballLeft<=0||ball.ballLeft+20>=window.innerWidth){
        clearInterval(id);
        ball.stopBall(info,score);
        // console.log(score.scorePLayer,score.scoreComputer);
      }
      if(ball.ballTop<=0||ball.ballTop+28>=window.innerHeight){
        ball.ballDirectionTop=ball.ballDirectionTop*(-1);
      }
      palletComp.movePalletComp();
      ball.updateBall(ball);
    }
  };
}
