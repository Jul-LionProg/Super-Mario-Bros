const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')

audioStart = new Audio('./src/audio/audio_theme.mp3')
audioGameOver = new Audio('./src/audio/audio_gameover.mp3')


const startGame = () => {
  pipe.classList.add('pipe-animation')
  start.style.display = 'none'

  // audio
  audioStart.play()
}

const restartGame = () => {
  gameOver.style.display = 'none'
  pipe.style.left = ''
  pipe.style.right = '0'
  mario.src = './src/img/mario.gif'
  mario.style.width = '150px'
  mario.style.bottom = '0'

  start.style.display = 'none'

  audioGameOver.pause()
  audioGameOver.currentTime = 0;

  audioStart.play()
  audioStart.currentTime = 0;

}
