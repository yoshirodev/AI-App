// Fun App Software

const nameData = JSON.parse('{"name":"", "age":, "address":""}');

function SubmitName(){
    let nameInput = document.getElementById("nameInput").value;
    const chatList = document.getElementById("outputs");
    const messageItem = document.createElement("li");
    jsonString = JSON.stringify(nameInput);

    messageItem.classList.add("name-output");
    messageItem.textContent = jsonString;
    chatList.appendChild(messageItem);

    if (nameInput.trim() === "") {
        return;
    }

    document.getElementById("nameInput").value = "";

    MainEvents();
}


function MainEvents(){
    fetch('datasets.json')
        .then(response => response.json())
        .then (data => {
            const datasets = data.Datasets;

            return datasets[0];
        })
}


let age1 = document.getElementById('age1').innerHTML;
let address1 = document.getElementById('address1').innerHTML;

function ButtonTap(){
    MainEvents().then(() => {
        const nameData = data.Username;
        document.getElementById('name1').textContent = nameData;
    });
}
