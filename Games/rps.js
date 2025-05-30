
/*  
    Maxwell Easter : May 29, 2025
    Rock Paper Scissor 
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playRockPaperScissors() {
    const choices = {
        rock: 'scissors', 
        paper: 'rock',
        scissors: 'paper'
    }; /* game rules */

    /* computer makes a choice */
    const choiceKeys = Object.keys(choices); // ["rock", "paper", "scissors"]
    const computer = choiceKeys[Math.floor(Math.random() * choiceKeys.length)];


    rl.question("rock, paper, scissors?: ", (userInput) => {
        /* make sure the user input is in lowercase */
        const user = userInput.toLowerCase().trim(); 

        if (!choiceKeys.includes(user)) {
            console.log("🚫 Invalid choice");
            
            rl.close(); return;
        }

        console.log(`You chose ${user}`);
        console.log(`Computer chose: ${computer}`);

        if (user === computer) {
            console.log("🤝 It's a tie!")
        }

        else if (choices[user] === computer) {
            console.log("🎉 You win!")
        }

        else {
            console.log("💻 Computer wins!");
        }

        rl.close();
    })
}

playRockPaperScissors();