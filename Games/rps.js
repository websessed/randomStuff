
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
    const choices = [
        'rock',
        'paper',
        'scissors'
    ];
    /* computer makes a choice */
    const computer = choices[Math.floor(Math.random() * 3)];

    rl.question("rock, paper, scissors?: ", (userInput) => {
        /* make sure the user input is in lowercase */
        const user = userInput.toLowerCase().trim(); 

        console.log(`You chose ${user}`);
        console.log(`Computer chose: ${computer}`);

        if (!choices.includes(user)) {
            console.log("Invalid choice / user input");
            
            rl.close(); return;
        }

        if (user === computer) {
            console.log("🤝 It's a tie!")
        }

        else if (user === "rock" && computer === "scissors" || user === "scissors" && 
                 computer === "paper" || user === "paper" && computer === "rock") 
        {
            console.log("🎉You Win!")
        }
        else {
            console.log("💻 Computer wins!");
        }

        rl.close();
    })
}

playRockPaperScissors();