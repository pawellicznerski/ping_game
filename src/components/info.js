import Game, {ball} from "./game.js";

const infoDOM = document.getElementsByClassName('info')[0];
const infoTitleDOM = document.getElementsByClassName('info')[0].children[0];

// const newButton = document.createElement("button");
// newButton.addEventListener("click", showInfo);
//
// function showInfo(){
//  ball.setInitialState();
// }

export default class Info{
  remove(){
    infoDOM.setAttribute("style","display:none");
  }
  add(gameOver,winner){
    const text = gameOver?`The winner is ${winner}! Wanna play again?`:'Ping-pong'
    infoTitleDOM.innerHTML=`${text}`;
    infoDOM.setAttribute("style","display:flex");
  }
  addNextball(winner){
    infoDOM.setAttribute("style","display:flex");
    infoTitleDOM.innerHTML=`Poin to ${winner}. New ball.`;
  }
}
