import './style/style.scss';
// import './index.scss';
import Game from "./components/game.js"
// import Pallet from "./components/pallet.js"
// import Ball from "./components/ball.js"
import Info from "./components/info.js"
import Score from "./components/score.js"

const game = new Game();
// const palletClient = new Pallet();
// const palletComp = new Pallet();
// const ball = new Ball();
const info = new Info();
const score = new Score();



const startBtn = document.getElementsByClassName('start-btn')[0];
startBtn.addEventListener('click',startGame);

function startGame(){
  score.update();
  score.add();
  info.remove();
  game.play();
}
