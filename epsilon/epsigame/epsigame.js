// REMINDER::: IF IT WORKS DONT TOUCH IT BRUH JS IS FREAKIN HARD

window.onload = function(){
    let mainDivider = document.querySelector('.MainDiv');

    mainDivider.classList.add('showDiv');
}

let winOrLoose = ["gameimg/Win-p", "gameimg/Loose-p"];

let userImage = ["gameimg/PlayerPaper.png", "gameimg/PlayerRock.png", "gameimg/PlayerScissor.png"];

let answer = 0;

let userInputImage = document.querySelector(".UserInputImage");

function MainGameEvent(){
    let mascotElement = document.querySelector(".MainEpsilon");
    let epsilonOutputImage = document.querySelector(".EpsilonOutputImage");

    let images = ["gameimg/Paper-p.png", "gameimg/Rock-p.png", "gameimg/Scissors-p.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];

    let statusHeader = document.getElementById("StatusID");

    const myTimeOutEpsi = setTimeout(SetEpsiAnswer, 2000);

    switch(answer){
        default:
        case answer = 1:
            PaperDef();
            break;   
        case answer = 2:
            RockDef();
            break;
        case answer = 3:
            ScissorsDef();
            break;
    }

    switch (randomIndex){
        default:
        case randomIndex = 0:
            epsilonOutputImage.style.backgroundImage = `url(${userImage[0]})`;
            break;
        case randomIndex = 1:
            epsilonOutputImage.style.backgroundImage = `url(${userImage[1]})`;
            break;
        case randomIndex = 2:
            epsilonOutputImage.style.backgroundImage = `url(${userImage[2]})`;
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
    }


}

function Confirm(){
    MainGameEvent();
}

function Paper(){
    answer = 1;
    userInputImage.style.backgroundImage = `url(${userImage[0]})`;
}

function Rock(){
    answer = 2;
    userInputImage.style.backgroundImage = `url(${userImage[1]})`;
}

function Scissors(){
    answer = 3;
    userInputImage.style.backgroundImage = `url(${userImage[2]})`;
}
