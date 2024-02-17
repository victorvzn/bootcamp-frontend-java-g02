console.log('Hola JS')

const taskAdd = document.querySelector('.task__add')
const taskInput = document.querySelector('.task__input')
// const taskInput = document.querySelector('#taskInput')
// const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list')

// console.log(taskAdd)
// console.log(taskInput)
// console.log(taskList)

taskAdd.addEventListener('click', function (event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"
  console.log('Click!')
})

