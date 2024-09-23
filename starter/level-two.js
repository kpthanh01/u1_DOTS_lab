/*
 * DOTS: Level Two
 *
 */
let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

balls.forEach((tags) => {
  tags.addEventListener('click', () => {
    if (score === 100) {
      levelWinner.style.opacity = 1;
    } else {
      score += 10;
      scoreDisplay.innerText = score;
    }
  })
})