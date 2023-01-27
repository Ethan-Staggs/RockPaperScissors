


        let rockBtn = document.querySelector('#Rock');
        let paperBtn = document.querySelector('#Paper');
        let scissorBtn = document.querySelector('#Scissors');
        let oppScore = document.querySelector("#oppScore");
        let plaScore = document.querySelector("#plaScore");
        let oppResult = document.querySelector("#oppResult");
        let plaResult = document.querySelector("#plaResult");
        let resetBtn = document.querySelector(".resetBtn");
        let oppAnnoncement = document.querySelector("#oppAnnoncement");
        let plaAnnoncement = document.querySelector("#plaAnnoncement");
        let playerScore = 0;
        let computerScore = 0;


        function getComputerChoice() {
            let result = Math.floor(Math.random() * 3);
            if(result == 0) {
                return "Rock";
            } else if(result == 1) {
                return "Paper";
            } else if(result == 2) {
                return "Scissors";
            }
        }


        function playRound(playerSelection, computerChoice) {

            computerChoice = getComputerChoice();

            if(playerSelection == computerChoice) {
                oppResult.innerHTML = "Tie!";
                plaResult.innerHTML = "Tie!";

            } else if(playerSelection == "Rock" && computerChoice == "Scissors") {
                playerScore = playerScore + 1;
                plaResult.innerHTML = "Rock beats Scissors. Player wins!";
                console.log("Rock beats Scissors. Player wins!")
                
            } else if(playerSelection == "Paper" && computerChoice == "Rock") {
                playerScore = playerScore + 1;
                plaResult.innerHTML = "Paper beats Rock. Player wins!";
                console.log("Paper beats Rock. Player wins!")

            } else if(playerSelection == "Scissors" && computerChoice == "Paper") {
                playerScore = playerScore + 1;
                plaResult.innerHTML = "Scissors beat Paper. Player wins!";
                console.log("Scissors beat Paper. Player wins!")

            } else if(computerChoice == "Rock" && playerSelection == "Scissors") {
                computerScore = computerScore + 1;
                oppResult.innerHTML = "Rock beats Scissors. Computer wins!";

            } else if(computerChoice == "Paper" && playerSelection == "Rock") {
                computerScore = computerScore + 1;
                oppResult.innerHTML = "Paper beats Rock. Computer wins!";

            } else if(computerChoice == "Scissors" && playerSelection == "Paper") {
                computerScore = computerScore + 1;
                oppResult.innerHTML = "Scissors beat Paper. Computer wins!";

            }

        oppScore.innerHTML = computerScore;
        plaScore.innerHTML = playerScore;

        }

        function game(playerChoice) {

            let player = playerChoice;
            let computer = getComputerChoice;

            playRound(player, computer);

            if(playerScore == 5) {
                console.log("Player wins");
                document.getElementById("player").style.color = "green";
                document.getElementById("opponent").style.color = "red";
                plaAnnoncement.innerHTML = "Player Won!!!!";
                oppAnnoncement.innerHTML = "Computer Lost! :(";
                playerScore = 0;
                computerScore = 0;
                rockBtn.disabled = true; 
                paperBtn.disabled = true;
                scissorBtn.disabled = true;
                
            } else if (computerScore == 5) {
                oppAnnoncement.innerHTML = "Computer Won!!!!";
                plaAnnoncement.innerHTML = "Player Lost! :(";
                document.getElementById("opponent").style.color = "green";
                document.getElementById("player").style.color = "red";
                computerScore = 0;
                playerScore = 0;
                rockBtn.disabled = true; 
                paperBtn.disabled = true;
                scissorBtn.disabled = true;
            } else {
                rockBtn.disabled = false; 
                paperBtn.disabled = false;
                scissorBtn.disabled = false;
            }
            
        }

        rockBtn.addEventListener('click', () => {
            plaResult.innerHTML = " ";
            oppResult.innerHTML = " ";
            document.getElementById("opponent").style.color = "black";
            document.getElementById("player").style.color = "black";
            game('Rock');
        });

        paperBtn.addEventListener('click', () => {
            plaResult.innerHTML = "";
            oppResult.innerHTML = "";
            document.getElementById("opponent").style.color = "black";
            document.getElementById("player").style.color = "black";
            game('Paper');
        
        });

        scissorBtn.addEventListener('click', () => {
            plaResult.innerHTML = "";
            oppResult.innerHTML = "";
            game('Scissors');
            
        });

        resetBtn.addEventListener('click', () => {
            console.log("Reset clicked");
            playerScore = 0;
            computerScore = 0;
            plaResult.innerHTML = "";
            oppResult.innerHTML = "";
            oppScore.innerHTML = "0";
            plaScore.innerHTML = "0";
            document.getElementById("opponent").style.color = "black";
            document.getElementById("player").style.color = "black";
            plaAnnoncement.innerHTML = "";
            oppAnnoncement.innerHTML = "";
            oppAnnoncement.innerHTML = "";
            rockBtn.disabled = false; 
            paperBtn.disabled = false;
            scissorBtn.disabled = false;


        });



       

        

        

   




    