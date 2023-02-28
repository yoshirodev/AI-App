// DEV TEST APP Main Software

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

async function ButtonTap(){
    MainEvents().then(() => {
        const nameData = data.Username;
        document.getElementById('name1').textContent = nameData;
    });
}

// TEST 1 

// myFruits Array Variable
// the findTheFruit Variable with ( .some ) and checks for the " el " Variable that is equal to " Waifu "
// But the myFruits Array doesnt have a " Waifu " element so it will return FALSE
// But if it contains any element that is inside the myFruits Array it will return TRUE

function DebugTap(){
    const myFruits = ["Apple", "Melon", "Orange", "Mango"];
    
    const findTheFruit = myFruits.some((el) => {
        return el === "Waifu"
    });

    alert(findTheFruit)
}


function CheckNums(){
    const nums = [10, 20, 30, 40];

    const isAllPricesThreshold = nums.every((allNums) => {
        return allNums < 39;
    });

    alert(isAllPricesThreshold);
}

