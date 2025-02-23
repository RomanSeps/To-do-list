document.getElementById("submit").addEventListener("click", function () {
    let inputField = document.querySelector(".text");
    let taskText = inputField.value.trim(); 

    if (taskText !== "") {
        let taskDiv = document.querySelector(".tasks");

        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let label = document.createElement("label");
        label.textContent = taskText;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);

        taskDiv.appendChild(taskItem);

        inputField.value = "";
    }
});
