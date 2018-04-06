//creating contructor for Game object
import Pallet from "./pallet.js"
import Ball from "./ball.js"
import Info from "./info.js"
import Score from "./score.js"

const ball = new Ball();
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

      if(ball.ballLeft==20){
        if(palletTopLeft<=ball.ballTop+20&&palletTopLeft+100>=ball.ballTop-20){
          ball.ballDirectionLeft=ball.ballDirectionLeft*(-1);
          ball.ballDirectionTop=Math.random()>0.5?-1:1;
          ball.ballSpeed=(((Math.random()*2.9)+0.1)*window.innerWidth)/window.innerWidth;
        }
      } else if(ball.ballLeft+40==window.innerWidth){
        if(palletTopRight<=ball.ballTop+20&&palletTopRight+100>=ball.ballTop-20){
          ball.ballDirectionLeft=ball.ballDirectionLeft*(-1);
          ball.ballDirectionTop=Math.random()>0.5?-1:1;
          ball.ballSpeed=(((Math.random()*2.9)+0.1)*window.innerWidth)/window.innerWidth;
        }
      }

      if(ball.ballLeft<=0){
        score.scoreComputer=score.scoreComputer+1;
        console.log(score.scoreComputer,score.scorePLayer);
        score.scoreComputer==2?info.add():info.nextball();
        score.update();
        ball.setInitialState();
        clearInterval(id);
      } else if(ball.ballLeft+20>=window.innerWidth){
        score.scorePLayer=score.scorePLayer+1;
        score.update();
        info.add();
        ball.setInitialState();
        clearInterval(id);
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
