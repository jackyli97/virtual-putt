import Game from './game';
import levels from './levels';

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.hole = 1;
        this.gameMenu = document.getElementById('start-menu');
        this.startButton = document.querySelector('.start-button');
        this.menuTitle = document.querySelector('.menu-title');
        this.menuText = document.querySelector('.menu-text');
        this.inProgress = false;

        this.bindMenuHandlers();
    }

    start() {
        this.game = new Game(this.ctx, levels[this.hole]);
        this.menuTitle.dataset.hole = this.hole;
        this.inProgress = true;
        this.bindGameHandlers();
        this.game.draw(this.ctx);
        this.gameLoop();
    }

    gameLoop() {
        this.game.draw(this.ctx);
        if (this.holeOver()) {
            this.gameMenu.classList.toggle('hide');
            this.inProgress = false;
        } else {
            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    holeOver() {
        if (1 + 1 === 3) {
            window.cancelAnimationFrame(this.animationRequestId);
            this.hole += 1;

            this.menuTitle.innerHTML = levels[this.hole].menuTitle;
            this.menuText.innerHTML = levels[this.hole].menuText;

            if (this.hole < 5) {
                this.startButton.innerHTML = 'Start';
            } else {
                this.startButton.innerHTML = 'Play Again';
                this.hole = 1;
            }

            return true;
        } else if (1 + 1 === 4) {
            window.cancelAnimationFrame(this.animationRequestId);
            this.menuTitle.innerHTML = 'Not Quite!';
            this.menuText.innerHTML = 'Better luck next time! Give it another shot and hone those herding skills.'
            this.startButton.innerHTML = 'Play Again';

            this.hole = 1;
            return true;
        }

        return false;
    }

    bindMenuHandlers() {
        const startGame = () => {
            this.gameMenu.classList.toggle('hide');
            this.start();
        };

        this.startButton.addEventListener('click', () => {
            if (!this.inProgress) startGame();
        });

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 && !this.inProgress) startGame();
        });
    }

    bindGameHandlers() {
        const golfcourse = this.game.golfcourse;
        const mouseMoveHandler = golfcourse.mouseMoveHandler.bind(golfcourse);
        const mouseClickHandler = golfcourse.mouseClickHandler.bind(golfcourse);
        const shotHandler = this.game.shotHandler.bind(this.game)
        // document.addEventListener('mousemove', event => {
        //     mouse.x = event.clientX
        //     mouse.y = event.clientY
        // });
        // document.addEventListener('click', (event) => {
        //     console.log('clicked');
        // });
        document.addEventListener('click', mouseClickHandler);
        document.addEventListener('click', shotHandler);
        document.addEventListener('mousemove', mouseMoveHandler);
    }
}

export default GameView;
