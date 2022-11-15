"use strict";
$(document).ready (function(){

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

$("#insertPHP").submit(function(event) {
    //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
   event.preventDefault();
  console.log("button clicked");
  let data =$('#insertPHP').serializeArray();
  /*for console log */
  for (let valuePairs of data.entries()) {
    console.log(valuePairs[0]+ ', ' + valuePairs[1]);
  }

  // P3
      $.ajax({
        type: "GET",
         url: "index.php",
         data: data,
         dataType: "text", /*response will be text */
         cache: false,
         timeout: 600000,
         success: function (response) {
           //reponse is a STRING (not a JavaScript object -> so we need to convert)
              console.log("we had success!");
              console.log(response);
              //reset the form
              $('#insertPHP')[0].reset();
        },
        error:function(){
       console.log("error occurred");
     }
   });
});

});

