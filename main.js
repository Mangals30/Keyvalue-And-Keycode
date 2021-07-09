const message = document.querySelector('.message')
const heading = document.querySelector('.heading')
const key = document.querySelector('.key')
const code = document.querySelector('.code')
const keyCode = document.querySelector('.key-code')

document.body.addEventListener('keydown', e => {
  heading.style.display = 'none'
  message.style.display = 'block'
  key.textContent = e.key
  code.style.display = 'block'
  keyCode.textContent = e.keyCode
})