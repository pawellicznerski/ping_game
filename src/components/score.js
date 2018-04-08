const scoreDOM = document.getElementsByClassName('score')[0];
export default class Score{
  constructor(){
    this.player=0;
    this.computer=0;
    this.scoreBoth=this.player+this.scoreComputer;
  }
  remove(){
    scoreDOM.setAttribute("style","display:none");
  }
  add(){
    scoreDOM.setAttribute("style","display:flex;justify-content:center;align-items:center;");
  }
  update(gameOver){
    if(gameOver){
      this.remove();
      this.player=0;
      this.computer=0;
    }
    scoreDOM.getElementsByClassName("score_player")[0].innerHTML=`${this.player}`;
    scoreDOM.getElementsByClassName("score_computer")[0].innerHTML=`${this.computer}`;
  }
}
