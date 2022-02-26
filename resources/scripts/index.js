//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener("click",addTodo);

todoList.addEventListener("click",deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault();//prevents form from submitting

   // console.log('hello')
    //Todo Div
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo =document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoInput.value;
    

    todoDiv.appendChild(newTodo);
    //Check button
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.append(completedButton);
    //trash button
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.append(trashButton);


    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deleteCheck(e){
    const item =e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        
        todo.addEventListener('transitionend',()=>{
            todo.remove();
        });
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}