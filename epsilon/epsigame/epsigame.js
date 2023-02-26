// REMINDER::: IF IT WORKS DONT TOUCH IT BRUH JS IS FREAKIN HARD

// LEFT THE SETTING PLAYER ANSWER INPUT EX: ROCK

window.onload = function(){
    let mainDivider = document.querySelector('.MainDiv');

    mainDivider.classList.add('showDiv');
}

let winOrLoose = ["gameimg/Win-p", "gameimg/Loose-p"];

let userImage = ["gameimg/PlayerStarting.png", "gameimg/PlayerRock.png", "gameimg/PlayerPaper.png", "gameimg/PlayerScissor.png"];

let answer = 0;

let winAns = false;
let looseAns = false;

let userInputImage = document.querySelector(".UserInputImage");

function MainGameEvent(){
    let mascotElement = document.querySelector(".MainEpsilon");
    let images = ["gameimg/Paper-p.png", "gameimg/Rock-p.png", "gameimg/Scissors-p.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];

    let statusHeader = document.getElementById("StatusID");

    const myTimeOutEpsi = setTimeout(SetEpsiAnswer, 2000);

    switch(answer){
        default:
        case answer = 1:
            const myTimeout1 = setTimeout(RockDef, 1000);
            break;   
        case answer = 2:
            const myTimeout2 = setTimeout(PaperDef, 1000);
            break;
        case answer = 3:
            const myTimeout3 = setTimeout(ScissorsDef, 1000);
            break;
    }

    function SetEpsiAnswer(){
        mascotElement.style.backgroundImage = `url(${randomImage})`;
    }

    function RockDef(){
        switch (randomIndex){
            default:
            case randomIndex = 2:
                statusHeader.innerHTML = "You Win";
                break;
            case randomIndex = 1:
                statusHeader.innerHTML = "Tie";
                break;
            case randomIndex = 0:
                statusHeader.innerHTML = "You Loose";
                break;
        }

        /*
        if(randomIndex == 2){
            statusHeader.innerHTML = "You Win";
        }else if(randomIndex == 1 ){
            statusHeader.innerHTML = "Tie";
        }else{
            statusHeader.innerHTML = "You Loose";
        }
        */
    }

    function PaperDef(){
        switch (randomIndex){
            default:
            case randomIndex = 1:
                statusHeader.innerHTML = "You Win";
                break;
            case randomIndex = 0:
                statusHeader.innerHTML = "Tie";
                break;
            case randomIndex = 2:
                statusHeader.innerHTML = "You Loose";
                break;
        }

        /*
        if(randomIndex == 1){
            statusHeader.innerHTML = "You Win";
        }else if(randomIndex == 0 ){
            statusHeader.innerHTML = "Tie";
        }else{
            statusHeader.innerHTML = "You Loose";
        }
        */
    }

    function ScissorsDef(){
        switch (randomIndex){
            default:
            case randomIndex = 0:
                statusHeader.innerHTML = "You Win";
                break;
            case randomIndex = 2:
                statusHeader.innerHTML = "Tie";
                break;
            case randomIndex = 1:
                statusHeader.innerHTML = "You Loose";
                break;
        }

        /*
        if(randomIndex == 0){
            statusHeader.innerHTML = "You Win";
        }else if(randomIndex == 2){
            statusHeader.innerHTML = "Tie";
        }else{
            statusHeader.innerHTML = "You Loose";
        }
        */
    }
}

function Confirm(){
    MainGameEvent();
}

function Rock(){
    answer = 1;
    userInputImage.style.backgroundImage = `url(${userImage[1]})`;
}

function Paper(){
    answer = 2;
    userInputImage.style.backgroundImage = `url(${userImage[2]})`;
}

function Scissors(){
    answer = 3;
    userInputImage.style.backgroundImage = `url(${userImage[3]})`;
}

function WinPlayer(){

}

function LoosePlayer(){

}