


function add_task(insert){

	text=get_input.value
	
	if (text){

		let display_task=document.createElement('div')
		display_task.classList.add("display_task")

		let task_text=document.createElement('p')
		task_text.classList.add('task')
		task_text.innerText=text

		let edit_options= document.createElement('div')
		edit_options.classList.add('edit_options')

		let _delete_=document.createElement('button')
		_delete_.classList.add('delete')
		_delete_.innerText="Delete"

		let _edit_=document.createElement('button')
		_edit_.classList.add('edit')
		_edit_.innerText='Edit'


		edit_options.appendChild(_delete_)
		edit_options.appendChild(_edit_)

		display_task.appendChild(task_text)
		display_task.appendChild(edit_options)

		tasks.appendChild(display_task)

		_delete_.onclick=remove_task
		_edit_.onclick=edit_task


	}
	else{
		alert('Enter something in the input area')
	}
	get_input.value=''
	
}



function remove_task(){
	console.log('remove')
	let text=this.parentElement.parentElement.children[0].innerText
	console.log(text)
	this.parentElement.parentElement.remove()
	list_container.innerHTML+='<li class="list_item">'+text+'</li>'
	


}

function edit_task()
{
	get_input.value=this.parentElement.parentElement.children[0].innerText
	this.parentElement.parentElement.remove()
}



let tasks=document.querySelector('.tasks')
let task=document.querySelector('.display_task')
let get_input=document.querySelector('.get_input')
let addtask=document.querySelector('.addtask')
let container=document.querySelector('.container')
let list_container=document.querySelector(".list_container")

addtask.addEventListener('click',add_task )







