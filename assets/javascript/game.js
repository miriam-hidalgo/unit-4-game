//Generate random number between 19-120
var random = Math.floor(Math.random() * 102) + 19;
function getNumber(){

//Display random number in #randomNumber div
    $("#randomNumber").html(random);
};
getNumber();


//Make 4 crystals into buttons
//When clicking each crystal it will add a random hidden amount (value ranges 1-12) to total score
var scoreCounter = 0;
var randomBtn1= Math.floor(Math.random() * 12) + 1;
var randomBtn2= Math.floor(Math.random() * 12) + 1;
var randomBtn3= Math.floor(Math.random() * 12) + 1;
var randomBtn4= Math.floor(Math.random() * 12) + 1;
var totalScore = []

function getTally(){
    $("#crystal-btn1").on("click", function(){
        var scoreOne = scoreCounter += randomBtn1;
        $(totalScore).push(scoreOne)
        console.log(scoreOne);
    
    });

    $("#crystal-btn2").on("click", function(){
        var scoreTwo = scoreCounter += randomBtn2;
        $(totalScore).push(scoreTwo)
        console.log(scoreTwo);       
    });

    $("#crystal-btn3").on("click", function(){
        var scoreThree = scoreCounter += randomBtn3;
        $(totalScore).push(scoreThree)
        console.log(scoreThree);  
    });

    $("#crystal-btn4").on("click", function(){
        var scoreFour = scoreCounter += randomBtn4;
        $(totalScore).push(scoreFour)
        console.log(scoreFour);  
    });  
    $("#totalScore").html(totalScore);  
}
getTally()


var winsCounter = 0;
var lossesCounter = 0;
// if totalScore === random, player wins

if (totalScore === random) {
    winsCounter++
    $("#wins-losses").html("You Win!" + "/nWins: " + winsCounter);
};
// if totalScore > random, player loses 
if (totalScore > random){
    losesCounter++
    $("#wins-losses").html("/nLosses: " + lossesCounter);
};


// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
