// JavaScript Document
const mainTasksArray = [];
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const h1 = document.querySelector('h1 span')
const inputSearch = document.querySelector('input.search');

const render = ()=>{
	ul.innerHTML = '';
	mainTasksArray.forEach((task,key)=>{
		task.id = key;	
		ul.appendChild(task);
	 })	
	const tasksNumber = document.querySelectorAll('li').length;
	h1.textContent = tasksNumber;
	
	
}

const search = (e)=>{
	const searchValue = e.target.value
	if(searchValue === ''){
		mainTasksArray.forEach((task)=>{
			ul.appendChild(task);
		})
	}else{
		let searchingTasksArray = [...mainTasksArray];
//		najgorszy moment
		searchingTasksArray = searchingTasksArray.filter(element=>element.innerText.includes(searchValue));
		console.log(searchingTasksArray);
		ul.innerHTML = '';
		searchingTasksArray.forEach((task)=>{
			ul.appendChild(task);
		})
	}
	
}

const removeTask =(e)=>{
	const task = e.target.parentNode;
	task.remove(task);
	const index= e.target.parentNode.id
	mainTasksArray.splice(index,1);
	render();
	console.log(task);
}

const addTask =(e)=>{
	e.preventDefault();
	const task = document.createElement('li');
	const taskName = input.value;
	task.innerHTML = taskName + "<button>Delete</button>";
	mainTasksArray.push(task);
	render();
	input.value = '';
	task.querySelector('button').addEventListener('click',removeTask);
}


form.addEventListener('submit',addTask);
inputSearch.addEventListener('input',search);