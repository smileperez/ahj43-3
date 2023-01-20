export default class Game {
  constructor() {
    this.hits = 0;
    this.misses = 0;
    this.hitBlock = document.querySelector('.hits');
    this.missBlock = document.querySelector('.miss');
    this.goblin = document.querySelector('.goblin');
    this.fields = document.querySelectorAll('.box');
  }

  getRandomGoblin() {
    // Получаем уникальное рандомное поле (без повторений)
    this.newField = this.getUniqRandom();

    // Проходим по всем полям и ищем поле соответсвтующее newField
    for (const element of this.fields) {
      if (element.getAttribute('data-id') === this.newField.toString()) {



        if (this.prevElement) {
          if (this.goblin.classList.contains('hide')) {
            this.hits += 1;
            this.hitBlock.innerText = `Количество попаданий: ${this.hits}`;
          } else {
            this.misses += 1;
            this.missBlock.innerText = `Количество промахов: ${this.misses}`;
          }
          this.prevElement.removeChild(this.goblin);
        }
        
        this.goblin.classList.remove('hide');

        if (this.misses === 5) {
          clearInterval(this.timerInterval);
          alert('Вы проиграли!');
        } else if (this.hits > 5) {
          clearInterval(this.timerInterval);
          alert('Вы выиграли!');
        }

        element.appendChild(this.goblin);
        this.prevElement = element;
        return;
      }
    }
  }

  calculateRandom() {
    this.random = Math.floor(Math.random() * 16);
    return this.random;
  }

  getUniqRandom() {
    let randomField = this.calculateRandom();
    while (randomField === this.newField) {
      randomField = this.calculateRandom();
    }
    return randomField;
  }

  start() {
    this.timerInterval = setInterval(() => this.getRandomGoblin(), 1000);
  }
}
