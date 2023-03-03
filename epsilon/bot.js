// MAIN ARTIFICIAL INTELIGENCE SOFTWARE

let isCountryNamed = false;

async function sendUserMessage() {
    const userMessage = document.getElementById("messageBot").value;
    if (userMessage.trim() === "") {
        return;
    }

    const chatbotResponse = await getChatbotResponse(userMessage);

    addBotMessage(chatbotResponse);

    document.getElementById("messageBot").value = "";
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
                    // Placed
                    switch(intent.tag){
                        case "yandere-request":
                            ChangeYandereExpression();
                            break;
                        case "tsundere-request":
                            //Proud image
                            break;
                        case "creator-affection1":
                            LoveExpression();
                            break;
                        case "kuudere-request":
                            // Angry Image
                            break;
                        case "weather-request":
                            WeatherCondition();
                            break;
                        default:
                            // Put Changed
                            ChangeRandomExpression();
                            break;
                    }
                    // NAMING
                    let inputMBot = document.getElementById('messageBot').value;
                    const namingIntent = data.intents.find(intent => intent.tag === 'naming');
                    const objectName = namingIntent.patterns;
        
                    if(objectName.includes(inputMBot)){    
                        if (namingIntent.name === "") {
                            // MAKE A NAMING FEATURE HERE

                            const responseName = namingIntent.then.responses[Math.floor(Math.random() * namingIntent.then.responses.length)];
                            return responseName;
                        } else {
                            const nameText = namingIntent.name;
                            const responseNamed = namingIntent.else.responses[0].replace('{{name}}', nameText);
                            return responseNamed;
                        }
                    }
                    // Placed
                    const responseRan = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                    return responseRan;
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

// SUB FUNCTIONS

let sendButtonCheck = document.getElementById('sendButtonCLC');

function NamingEpsilon(botText){
    try {
        console.log("is Clicked");
        let inputMBot = document.getElementById('messageBot').value;
        fetch('data1.json')
        .then(response => response.json())
        .then(data => {
            const namingIntent = data.intents.find(intent => intent.tag === 'naming');
            const objectName = namingIntent.patterns;

            if(objectName.includes(inputMBot)){    
                if (namingIntent.isNamed) {
                    console.log("The chat bot has a name.");
                } else {
                    console.log("The chat bot does not have a name.");
                }
            }
        })
    } catch (error) {
        console.error(error)
    }
    addBotMessage(botText);
}


//sendButtonCheck.addEventListener('click', NamingEpsilon);

// Weather Funcs 

function WeatherCondition(){
    //let userInput = document.getElementById('messageBot').value;
    isCountryNamed = true;

    //location = userInput;

    let location = "New York City";
    const dateTime = "2023-03-03T12:00:00";

    const apiUrl = "https://api.stormglass.io/v2/weather/point";
    const queryParams = new URLSearchParams({
        lat: YOUR_LATITUDE,
        lng: YOUR_LONGITUDE,
        params: "temperature,windSpeed,precipitation",
        start: dateTime,
        end: dateTime
    });
    const headers = {
        "Authorization": "ebcc8ee2-b9aa-11ed-b59d-0242ac130002-ebcc9040-b9aa-11ed-b59d-0242ac130002"
    };
    const requestUrl = `${apiUrl}?${queryParams}`;

    fetch(requestUrl, { headers })
    .then(response => {
        if (response.ok) {
        return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then(data => {
        const temperature = data.hours[0].temperature.sg;
        const windSpeed = data.hours[0].windSpeed.sg;
        const precipitation = data.hours[0].precipitation.sg;
        
        const responseText = `The weather in ${location} on ${dateTime} is ${temperature}°C with wind speed of ${windSpeed} m/s and precipitation of ${precipitation} mm.`;
        if(isCountryNamed){
            const chatList = document.getElementById("chatList");
            const messageItem = document.createElement("li");
            messageItem.classList.add("bot-message");
            messageItem.textContent = responseText;
            chatList.appendChild(messageItem);
            isCountryNamed = false;
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// IMAGE CHANGE EXPRESSIONS

function ChangeRandomExpression(){
    let mascotElement = document.querySelector(".Mascot");
    let images = ["img/Mascot/e1.png", "img/Mascot/e2.png", "img/Mascot/e3.png", "img/Mascot/e4.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    mascotElement.style.backgroundImage = `url(${randomImage})`;
    mascotElement.classList.remove('changeElem');
}

function ChangeYandereExpression(){
    let mascotElement = document.querySelector(".Mascot");
    let images = ["img/Mascot/y1.png", "img/Mascot/y2.png", "img/Mascot/y3.png", "img/Mascot/y4.png", "img/Mascot/y5.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    mascotElement.style.backgroundImage = `url(${randomImage})`;
    mascotElement.classList.add('changeElem');
}

function LoveExpression(){
    let mascotElement = document.querySelector(".Mascot");
    let images = ["img/Mascot/y2.png", "img/Mascot/y5.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    mascotElement.style.backgroundImage = `url(${randomImage})`;
    mascotElement.classList.add('changeElem');
}


// ERROR DEF
window.addEventListener('load', redirect);

function redirect() {
    // Check if the aspect ratio is that of a phone
    const isPhone = window.matchMedia("(max-aspect-ratio: 5/6)").matches;

    if (isPhone) {
        window.location.href = '../errorDir/errorPage.html';
    } 
}
