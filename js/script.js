const task = document.querySelector('.tasks')

function addTask() {
  let taskValue = document.getElementById('task-add').value

  let num = ''
  if (taskValue != '') {
    let num1 = document.querySelector('.num1')
    let newTask = document.createElement('li')

    // Id da nova tarefa
    let idTask = taskValue.charAt(0) + Math.floor(Math.random() * 100000)
    newTask.setAttribute('id', idTask)
    
    newTask.innerHTML = taskValue
    
    let span = document.createElement('span')
    let deleteTask = document.createElement('button')
    let taskCompleted = document.createElement('button')
    
    // BUTTON taskCompleted
    taskCompleted.setAttribute('onclick', `taskCompleted(${idTask})`)
    taskCompleted.setAttribute('class', 'btn-taskCompleted')
    taskCompleted.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    // BUTTON deleteTask
    deleteTask.setAttribute('onclick', `deleteTask(${idTask})`)
    deleteTask.setAttribute('class', 'deleteTask')
    deleteTask.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    
    newTask.appendChild(span)
    span.appendChild(deleteTask)
    span.appendChild(taskCompleted)
    
    task.appendChild(newTask)
  } else {
    alert('Digite sua tarefa')
  }
}

function deleteTask(id) {
  task.removeChild(id)
}

function taskCompleted(id) {
  id.setAttribute('class', 'checked')
}
