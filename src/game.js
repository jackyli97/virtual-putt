import Sheep from "./sheep";
import GolfCourse from "./golfcourse";
import Goat from "./goat";
import FenceBox from "./fence";
import currentHole from "./current_hole";
// import Hole from '../assets/images/hole.png'
import Timer from "./timer";
import { isCollidedWith, resolveCollision } from "./util";
import CurrentHole from "./current_hole";

class Game {
    constructor(ctx, levelData) {
        this.currentLevel = levelData;
        this.numSheep = this.currentLevel.numSheep;
        this.numGoats = this.currentLevel.numGoats;
        this.sheep = [];
        this.goats = [];
        this.stationaryObjects = [];
        this.ctx = ctx;
        this.ballStatus = 0;
        this.addTimer();
        this.addGolfCourse();
        this.roundOver = false;
    }

    
    addGolfCourse() {
        let img1 = new Image();
        img1.src = "assets/images/golfball.png";
        
        let img2 = new Image();
        img2.src = "assets/images/golfclub.png"
        let golfcourse = new GolfCourse(this.ctx, img1, img2, {x: 0, y: 0});
        this.golfcourse = golfcourse;
    }
    
    addTimer() {
        this.timer = new Timer(this.ctx, this.currentLevel.timeRemaining);
        this.stationaryObjects.push(this.timer);
        this.timer.countdown();
    }

    shotHandler(e) {
        if ((this.ballStatus < 1) && this.golfcourse.clicked) {
            this.ballStatus += 1;
        }
        else if (this.ballStatus >= 1 && this.golfcourse.clicked) {
            this.golfcourse.ballisMoving = true;
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.moveBall();
            console.log('itworked');
        }
    }
    
    moveBall() {
        this.golfcourse.move();
        setTimeout(()=>{this.golfcourse.ballisMoving = false}, 1000)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.fillStyle = "rgb(126, 200, 80)";
        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // let img = new Image();
        // img.src = "assets/images/grass.png"
        // this.ctx.drawImage(img, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.ctx.canvas.width, this.ctx.canvas.height)
        // Add objects to canvas
        let holeImg = new Image();
        holeImg.src = "assets/images/hole.png";
        this.golfcourse.draw();
        this.ctx.drawImage(holeImg, 225, 200);
        // let clubImg = new Image();
        // clubImg.src = "assets/images/golfclub.png";
        // this.ctx.drawImage(clubImg, 224, 200);
        
        // Sheep remaining counter
    }

}

export default Game;