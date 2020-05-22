'use strict'
//My apologize to whoever has to read this. I felt like I was coding with a hammer

// answerMe function to make sure user gave a correct answer
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



function playGame(tries)
{
    // random number generator 
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



var yesNo = prompt ("This boxes sole purpose is to annoy you!  Did it work?" ).toLowerCase();
var potato = answerMe(yesNo);
moreBoxes(potato);
playGame(5);



