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
    console.log("clientY ",e.clientY);
    console.log("window.innerHeight ",window.innerHeight);
    const topPosition = window.innerHeight<=e.clientY+100?window.innerHeight-100:e.clientY;
    leftPallet.setAttribute("style",`top:${topPosition}px`)
});

// function myFunction(){
//   console.log("dupa");
// }
