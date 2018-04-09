export default class Ball{
  constructor(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=300;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
  setInitialState(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=150;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }

  hitTheBall(){
    const palletTopLeft= document.getElementsByClassName('pallet_left')[0].offsetTop;
    const palletTopRight= document.getElementsByClassName('pallet_right')[0].offsetTop;
    const palletTop = this.ballLeft<=20?palletTopLeft:palletTopRight;

    if(palletTop<=this.ballTop+20&&palletTop+100>=this.ballTop-20){
      this.ballDirectionLeft=this.ballDirectionLeft*(-1);
      this.ballDirectionTop=Math.random()>0.5?-1:1;
      this.ballSpeed=(((Math.random()*2.9)+0.1)*window.innerWidth)/window.innerWidth;
    }
  }
  stopBall(info,score){
    let winner = '';
    if(this.ballLeft<=0){
      score.computer=score.computer+1;
      winner="computer";
      console.log(score.computer);
    } else{
      score.player=score.player+1;
      winner="player";
      console.log(score.player);
    }
    score.computer==2||score.player==2?gameOver():newBall();

    function gameOver(){
      // console.log("jestem w game over");
      info.add(true,winner);
      score.update(true);
    }

    function newBall(){
      // console.log("jestem w new Ball");
      info.addNextball(winner)
      score.update();
    }
  }
  updateBall(ball){
    ball.ballDOM.setAttribute("style",`display:block;top:${ball.ballTop}px;left:${ball.ballLeft}px`);
    ball.ballLeft=ball.ballLeft-ball.ballDirectionLeft;
    ball.ballTop=ball.ballTop+(ball.ballSpeed*ball.ballDirectionTop);
  }
}
