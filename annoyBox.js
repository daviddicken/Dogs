'use strict'

// get variable from user to pass into function

var yesNo = prompt ("This boxes sole purpose is to annoy you!  Did it work?" ).toLowerCase();

// functions

// answerMe function to make sure user gave a correct answer
// WHILE LOOP
function answerMe(responce)
{
    while((responce !== "yes") && (responce !== "no"))
    {
        var responce = prompt ("Come on we are not going anywhere until you answer me! Am I annoying?")
    }
    return responce;
}

function moreBoxes(answer)
{
    
    if (answer == "yes")
    {
        alert("Thank you, I feel complete now.")
    }
    else if (answer == "no")
    {
        confirm("How about this one? Just hit OK if I annoyed you a little bit.")
    }
}

//FOR LOOP
function playGame(tries)
{
    // random number generator Math.random generate a random number between 0.0 - 1.0, we multiply this by 10 then add 1 (so that we wont get a number rounded down to 0) Math.floor takes that number and rounds down to a whole integer
    var random = Math.floor(Math.random() * 10) + 1;
    // var to keep track if user won or lost
    var win
    
    if(confirm("Since you've been such a good sport, would you like to play a game?"))
    {
        alert("Great you have " + tries + " guesses to guess my number between 1-10 \nGuess right and you can win a new car!!");

        for (var i = 1; i <= tries; i++)
        {
            var guess = prompt("Guess a number between 1-10.")
            if (guess == random)
            {
                confirm("You did it!!! \nMy number was " + random + "\nYou win a new CAR!!!!\n\nPlease visit www.lingscars.com to claim your prize   \n\nTell em Pee-Wee sent you.")
                
                win = "yes"
                break
            }
            else
            {
                alert("Sorry, that wasn't my number.")
                win = "no"
            }
        }
        if (win == "no") // check if user won, if not let them know what the number was
        {
        alert("Sorry my number was " + random + "\n\n Better luck next time.");
        }
    }
    else
    {
        alert("Your loss. \nI'll leave you alone now.");
    }
}




var potato = answerMe(yesNo);
moreBoxes(potato);
playGame(5);



