const addButton = document.getElementById('b');
const taskinput = document.getElementById('taskInput');
const tasklist = document.getElementById('a');

function addTask() {

    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);

        taskInput.value = '';
    } 

}

addButton.addEventListener('click', addTask);



function createTaskElement(task){

    const listItem = document.createElement('li');

    listItem.textContent = task;
    
    a.appendChild(listItem);



    const addButton = document.createElement('button');
    addButton.textContent = '';
    addButton.className = 'k';
    listItem.appendChild(addButton);
    addButton.addEventListener('click', function(){
        applyStrike(this);
    })

    function applyStrike(element){
        if (element.classList.contains('cc')){
            element.classList.remove('cc');
        } else {
            element.classList.add('cc');
        }
    }
 


    

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';


    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(){
        tasklist.removeChild(listItem);
    });


}











taskinput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        addTask();
    }
})