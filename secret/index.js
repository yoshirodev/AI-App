

function Main(){
    let userName = document.getElementById('nameInput').value;

    document.getElementById('nameCall').innerHTML = "Video of your house Mr." + userName + " :)";
    document.title = "Hello " + userName;

    if(userName.length > 0){
        window.location.hash = "secretdiv";
    } else{
        document.getElementById('warning').innerHTML = "Input Username first :)";
    }
}