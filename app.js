const takeInput = document.querySelector(".takeInput input");
const addBtn = document.querySelector(".takeInput button");
const todoList = document.querySelector(".todolist");
const pendingTodo = document.querySelector(".pendingTodo");
const clearAll = document.querySelector(".footer button");

addBtn.onclick = () =>{
    let userdata = takeInput.value;
    let Lstorage = localStorage.getItem("New Todo");
    if(Lstorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(Lstorage);
    }
    listArr.push(userdata);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let userdata = takeInput.value;
    let Lstorage = localStorage.getItem("New Todo");
    if(Lstorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(Lstorage);
    }
    pendingTodo.textContent = listArr.length;
    let newLI = '';
    listArr.forEach((element,index) => {
        newLI += `<li> ${element} <span onclick='deleteTask(${index})'; ><i class="fa-solid fa-trash"></i></span></li>`
    });
    todoList.innerHTML = newLI;
    takeInput.value = ""
}
function deleteTask(index){
    let Lstorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(Lstorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
clearAll.onclick = () =>{
    listArr = [];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

