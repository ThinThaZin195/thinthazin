let todoArray = [];
let pendingDone = [];
let doneArray = [];

// Get references to DOM elements
const Input = document.getElementById('itemInput');
const Add = document.getElementById('addItemButton');
const Move = document.getElementById('Move');
const todoDisplay = document.getElementById('list1');
const doneDisplay = document.getElementById('list2');

function updatetodoDisplay() {
    todoDisplay.innerHTML = ''; 
    
    todoArray.forEach((item,index) => {
        const li = document.createElement('li');
        const touch = document.createTextNode('')
        li.textContent = item; 
        li.appendChild(touch);
        todoDisplay.appendChild(li);

        li.setAttribute('data-index', index);
        
        li.addEventListener('click' , sayIndex)
    });
}

function sayIndex(e){
    let index = e.target.getAttribute("data-index");

    pendingDone.push(index);

    console.log(pendingDone);
}

function updatedoneDisplay() {
    doneDisplay.innerHTML = ''; 
    doneArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item; 
        doneDisplay.appendChild(li); 
    });
}

Add.addEventListener('click', () => {
    const inputValue = Input.value.trim();
    if (inputValue) {
        todoArray.push(inputValue); 
        Input.value = ''; 
        updatetodoDisplay(); 
    }
});

Move.addEventListener('click', () => {
    pendingDone.forEach(todoIndex => {
        let tmpTodo = todoArray[todoIndex];

        delete todoArray[todoIndex];

        doneArray.push(tmpTodo);
    })

    todoArray = todoArray.filter(item => item || item == 0);

    updatetodoDisplay(); 
    updatedoneDisplay(); 
});

