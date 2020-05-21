'use strict'

// get variable from user to pass into function
var yesNo = prompt ("This boxes sole purpose is to annoy you!  Did it work?" ).toLowerCase();

function moreBoxes(answer){
    
if (answer == "yes"){
    alert("Thank you, I feel complete now.")
}
else if (answer == "no"){
    confirm("How about this one? Just hit OK if I annoyed you a little bit.")
}
else{
    alert("I don't understand your jibberish. It must be you because now I understand uppercase case letters")
}

}

// call on function and pass in variable
moreBoxes(yesNo);




