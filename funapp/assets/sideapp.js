// Fun App Software

function SubmitName(){
    const chatList = document.getElementById("outputs");
    const messageItem = document.createElement("li");
    let nameInput = document.getElementById("nameInput").value;
    jsonString = JSON.stringify(nameInput);

    messageItem.classList.add("name-output");
    messageItem.textContent = jsonString;
    chatList.appendChild(messageItem);

    if (nameInput.trim() === "") {
        return;
    }

    document.getElementById("nameInput").value = "";
}