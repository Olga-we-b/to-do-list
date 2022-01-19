// ELEMENTS
const tasksContainer = document.querySelector(".tasks-container");

const addNewCardBtn = document.querySelector(".create-new-list-btn");
addNewCardBtn.addEventListener('click', addNewCard)

const toDoList = [];

const doneList = [];


// FUNCTIONS



function addNewCard() {

const newCard = document.createElement('form')
newCard.classList.add('new-card');
newCard.addEventListener('submit', (e) => {
    e.preventDefault();
})
newCard.addEventListener('keyup', (e) => {
    if (e.keyCode=== 13 || e.key === 'Enter'){
        addTask();
    }
})



const newTaskInput = document.createElement('div');
newTaskInput.classList.add('new-task-input');

const wholeLabel = document.createElement('div');
wholeLabel.classList.add('whole-label')

const labelSpan = document.createElement('span');
labelSpan.innerText = "What are we gonna do?";
labelSpan.classList.add('new-task-content');

const taskInput = document.createElement('input');
taskInput.setAttribute('name', 'new-task');
taskInput.setAttribute('autocomplete', 'off');
taskInput.setAttribute('type', 'text');

taskInput.addEventListener('focus', () =>{
    labelSpan.style.opacity = "0";
});



taskInput.addEventListener('blur', () =>{
    labelSpan.style.opacity = "100";
});



const taskLabel = document.createElement('label');
taskLabel.setAttribute('for', 'new-task');
taskLabel.classList.add('new-task-label')



const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('add-task');



const addIcon = document.createElement('i');
addIcon.setAttribute("style", "pointer-events: none;");
addIcon.classList.add('fas', 'fa-plus');

const submitNewTaskBtn = document.createElement('button');
submitNewTaskBtn.setAttribute('for', 'new-task');
submitNewTaskBtn.setAttribute("type", "button");
submitNewTaskBtn.classList.add("add-new-item-button");
submitNewTaskBtn.innerText = "Add";
submitNewTaskBtn.addEventListener('click', addTask);



//-----------------------------------------------------------------------

function addTask(){

    
    const taskTitle = taskInput.value;
    if (taskTitle === "" ) return

    const newTask = document.createElement('li');
    newTask.classList.add('users-task', 'draggable');
    newTask.setAttribute('draggable', 'true');
    newTask.style.cursor = "pointer";

    toDoList.push(newTask);
    tasksList.textContent = "";

    toDoList.forEach((el, key) => {
        el.dataset.key = key;
        tasksList.appendChild(el);
    })
    tasksList.appendChild(newTask);


    const taskContent = document.createElement('input');
    taskContent.classList.add('task-content');
    taskContent.value = taskTitle;
    taskContent.style.fontWeight = "bold";
   
    newTask.appendChild(taskContent);

    const doneBtn = document.createElement('div');
    doneBtn.classList.add('task-button', 'push-right', 'done-button');
    doneBtn.addEventListener('click', (e) =>{
        taskContent.classList.toggle('done');
        
        
    })
    newTask.appendChild(doneBtn);

    const doneIcon = document.createElement('i');
    doneIcon.classList.add('fas', 'fa-check');
    doneBtn.appendChild(doneIcon);

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('task-button', 'remove-button',);
    removeBtn.addEventListener('click', (e)=> {
        const index = e.target.parentNode.dataset.key;
        toDoList.splice(index, 1);
        newTask.remove();
        renderList();

    })
    newTask.appendChild(removeBtn);

    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash');
    removeBtn.appendChild(removeIcon);

    taskInput.value = "";

    const renderList =  () => {
        toDoList.forEach((el, key) => {
            el.dataset.key = key;
            tasksList.appendChild(el);
        })
    }
    
};



const tasksList = document.createElement('ul');




//--------------------------

tasksContainer.appendChild(newCard);
newCard.appendChild(newTaskInput);
newTaskInput.appendChild(wholeLabel);
wholeLabel.appendChild(taskInput);
wholeLabel.appendChild(taskLabel);
taskLabel.appendChild(labelSpan);
newTaskInput.appendChild(addTaskDiv);
addTaskDiv.appendChild(submitNewTaskBtn);
addTaskDiv.appendChild(addIcon);
newCard.appendChild(tasksList);



    
};

