import React from "react";
import ReactDOM from "react-dom";
import { getCurrentTime } from './time_lib';
import $ from "jquery";
/*window.onload = () => {
    console.log("ONLOAD");
    const domElement =
        document.getElementById("target") ||
        document.querySelector("#target");
    
    if (domElement) {
        ReactDOM.render(<h1>{GetCurrentTime()}</h1>, domElement);
    }
}*/

export function runApp (){
    console.log("ONLOAD");
    //$("#myNav").hide()
    const domElement =
        document.getElementById("target") ||
        document.querySelector("#target");
    
    const clone = domElement.cloneNode(true);
    let childlength = clone.childNodes.length - 1;
    const child = clone.childNodes.item(childlength)
    
   
    if (domElement) {
        //<h1>{GetCurrentTime()}</h1>
        //Where to render new pages
        ReactDOM.render(<h1>{GetCurrentTime()}</h1>, domElement);
        //domElement.appendChild(child)
    }
    
}

export function openNav() {
    //document.getElementById("myNav").style.width = "100%";
    $("#myNav").css("width", "100%");
   // console.log($("#myNav"))
    //$("#myNav").show()
}

export function closeNav() {
    $("#myNav").css("width", "0%");
    //document.getElementById("myNav").style.width = "0%";
}

export function GetCurrentTime() {
    console.log("***GetCurrentTime***")
    return getCurrentTime();
}

export function ToggleHamburger(_state) {
    console.log(_state)
    let menu = document.getElementById("myNav")
    //console.log(menu.style.width)
    if (_state) {
       // document.getElementById("myNav").style.width = "100%";
    }
    else {
        //document.getElementById("myNav").style.width = "0%";
    }
    
}

