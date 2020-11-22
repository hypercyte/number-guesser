let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget  = () => {
    let rand = Math.floor(Math.random() * 10);
    // In case we roll a 10, albeit a super rare occurance
    while (rand === 10) {
        rand = Math.floor(Math.random() * 10);
    }
    return rand;
}

const getAbsoluteDistance = (a, b) => {
    return Math.abs(a - b);
}

const compareGuesses = (human, cpu, secret) => {
    let humanDiff = getAbsoluteDistance(human, secret);
    let cpuDiff = getAbsoluteDistance(cpu, secret);
    if (human > 9 || human < 0) {
        // Guess out of bounds.
        alert("Guess was out of bounds. \nPlease enter a guess between 0-9!");
        return false;
    }
    else if (humanDiff == cpuDiff) {
        // Human wins.
        return true;
    }
    else if (humanDiff < cpuDiff) {
        // Human wins.
        return true;
    }
    else {
        // CPU wins.
        return false;
    }
}

const updateScore = winner => {
    switch(winner) {
        case 'human':
            // Increment player score
            humanScore++;
            break;
        case 'computer':
            // Increment cpu score
            computerScore++;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}