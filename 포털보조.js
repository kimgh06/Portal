let searchLine = document.querySelector("#searchLine");
const main = document.querySelector("#main");
function toggleMenu(){
    const mainside = document.querySelector("#mainside");
    const menuButton = document.querySelector("#menuButton");
    const sideBar = document.querySelector("#sideBar");
    const loginDiv = document.querySelector("#loginDiv");
    if(mainside.classList.contains("hidden")){
        mainside.classList.remove("hidden");
        menuButton.style.backgroundColor = "white";
        menuButton.style.color = "black";
        menuButton.style.transform = "rotate(-180deg)"
        sideBar.style.backgroundColor = "rgb(105, 191, 225)";
        loginDiv.style.display = 'flex';
    }
    else{
        mainside.classList.add("hidden");
        menuButton.style.color = "white";
        menuButton.style.backgroundColor = "rgb(105, 191, 225)";
        menuButton.style.transform = "rotate(0deg)"
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        loginDiv.style.display = 'none';
    }
}

function posting(){
    const postingBackground = document.createElement('div');
    postingBackground.class = "postingBackground";
    const postingInput = document.createElement('input');
    postingInput.type='text';
    postingBackground.appendChild(postingInput);
    document.body.appendChild(postingBackground);
}
