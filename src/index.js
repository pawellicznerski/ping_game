import './style/style.scss';
import Game from "./components/game.js"
import {score,info} from "./components/game.js"

const game = new Game();

const startBtn = document.getElementsByClassName('start-btn')[0];
startBtn.addEventListener('click',startGame);
const {scoreBoth,scorePLayer,scoreComputer} = score;


function startGame(){
  score.update();
  score.add();
  info.remove();
  game.play();
}
