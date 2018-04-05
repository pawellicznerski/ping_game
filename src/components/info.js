export default class Info{
  remove(){
    const infoDOM = document.getElementsByClassName('info')[0];
    infoDOM.setAttribute("style","display:none");
  }
  add(){
    const infoDOM = document.getElementsByClassName('info')[0];
    infoDOM.setAttribute("style","display:flex");
  }
}
