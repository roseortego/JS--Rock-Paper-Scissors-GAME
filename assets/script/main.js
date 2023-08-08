let choices = ["Rock", "Paper", "Scissors", " "];
let playerScore = 0;
let computerScore = 0;
let roundsScore = 1;

function startGame(humanChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("result").innerHTML = ("You chose:" + humanChoice);
    document.getElementById("result").innerHTML = ("The computer chose: " + computerChoice);
    
    if(computerChoice == "Rock"){
        document.getElementById("result").innerHTML = ("Result:" + ("Its a tie"));  
    }else if(computerChoice == "Paper"){
        document.getElementById("result").innerHTML = ("Result:" + ("You Lose!")); 
            showComputerScore(); 
    }else if(computerChoice == "Scissors"){
        document.getElementById("result").innerHTML = ("Result:" + ("You win!"));
            showPlayerScore(); 
    }
// Rock Option
    showroundsScore("1"); 


    if(human == "Paper"){
        document.getElementById("result").innerHTML = ("Result:" + ("Its a tie"));  
    }else if(computerChoice == "Scissors"){
        document.getElementById("result").innerHTML = ("Result:" + ("You Lose!")); 
            showComputerScore(); 
    }else if(computerChoice == "Rock"){
        document.getElementById("result").innerHTML = ("Result:" + ("You win!"));
            showPlayerScore();
    }
    if(human == "Scissors"){
            if(computerChoice == "Scissors")
            document.getElementById("result").innerHTML = ("Result:" + ("Its a tie"));  
    }else if(computerChoice == "Rock"){
        document.getElementById("result").innerHTML = ("Result:" + ("You Lose!")); 
            showComputerScore(); 
    }else if(computerChoice == "Paper"){
        document.getElementById("result").innerHTML = ("Result:" + ("You win!"));
            showPlayerScore();  
    }
// Reset Option
        if(human == "Scissors");
        document.getElementById("result").innerHTML = ("Result:" + ("Its a tie")); 
}
        
function showPlayerScore(){
    playerScore++;
    document.getElementById("playerScoreDisplay").innerHTML = playerScore;
}     
function showComputerScore(){
    computerScore++;
    document.getElementById("computerScoreDisplay").innerHTML = computerScore;
}  
function showroundsScore(){
    roundsScore++;
    document.getElementById("numberofRounds").innerHTML = roundsScore;
} 



