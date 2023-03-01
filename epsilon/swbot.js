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
  