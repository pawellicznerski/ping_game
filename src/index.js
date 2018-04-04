import './style/style.scss';
// import './index.scss';
import Game from "./components/game.js"
import Pallet from "./components/pallet.js"
import Ball from "./components/ball.js"

const game = new Game();
const palletClient = new Pallet();
const palletComp = new Pallet();
const ball = new Ball();

const leftPallet = document.getElementsByClassName('pallet_left')[0];
document.addEventListener("mousemove",(e)=>{
    // console.log("clientY ",e.clientY);
    // console.log("window.innerHeight ",window.innerHeight);
    const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
    leftPallet.setAttribute("style",`top:${topPosition}px`)
});

const startBtn = document.getElementsByClassName('start-btn')[0];
startBtn.addEventListener('click',moveBall);

function moveBall(){
  let currentLeft = 180;
  // const currentvalue = rondomValue<=0.5?-1:1;
  let changeVertical = 1;

  const id = setInterval(movingBall,10,currentLeft,changeVertical);
}

function movingBall(currentLeft,changeVertical){
  console.log(currentLeft);
  const theBall = document.getElementById('ball');
  if(theBall.left<=0||theBall.left+20>=window.innerWidth){
    changeVertical=changeVertical*(-1);
  }

  const rondomValue = Math.random();
  theBall.setAttribute("style",`left:${currentLeft}`);
  currentLeft=currentLeft+changeVertical;
  console.log(currentLeft);
}
