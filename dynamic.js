'use strict'

var userName = prompt ('Hi, who am I talking with today?' );
var now = new Date ();
var time = now.getHours();
var message;

if (time > 22){
    message = "It is to late to make a important decision like this, why dont you get some sleep and we can talk about dogs in the morning.";
}
else if(time < 5){
        message = "Kinda early, have you had your coffee yet?";
}
else{
    message = "Lets talk about Shar-Pei's!";
}
