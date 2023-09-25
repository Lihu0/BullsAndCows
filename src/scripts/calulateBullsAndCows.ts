function calculateBullsAndCows(guess: string | number, answer: string | number): { bulls: number, cows: number} { 
    let bulls: number = 0;
    let cows: number = 0;
    let guessString: string = guess.toString();
    let answerString: string = answer.toString();

    for (const guessDig of guessString) {
        for (const answerDig of answerString) {
            if (guessDig === answerDig) {
                if (guessString.indexOf(guessDig) === answerString.indexOf(answerDig)) {
                    bulls++;
                } else {
                    cows++;
                }
            }
        }
    }

    return { bulls, cows };
}

export default calculateBullsAndCows;