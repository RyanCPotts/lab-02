'use strict';

// Function to normalize user input (convert to lowercase and trim whitespace)
function normalizeInput(input) {
    return input.trim().toLowerCase();
}

// Function to validate user input
function isValidInput(input) {
    return input.startsWith("y") || input.startsWith("n");
}

// Function to prompt user with a question and validate the response
function promptAndValidate(question) {
    let userInput;
    do {
        userInput = prompt(question).toLowerCase();
        if (!isValidInput(userInput)) {
            alert("What kind of answer is that you fool? Again, I ask you...");
        }
    } while (!isValidInput(userInput));
    return userInput;
}

// Function to determine custom response based on user's answer
function getCustomResponse(question, userResponse) {
    if (normalizeInput(userResponse) === "y" || normalizeInput(userResponse) === "yes") {
        switch (normalizeInput(question)) {
            case "can i help fit you on a bicycle? size matters. (y/n)":
                return "Dope. I'll get my bike guru out from the back to help you.";
            case "do you like garlic in general? (yes/no)":
                return "Good. Vampires aren't welcome here.";
            case "do you think the earth is flat? (y/n)":
                return "I worry about people like you.";
            case "are you a bot? (yes/no)":
                return "BLEEP BLEEP";
            case "do you think? (y/n)":
                return "Therefore you are";
        }
    } else {
        switch (normalizeInput(question)) {
            case "can i help fit you on a bicycle? size matters. (y/n)":
                return "Good. My bike guy has the day off.";
            case "do you like garlic in general? (yes/no)":
                return "GET OUT VAMPIRE!";
            case "do you think the earth is flat? (y/n)":
                return "WHEW! That's a relief.";
            case "are you a bot? (yes/no)":
                return "Too bad.I was hoping you'd cache the shop.";
            case "do you think? (y/n)":
                return "Got it. You're a chair than can read and type.";
            case "How many times do you think I've eaten foie gras?":
                return "Therefore you are.";
            case "what is one of my favorite foods?":
                return "That's correct!";
            default:
                return "Custom response for 'n' answer.";
        }
    }
}

// Function for the 6th question
function guessFoieGras() {
    const correctAnswer = 1;
    let attempts = 4;
    while (attempts > 0) {
        let guess = prompt("How many times do you think I've eaten foie gras?");
        if (parseInt(guess) === correctAnswer) {
            alert("Correct!");
            return true; // Return true if the guess is correct
        } else if (parseInt(guess) > correctAnswer) {
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }
        attempts--;
    }
    // If all attempts are used up, reveal the correct answer
    alert("Sorry, you've used all your attempts. The correct answer is " + correctAnswer + ".");
    return false; // Return false if the guess is incorrect or attempts are exhausted
}

// Start the game for the 6th question
let score = 0;
if (guessFoieGras()) {
    score++;
}

// Array of questions
let questions = [
    "Can I help fit you on a bicycle? Size matters. (y/n)",
    "Do you like garlic in general? (yes/no)",
    "Do you think the Earth is flat? (y/n)",
    "Are you a bot? (yes/no)",
    "Do you think? (y/n)",
    // "What is one of my favorite foods?",
];

// Iterate through each question
for (let i = 0; i < questions.length; i++) {
    let userResponse = promptAndValidate(questions[i]);
    let customResponse = getCustomResponse(questions[i], userResponse);
    alert(customResponse);
    if (customResponse === "That's correct!") {
        score++;
    }
}

// Display the final score
alert("You got " + score + " out of 7 questions correct.");


// Function for the 7th question
function guessFavoriteFood() {
	const possibleAnswers = ["steak", "fish", "ribs", "salad", "mac'n'cheese", "pickled okra"];
	let attempts = 6;
	let userCorrect = false
	while (attempts > 0) {
		let guess = prompt("What is one of my favorite foods?").toLowerCase();
		console.log(guess)
		if (possibleAnswers.includes(guess)) {
			alert("Correct! " + guess + " is one of my favorite foods.");
			userCorrect = true

			attempts = 0
		} else {
			alert("Nope, try again.");
		}
		attempts--;
	}
	// If all attempts are used up, reveal the correct answers
	if (userCorrect == false){
		alert("Sorry, you've used all your attempts. My favorite foods are: " + possibleAnswers.join(", "));
	}

}

guessFavoriteFood()