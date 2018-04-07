import Game, {ball} from "./game.js";

const infoDOM = document.getElementsByClassName('info')[0];

const newButton = document.createElement("button");
newButton.addEventListener("click", showInfo)

export default class Info{
  remove(){
    infoDOM.setAttribute("style","display:none");
  }
  add(){
    infoDOM.setAttribute("style","display:flex");
  }
  addNextball(){

  }
  removeNextball(){

  }
}

function showInfo(){
 ball.setInitialState();
}
