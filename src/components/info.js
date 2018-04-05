export default class Info{
  constructor(top,left){
    this.top=top;
    this.left=left;
  }
  remove(){
    const infoDOM = document.getElementsByClassName('info')[0];
    infoDOM.setAttribute("style","display:none");
  }
  add(){
    const infoDOM = document.getElementsByClassName('info')[0];
    infoDOM.setAttribute("style","display:block");
  }
}
