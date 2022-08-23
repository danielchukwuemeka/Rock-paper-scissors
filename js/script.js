const options = ["./images/rock.png", "./images/paper.png", "./images/sicsors.png"];
var showResult = document.getElementById("result");
var player1Choice = document.getElementById("player1-result");
var player2Choice = document.getElementById("player2-result");
var player1Option = 0;
var player2Option = 0;
var player1Score = 0;
var player2Score = 0;
var playersChoices = [];
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var winner = document.querySelector(".winner-img");
var responseText = document.querySelector("p.reponse-text");

//get the fight button 
var fight = document.querySelector("button.play");
fight.addEventListener('click', choose);

// creating the fight function
function choose() {
    if(fight) {
        player1Option = Math.floor(Math.random() * 3);
        player2Option = Math.floor(Math.random() * 3);
        player1Choice.setAttribute('src',options[player1Option]);
        player2Choice.setAttribute('src',options[player2Option]);
        playersChoices = [player1Choice.id, player2Choice.id]
        checkForWinner();
        // if(player1Option !== player2Option) {
            var afterTimeout = deleteSection(document.querySelector(".play-section"), document.querySelector(".winner-section"))
            setTimeout(afterTimeout, 5000);
        // }
    }
}

//create the function to remove and add elements
function deleteSection(remove, add) {
    remove.style.display = "none";
    add.style.display = "block";
}

// Refference to the play button 
var playButtton = document.querySelector("#play-button");
playButtton.addEventListener('click', playGame);

// Playgame function 
function playGame() {
    if(playGame) {
        deleteSection(document.querySelector(".play-activator"), document.querySelector(".form-container"));
        document.querySelector("#background-sound").play();
    }
}

// get the start button and add an eventListner for click
var startButtton = document.querySelector("#start-button");
startButtton.addEventListener('click', startGame);

// The startGame function 
function startGame() {
    if(startGame) {
        var player1Name = document.querySelector("#playre1-name");
        var player2Name = document.querySelector("#playre2-name");
        //Validate the username form
        if(player1Name.value.length === 0) {
            document.querySelector(".player1err").style.display = "inline-block";
            if(player2Name.value.length === 0) {
               document.querySelector(".player2err").style.display = "inline-block";               
            }
        } else if(player2Name.value.length === 0) {
            document.querySelector(".player2err").style.display = "inline-block";
            if(player1Name.value.length === 0) {
               document.querySelector(".player2err").style.display = "inline-block";                
            }            
        } else {
            deleteSection(document.querySelector(".form-container"), document.querySelector(".play-section"));
            //asign the player names
            player1.innerHTML = player1Name.value;
            player2.innerHTML = player2Name.value;
            document.querySelector("#start-game").play();
        }
    }
}

// deal with the player1 error
document.querySelector("#playre1-name").addEventListener("focus", () =>  {
    document.querySelector(".player1err").style.display = "none";
});
// Deal with the player2 error
document.querySelector("#playre2-name").addEventListener("focus", () => {
    document.querySelector(".player2err").style.display = "none";
});

// check for winner function
function checkForWinner() {
    if(player1Option === player2Option) {
        showResult.innerHTML = "There is no Winner Play Again";
        document.querySelector("#background-sound").pause();
        document.querySelector("#no-winner").play();
        winner.setAttribute('src', "./images/no-winner.png");
        responseText.innerHTML = "There was no Winner";
        responseText.style.color = "#f00";
        winner.parentElement.style.borderColor = "red"; 
        player1Choice.setAttribute('src', "./images/play.png");
        player2Choice.setAttribute('src', "./images/play.png");
    } else if((player1Option == 0) && (player2Option == 1)) {
        player2Won();
    } else if((player1Option == 1) && (player2Option == 0)) {
        player1Won();
    } else if((player1Option == 1) && (player2Option == 2)) {
        player2Won();
    } else if((player1Option == 2) && (player2Option == 1)) {
        player1Won();
    } else if((player1Option == 0) && (player2Option == 2)) {
        player1Won();
    } else if((player1Option == 2) && (player2Option == 0)) {
        player2Won();
    }
    // Asign values to the player score
    document.querySelector("#player1-score").innerHTML = player1Score;
    document.querySelector("#player2-score").innerHTML = player2Score;
}

// player1won function 
function player1Won() {
    document.querySelector("#background-sound").pause();
    document.querySelector("#winner").play();    
    responseText.innerHTML = "Player 1 Won";
    responseText.style.color = "white";
    player1Score += 1;
    winner.setAttribute('src',options[player1Option]);
    winner.parentElement.style.borderColor = "#0090ff";
    player1Choice.setAttribute('src', "./images/play.png");
    player2Choice.setAttribute('src', "./images/play.png");  
}

// player2won function 
function player2Won() {
    document.querySelector("#background-sound").pause();
    document.querySelector("#winner").play();
    responseText.innerHTML = "Player 2 Won";
    responseText.style.color = "white";
    player2Score += 1;
    winner.setAttribute('src',options[player2Option]);
    winner.parentElement.style.borderColor = "orange";
    player1Choice.setAttribute('src', "./images/play.png");
    player2Choice.setAttribute('src', "./images/play.png");
}

//get the playagain button
document.querySelector("#play-again").addEventListener("click", () => {
    deleteSection(document.querySelector(".winner-section"), document.querySelector(".play-section"));
    showResult.innerHTML = "";
    document.querySelector("#background-sound").play();
})
