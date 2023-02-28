// MAIN ARTIFICIAL INTELIGENCE SOFTWARE

async function sendUserMessage() {
    const userMessage = document.getElementById("messageBot").value;
    if (userMessage.trim() === "") {
        return;
    }

    const chatbotResponse = await getChatbotResponse(userMessage);

    addBotMessage(chatbotResponse);

    document.getElementById("messageBot").value = "";
    ChangeExpression();
}

async function getChatbotResponse(userMessage) {
    try {
        const response = await fetch('data1.json');
        const data = await response.json();
        for (let i = 0; i < data.intents.length; i++) {
            const intent = data.intents[i];
            for (let j = 0; j < intent.patterns.length; j++) {
                const pattern = intent.patterns[j];
                const distance = levenshteinDistance(userMessage.toLowerCase(), pattern.toLowerCase());
                const similarity = 1 - (distance / Math.max(userMessage.length, pattern.length));
                const threshold = 0.8;
                if (similarity >= threshold) {
                    const response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                    return response;
                }
            }
        }
        return "I'm sorry, I didn't understand that, I'm still being trained so there might be some words that I don't understand yet.";
    } catch (error) {
        console.error(error);
    }
}

function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, 
                    matrix[i][j - 1] + 1,     
                    matrix[i - 1][j] + 1      
                );
            }
        }
    }
    return matrix[b.length][a.length];
}
  

function addBotMessage(message) {
    const chatList = document.getElementById("chatList");
    const messageItem = document.createElement("li");
    messageItem.classList.add("bot-message");
    messageItem.textContent = message;
    chatList.appendChild(messageItem);
}

// MAIN SOFTWARE STATE FUNCTION

function EpsilonStates(){
    const userMessageCheck = document.getElementById("messageBot").value;

    const yandereRequest = ["can you be yandere?", "be yandere", "please be yandere"];
    const tsundereRequest = ["can you be tsundere?", "be tsundere", "please be tsundere"];
    const shyRequest = ["can you be shy girl?", "be shy girl", "please be shy girl"];

    // States
    switch (userMessageCheck){
        default:
        case yandereRequest.indexOf(userMessageCheck) = -1:
            alert("yandereState");
            break;
        case tsundereRequest.indexOf(userMessageCheck) = -1:
            alert("tsundereState");
            break;
        case shyRequest.indexOf(userMessageCheck) = -1:
            alert("shyState");
            break;
    }
}


// SUB FUNCTIONS

let sendButtonCheck = document.getElementById('sendButtonCLC');

function NamingEpsilon(){
    console.log("is Clicked");
    let inputMBot = document.getElementById('messageBot').value;

    fetch('data1.json')
    .then(response => response.json())
    .then(data => {
        const isNamed = data.intents[22].isNamed;
        let objectName = data.intents[22].patterns;

        if(objectName.includes(inputMBot)){    
            if (isNamed) {
                console.log("The chat bot has a name.");
            } else {
                console.log("The chat bot does not have a name.");
            }
        }
    })
    .catch(error => console.error(error));
}

sendButtonCheck.addEventListener('click', NamingEpsilon);

function ChangeExpression(){
    let mascotElement = document.querySelector(".Mascot");
    let images = ["img/Mascot/e1.png", "img/Mascot/e2.png", "img/Mascot/e3.png", "img/Mascot/e4.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    mascotElement.style.backgroundImage = `url(${randomImage})`;
}