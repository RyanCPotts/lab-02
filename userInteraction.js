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
    if (normalizeInput(userResponse) === "y" || normalizeInput(userResponse)=== "yes")  {
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
                return "Therefore you are.";
            
        }
    } else {
        switch (normalizeInput(question)) {
            case "can i help fit you on a bicycle? size matters. (y/n)":
                return "Good. My bike guy has the day off.";
            case "do you like garlic in general? (yes/no)":
                return "GET OUT VAMPIRE!.";
            case "do you think the earth is flat? (y/n)":
                return "WHEW! That's a relief.";
            case "are you a bot? (yes/no)":
                return "Too bad.I was hoping you'd cache the shop.";
            case "do you think? (y/n)":
                return "Got it. You're a chair than can read and type.";
            default:
                return "Custom response for 'n' answer.";
        }
    }
}

let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Nice to meet you. My name is Ryan. Welcome to my shop.");

// Array of questions
let questions = [
    "Can I help fit you on a bicycle? Size matters. (y/n)",
    "Do you like garlic in general? (yes/no)",
    "Do you think the Earth is flat? (y/n)",
    "Are you a bot? (yes/no)",
    "Do you think? (y/n)",
];

// Iterate through each question
for (let i = 0; i < questions.length; i++) {
    let userResponse = promptAndValidate(questions[i]);
    let customResponse = getCustomResponse(questions[i], userResponse);
    alert(customResponse);
}