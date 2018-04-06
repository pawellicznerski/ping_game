import Game from "./game.js"

const infoDOM = document.getElementsByClassName('info')[0];

export default class Info{
  remove(){
    infoDOM.setAttribute("style","display:none");
  }
  add(){
    infoDOM.setAttribute("style","display:flex");
  }
  nextball(){
    
  }
}
