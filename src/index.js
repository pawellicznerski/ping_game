import './style/style.scss';
// import './index.scss';
import Game from "./components/game.js"
import Pallet from "./components/pallet.js"
import Ball from "./components/ball.js"

const game = new Game();
const palletClient = new Pallet();
const palletComp = new Pallet();
const ball = new Ball();

const leftPallet = document.getElementsByClassName('container')
leftPallet.addEventListener("mousemove",function(event) {
    console.log("dupa");
}));

function myFunction(){
  console.log("dupa");
}
