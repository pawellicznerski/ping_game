import Score from "./score.js"
import Info from "./info.js"
import {score, info} from "./game.js"

// const info = new Info();
// const score = new Score()


export default class Ball{
  constructor(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=240;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
  setInitialState(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=240;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
  hitTheBall(palletTop){
    if(palletTop<=this.ballTop+20&&palletTop+100>=this.ballTop-20){
      this.ballDirectionLeft=this.ballDirectionLeft*(-1);
      this.ballDirectionTop=Math.random()>0.5?-1:1;
      this.ballSpeed=(((Math.random()*2.9)+0.1)*window.innerWidth)/window.innerWidth;
    }
  }
  stopBall(){
    const val = this.ballLeft<=0?false:true;
    score.scoreComputer==2?gameOver():newBall(val);
    this.setInitialState();

    function gameOver(){
      info.add()
      score.update();
    }

    function newBall(val){
      val
        ?score.scorePLayer=score.scorePLayer+1
        :score.scoreComputer=score.scoreComputer+1
      info.addNextball()
      score.update();
    }
  }
}
