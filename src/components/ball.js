export default class Ball{
  constructor(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=240;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
  setInitialState(){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=240;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
}
