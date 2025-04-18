const div = document.getElementById("tsk");
let button = document.getElementById("sub").addEventListener("click", tasks);
let task = 0;
let completed = 0;

let taskCounter = document.getElementById("para");



function tasks(){
    let inputVal = document.getElementById("txt").value;
    if(inputVal !== ""){
        let checkbox = document.createElement("input");
        checkbox.addEventListener("change", complete);
        checkbox.setAttribute("type", "checkbox");
        let label = document.createElement("label");
        label.classList.add("lab")
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(inputVal));

        div.appendChild(label);
        task++;

        taskCounter.innerText = "Completed tasks: " + completed + "/" + task; 

        document.getElementById("txt").value = "";
    }
}

function complete() {
    // "this" refers to the checkbox that was clicked
    let label = this.parentElement;

    if (this.checked) {
        label.classList.add("completed");
        completed++;
    } else {
        label.classList.remove("completed");
        completed--;
    }

    taskCounter.innerText = "Completed tasks: " + completed + "/" + task;
}