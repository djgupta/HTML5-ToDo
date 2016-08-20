window.onload = function(e){
	e.preventDefault();
	addTask(e);
}

function addTask(e){
	e.preventDefault();
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var date = document.getElementById('date');
	var time = document.getElementById('time');
	var submit = document.getElementById('submit');
	
	var tasks = [];
	tasks = JSON.parse(localStorage.getItem('tasks'))
	if(tasks == null) {
		var tasks = [];
	}
	var i=tasks.length;
	
	for(var j=0;j<tasks.length;j++){
		if(tasks[j].Edit){
			task.value = tasks[j].task;
			priority.value = tasks[j].priority;
			date.value =  tasks[j].date;
			time.value =  tasks[j].time;
			i=j;
			break;
		}
	}
	
	submit.onclick = function(e){
		if(task.value ==""){
		}
		else{
			todos = {
				"id" : i,
				"task" : task.value,
				"priority" : priority.value,
				"date" : date.value,
				"time" : time.value,
				"Edit" : false,
			};
			
			if(i == tasks.length){
				tasks.push(todos);
			}
			else{
				tasks[i] = todos;
			}
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}	
	}
	function DeleteTask(i){
		
	}
}