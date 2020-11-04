console.log('IT WORKS')
// import PuttPutt from './game';

// const canvas = document.getElementById('golf-course');
// const canvas2 = document.getElementById('background-hover-canvas');

// new PuttPutt(canvas, canvas2);

import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.height = 550;
    canvas.width = 900;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(126, 200, 80)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(20, 20, 20, 20)
    const gameView = new GameView(ctx);
})

// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById("game-canvas");
//     canvas.height = 550;
//     canvas.width = 900;

//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = "rgb(126, 200, 80)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     const gameView = new GameView(ctx);
// })