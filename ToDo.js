tasks = JSON.parse(localStorage.getItem('tasks'));
for(var i=0;i<tasks.length;i++){
	display(i);
}

function display(i){
	var table = document.getElementById('table');
	
	tasks = JSON.parse(localStorage.getItem('tasks'))
	
	var tr = document.createElement('tr');
	table.appendChild(tr);
	
	var td = document.createElement('td');
	tr.appendChild(td);
	td.innerHTML = tasks[i].task;
	td.id = "Task";
	
	var td = document.createElement('td');
	tr.appendChild(td);
	td.innerHTML = tasks[i].priority;
	td.id = "Priority";
	
	var td = document.createElement('td');
	tr.appendChild(td);
	td.innerHTML = tasks[i].date;
	td.id = "Date";
	if(td.innerHTML == "")
	{
		td.innerHTML = "--";
	}
	
	var td = document.createElement('td');
	tr.appendChild(td);
	td.innerHTML = tasks[i].time;
	if(td.innerHTML == "")
	{
		td.innerHTML = "--";
	}
	td.id = "Time";
	
	var td = document.createElement('td');
	var Edit = document.createElement('a');
	td.appendChild(Edit);
	tr.appendChild(td);
	Edit.innerHTML = "Edit";
	Edit.setAttribute("href", "ToDo_AddTask.html");
	
	var td = document.createElement('td');
	var Delete = document.createElement('a');
	td.appendChild(Delete);
	tr.appendChild(td);
	Delete.innerHTML = "Delete";
	Delete.setAttribute("href", "index.html");
	
	Edit.onclick = function(e){
		tasks[i].Edit = true;
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	Delete.onclick = function(e){
		var j = i;
		if(j == tasks.length - 1){
			tasks.length--;
		}
		else{
			while(j<(tasks.length-1)){
				tasks[j] = tasks[j+1];
				j++;o
			}
			tasks.length--;
		}
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}