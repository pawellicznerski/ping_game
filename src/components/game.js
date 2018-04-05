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
    const leftPallet = document.getElementsByClassName('pallet_left')[0];
    document.addEventListener("mousemove",(e)=>{
      const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
      leftPallet.setAttribute("style",`top:${topPosition}px`)
    });

    let currentLeft = 180;
    let changeVertical = 1;

    const id = setInterval(movingBall,10);

    function movingBall(){
      // console.log("currentLeft",currentLeft,changeVertical);
      const theBall = document.getElementById('ball');
      console.log("theBall",theBall);
      if(currentLeft<=0||currentLeft+20>=window.innerWidth){
        changeVertical=changeVertical*(-1);
      }
      const rondomValue = Math.random();
      theBall.setAttribute("style",`left:${currentLeft}px`);
      currentLeft=currentLeft-changeVertical;
      // console.log(currentLeft);
    }
  }
}
