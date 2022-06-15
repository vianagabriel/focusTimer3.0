// Script onde fica as funções do timer!
import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    let newMinutes = '25'
    updateDisplay(newMinutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      let newMinutes = '25'

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay(newMinutes)
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function increment() {
    minutes = minutes < 25 ? Number(minutes) + 1 : (minutes = 25)

    updateDisplay(minutes, 0)
  }

  function decrement() {
    minutes = minutes > 5 ? Number(minutes) - 1 : (minutes = 0)

    updateDisplay(minutes, 0)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    increment,
    decrement
  }
}
