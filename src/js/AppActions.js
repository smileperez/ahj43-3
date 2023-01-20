// import Game from "./AppController";

export default class Actions {
  constructor(game) {
    this.game = game;
    this.goblin = game.goblin;
  }

  actionStartGame() {
    const button = document.querySelector('.start');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearInterval(this.game.timerInterval);
      this.game.hits = 0;
      this.game.misses = 0;
      this.game.hitBlock.innerText = `Количество попаданий: ${this.game.hits}`;
      this.game.missBlock.innerText = `Количество промахов: ${this.game.misses}`;
      this.game.start();
      this.actionGoblinClick();
      console.log('Игра начата');
    });
  }

  actionGoblinClick() {
    this.goblin.addEventListener('click', () => {
      this.goblin.classList.add('hide');
    });
  }
}
