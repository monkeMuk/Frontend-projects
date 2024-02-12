const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value== ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li"); // creates a new html list item (li)
        li.innerHTML = inputBox.value; // the value li is given by inputBox
        listContainer.appendChild(li); // pust the newly created li into listContainer

        // create "x"
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // this means "x"
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}
// needs further explanation
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()

    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// saves data when u refresh

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();