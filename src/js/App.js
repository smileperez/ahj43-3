import Game from './AppController';
import Actions from './AppActions';

const gameController = new Game();
const game = new Actions(gameController);
game.actionStartGame();