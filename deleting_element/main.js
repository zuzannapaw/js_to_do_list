// JavaScript Document

const removeTask = (e)=>{
//	deleting
	e.target.parentNode.remove(); 
	
//	crossing
//	e.target.parentNode.style.textDecoration = 'line-through';
//	e.target.remove();
//	

document.querySelectorAll('li button').forEach(item=> item.addEventListener('click',removeTask))