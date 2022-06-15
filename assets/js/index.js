// Script principal !
import Controls from './controls.js'
import Timer from './timer.js'
import { elements } from './elements.js'
import Sound from './sounds.js'
import Events from './events.js'

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
  buttonIncrement,
  buttonDecrement,
  cardFlorest,
  cardRain, 
  cardCoffeShop,
  cardFireplace,
  toggleOff,
  toggleOn,
  body,
  timerSpan,
  svgButtonPlay,
  cards,
  volume,
  volumeRain,
  volumeCoffe,
  volumeFire,
  inputRange,
  inputRangeRain,
  inputRangeCoffe,
  inputRangeFire,
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonPause,
  buttonIncrement,
  buttonDecrement,
  cardFlorest,
  cardRain,
  cardCoffeShop,
  cardFireplace,
  toggleOff,
  toggleOn,
  body,
  timerSpan,
  svgButtonPlay,
  cards,
  volume,
  volumeRain,
  volumeCoffe,
  volumeFire,
  inputRange,
  inputRangeRain,
  inputRangeCoffe,
  inputRangeFire,
})


