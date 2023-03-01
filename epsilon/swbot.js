async function sendUserMessage() {
    const userMessage = document.getElementById("messageBot").value;
    if (userMessage.trim() === "") {
        return;
    }

    sendQuery();
    ChangeRandomExpression();
    document.getElementById("messageBot").value = "";
}


function sendQuery() {
    const userInput = document.getElementById("messageBot").value;
    fetch("https://api.carterapi.com/v0/chat", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            api_key: "MJvGKGC8V1MvDTIgyEgt1QLRscstvjMY",
            query: userInput,
            uuid: "user-id-123"
        })
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("chatList").innerHTML = data.output.text;
    });
}

function ChangeRandomExpression(){
    let mascotElement = document.querySelector(".Mascot");
    let images = ["img/Mascot/e1.png", "img/Mascot/e2.png", "img/Mascot/e3.png", "img/Mascot/e4.png"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    mascotElement.style.backgroundImage = `url(${randomImage})`;
    mascotElement.classList.remove('changeElem');
}
  