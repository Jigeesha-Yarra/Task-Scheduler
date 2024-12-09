const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let tasks = [];
addTaskButton.addEventListener("click", () => {
    const enteredTask = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if(enteredTask === "" || deadline === ""){
        alert("Please select an upcoming data for the deadline.")
        return;
    }
    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if(selectedDate <= currentDate){
        alert("Don't add task if deadline is not in the future");
        return;
    }

    tasks.push({task: enteredTask, priority, deadline});
    
    // sort tasks by priority: top -> medium -> low
    tasks.sort((a,b) => {
        const priorityOrder = {top:1, medium:2, low:3};
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    renderTasks(); //clear tasks list and re-render sorted tasks

    // reset inputs
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});

function renderTasks(){
    taskList.innerHTML = ""; // clear current task list

    tasks.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
        <p>${task.task}</p>
        <p> Priority: ${task.priority}</p>
        <p> Deadline: ${task.deadline}</p>
        <button class="mark-done"> Mark Done </button>
        `;
        taskList.appendChild(taskItem);
    });
}

taskList.addEventListener("click",(event) => {
    if(event.target.classList.contains("mark-done")){
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "pink";
        event.target.disabled = true;
    }
});

