// JavaScript Document

//const arr = [34,219,109,287,12,10,29];
//
//const oddNumbers = arr.filter((number)=>number%2); 
//
//const double  = arr.map(number => number*2)
//
////przebudowanie tablicy źródłowej przy forEach
//
//arr.forEach((number,index) =>arr[index] = number*2);


const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const search =(e)=>{
const searchText = e.target.value.toLowerCase();
let tasks = [...liElements];
tasks = tasks.filter(li =>li.textContent.toLowerCase().includes(searchText));
	ul.textContent = '';
	tasks.forEach(li=> ul.appendChild(li));
	
}
input.addEventListener('input',search)