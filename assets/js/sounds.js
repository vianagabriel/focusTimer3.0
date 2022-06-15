// Script responsável pela parte de som
export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const bgAudioNature = new Audio('./sounds/Floresta.wav')
  const bgAudioRain = new Audio('./sounds/Chuva.wav')
  const bgAudioCoffeShop = new Audio('./sounds/Cafeteria.wav')
  const bgAudioFireplace = new Audio('./sounds/Lareira.wav')

  bgAudioNature.loop = true
  bgAudioRain.loop = true
  bgAudioFireplace.loop = true
  bgAudioFireplace.loop = true
  bgAudioNature.volume = 0.5
  bgAudioRain.volume = 0.5
  bgAudioFireplace.volume = 0.5
  bgAudioFireplace.volume = 0.5

  function pressButton() {
    buttonPressAudio.play()
  }
  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudioNature,
    bgAudioRain,
    bgAudioCoffeShop,
    bgAudioFireplace
  }
}
