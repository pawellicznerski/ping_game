const scoreDOM = document.getElementsByClassName('score')[0];

export default class Score{
  constructor(){
    this.scorePLayer=0;
    this.scoreComputer=0;
    this.scoreBoth=this.scorePLayer+this.scoreComputer;
  }
  remove(){
    scoreDOM.setAttribute("style","display:none");
  }
  add(){
    scoreDOM.setAttribute("style","display:flex;justify-content:center;align-items:center;");
  }
  update(){
    scoreDOM.getElementsByClassName("score_player")[0].innerHTML=`${this.scorePLayer}`;
    scoreDOM.getElementsByClassName("score_computer")[0].innerHTML=`${this.scoreComputer}`;
  }
}
