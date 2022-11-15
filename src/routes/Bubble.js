import './test.css';
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faHouse,faUser,faStar,faClapperboard } from '@fortawesome/free-solid-svg-icons'

function Bubble(){

let cnt=0; //버블개수
const [root,setroot] = useState("");//root 변수
console.log(root);

let { innerHeight, innerWidth } = window;//화면 크기 길이 너비
console.log(innerHeight, innerWidth);
if (innerHeight < 300) {
innerHeight = 350;
}
if (innerWidth < 300) {
innerWidth = 750;
}
useEffect(() => {
setroot(document.getElementById("app"));
}, []);
class Bubble { //버블 클래스
  
constructor() {
  
  if(cnt<10){ //bubble 개수 선언
  this.bubbleSpan = undefined;
  
  this.handleNewBubble(); //만들기
  this.color = this.randomColor();

  this.posY = this.randomNumber(innerHeight/2 - 20, 20);
  this.posX = this.randomNumber(innerWidth/2 - 20, 20);

  this.bubbleSpan.style.top = this.posY + "px";
  this.bubbleSpan.style.left = this.posX + "px";

  // setting height and width of the bubble
  this.height = this.randomNumber(100, 80);
  this.width = this.height;

  //this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(6000, 3000));
}
}
// creates and appends a new bubble in the DOM
handleNewBubble() {
  this.bubbleSpan = document.createElement("span");
  cnt=cnt+1;
  console.log(cnt);
  this.bubbleSpan.classList.add("bubble");
  //this.bubbleSpan.textContent={cnt};
  root.append(this.bubbleSpan);
  this.handlePosition();
  this.bubbleSpan.addEventListener("click", this.bubbleEnd);
}

handlePosition() {
  // positioning the bubble in different random X and Y
  const randomY = this.randomNumber(60, -60);
  const randomX = this.randomNumber(60, -60);

  this.bubbleSpan.style.backgroundColor = this.color;
  this.bubbleSpan.style.height = this.height + "px";
  this.bubbleSpan.style.width = this.height + "px";

  this.posY = this.randomNumber(innerHeight/2 - 20, 20);
  this.posX = this.randomNumber(innerWidth-40, 20);

  this.bubbleSpan.style.top = this.posY + "px";
  this.bubbleSpan.style.left = this.posX + "px";

  const randomSec = this.randomNumber(4000, 200);
  setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
}

randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomColor() {
  return `rgba(
      ${this.randomNumber(0, 255)},
      ${this.randomNumber(0, 255)},
      ${this.randomNumber(0, 255)}, 
      ${this.randomNumber(0.1, 1)})`;
}

bubbleEnd(removingTime = 0) {
  setTimeout(
    () => {
      requestAnimationFrame(() => this.classList.add("bubble--bust"));
    },
    removingTime === 0 ? removingTime : removingTime - 100
  );

  setTimeout(() => {
    requestAnimationFrame(() => this.remove());
    //requestAnimationFrame(() => new Bubble());
  }, removingTime);
}
}

// creating many bubble instance

setInterval(function () {
requestAnimationFrame(() => new Bubble());
}, 300);

    return (
    <div>
        <div id="bubble_part">
          <div id="app">
          </div>

        </div>
        <div id='footer'>  
            <div id="search_bar">
            <input type="text" placeholder="Drag Bubbles!"/>

            </div>
            <div id="search_btn">
            <Link to="/bubble">
            <button id="btn"><FontAwesomeIcon icon={faSearch} className="search" /></button>
            </Link>
            </div>
      
            <button id='menu_btn'><FontAwesomeIcon icon={faHouse} /></button>
            <button id='menu_btn'><FontAwesomeIcon icon={faUser} /></button>
            <button id='menu_btn'><FontAwesomeIcon icon={faStar} /></button>
            <button id='menu_btn'><FontAwesomeIcon icon={faClapperboard} /></button>
        </div>   
    </div>
    );
}

export default Bubble;