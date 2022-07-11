// JavaScript Document

const toDoList=[];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');

const renderList =()=>{
	ul.textContent = "";
	toDoList.forEach((toDoElement,key) =>{
		toDoElement.id = key;
		ul.appendChild(toDoElement);
	})
}
//const listItems = document.querySelectorAll('li.task');
//getElementByClassName na zywo update powstałych elementow,ale czemu, bo przy querySelectorAll tez potem dodajemy li w funkcji (ul.appendChild(task))
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask =(e)=>{
//	e.target.parentNode.remove();
	const index = e.target.parentNode.id.key;
	toDoList.splice(index,1);
	renderList();
	taskNumber.textContent = toDoList.length; 

}

const addTask =(e)=>{
	e.preventDefault()
	const titleTask = input.value;
	if(titleTask === '') return
	const task = document.createElement('li');
	task.className = "task";
	task.innerHTML = titleTask + '<button>Delete</button>';
	toDoList.push(task); 
	console.log(task)
	renderList();
	ul.appendChild(task);
	input.value = "";
	taskNumber.textContent = listItems.length; 
	
	task.querySelector('button').addEventListener('click',removeTask);
	
}

form.addEventListener('submit',addTask)