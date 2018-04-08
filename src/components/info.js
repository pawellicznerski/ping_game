import Game, {ball} from "./game.js";

const infoDOM = document.getElementsByClassName('info')[0];
const infoTitleDOM = document.getElementsByClassName('info')[0].children[0];

const newButton = document.createElement("button");
newButton.addEventListener("click", showInfo)

export default class Info{
  remove(){
    infoDOM.setAttribute("style","display:none");
  }
  add(gameOver,winner){
    const text = gameOver?`${winner} won! Wanna play again?`:'Ping-pong'
    infoTitleDOM.innerHTML=`${text}`;
    infoDOM.setAttribute("style","display:flex");
  }
  addNextball(){
    // console.log("infoTitleDOMssss",infoTitleDOM);
    infoDOM.setAttribute("style","display:flex");
    infoTitleDOM.innerHTML='Podaj nową piłke chamie';
  }
}

function showInfo(){
 ball.setInitialState();
}
