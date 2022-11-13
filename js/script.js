"use strict";

let message;
let messages=[];
let throwButton = document.getElementById("throwButton");
let typedMessage = document.getElementById("messageField");

let autoMsgContainer = document.getElementById("autoMsg-container");
let rdmTimer=100;
let messageReceived = false;
let openBottleButton = document.getElementById("openBottleButton");

let opened= false;
let messageDisplayBox = document.getElementById("messageDisplayBox");
// let randomMessage = messages[Math.floor(Math.random()*messages.length)];
let clicks=0;
let msgArrayIndex = messages.length;

//at throw click, the value of the input field will be stored into the messages array
throwButton.addEventListener("click", function () {
    message = typedMessage.value;
    messages.push(message);
    // console.log(messages.length);

    if (messages.length === 2){
    setTimeout(messageAlert, rdmTimer);
    }
    

});


function messageAlert (){
    console.log('u got a msg!');
    openBottleButton.style.display = "block";
}

openBottleButton.addEventListener("click", function() {
    
    console.log("msg opened");
    clicks++;
    opened = true;
    displayMessage();
    setTimeout(msgTimer, 1000);

    if (opened === true && clicks===2){
        console.log(clicks)
        clicks = 0;
    }

});

function msgTimer(){

    opened = false;
    // console.log(opened);

}

function displayMessage (){

    let randomMessage = messages[Math.floor(Math.random()*messages.length)];
    messageDisplayBox.innerHTML = randomMessage;
    // console.log(messages);

}


