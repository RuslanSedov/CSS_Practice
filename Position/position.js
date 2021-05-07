const button = document.querySelector('#open')
const close = document.querySelector('#close')
const modal = document.querySelector('#modal')

button.addEventListener('click', (event) => {
  event.preventDefault()
  modal.style.display = 'block'
})

close.addEventListener('click', (event) => {
  event.preventDefault()
  modal.style.display = 'none'
})
