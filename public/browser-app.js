const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
const dropdown = document.querySelector('.dropdown');

// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task
        return `<div class="single-task ${completed && 'task-completed'}">
<h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
<div class="task-links">



<!-- edit link -->
<a href="task.html?id=${taskID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${taskID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInputDOM.value

  try {
    await axios.post('/api/v1/tasks', { name })
    showTasks()
    taskInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, task added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})

dropdown.forEach(dropdown => {
  //Get inner element from each dropdown
  const select = dropdown.querySelector('.select')
  const caret = dropdown.querySelector('.caret')
  const menu = dropdown.querySelector('.menu')
  const options = dropdown.querySelector('.menu li')
  const selected = dropdown.querySelector('.selected')
})

//Add a click event to the select
select.addEventListener('click', () =>{
  //Add the clicked select stles to the select element
  select.classList.toggle('select-clicked')

  //Add the rotate styles tot he caret element
  caret.classList.toggle('caret-rotate')

  //Add the open styles to the menu element 
  menu.classList.toggle('menu-open')
})

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    option.classList.remove('active');
  })
  option.classList.add('active')
})