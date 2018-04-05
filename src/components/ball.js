export default class Ball{
  constructor(top,left){
    this.ballDOM=document.getElementById('ball');
    this.ballLeft=240;
    this.ballTop=250;
    this.ballSpeed=1;
    this.ballDirectionLeft=1;
    this.ballDirectionTop=1;
  }
}
