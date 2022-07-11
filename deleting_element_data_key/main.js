// JavaScript Document
const removeTask = (e)=>{

//deleting with data-key
const index = e.target.dataset.key;
	document.querySelector(`li[data-key=${index}]`).remove
	
}
document.querySelectorAll('li button[data-key]').forEach(item=> item.addEventListener('click',removeTask))