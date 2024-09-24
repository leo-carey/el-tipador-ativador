import './style.css'

let intervalTipador: number
let textarea: HTMLElement | null

window.onload = function() {
  textarea = document.getElementById('tipador-area')
  const buttonStartTipador = document.querySelector('#start-tipador') 
  const buttonStopTipador = document.querySelector('#stop-tipador')
  
  if (buttonStartTipador) {
    buttonStartTipador.addEventListener('click', startElTipador)
  }

  if (buttonStopTipador) {
    buttonStopTipador.addEventListener('click', stopTipador)
  }
}

function startElTipador() {
  console.log('[el-tipador-ativador:start]')

  let times = 1

  intervalTipador = setInterval(function() {
    console.log(times)
    if (textarea) {
      textarea.focus()
      const elephants = times === 1 ? `${times} elefante incomoda muita gente\n` : `${times} elefantes incomodam muito mais\n` 
      textarea.innerHTML += elephants
    }

    times++
  }, 1000)
}

function stopTipador() {
  console.log('[el-tipador-ativador:stop]')

  if (textarea) {
    textarea.innerHTML = ''
  }

  if (intervalTipador) {
    clearInterval(intervalTipador)
  }
}