import GolfCourse from "./golfcourse";
import levels from "./levels"

class Game {
    constructor(ctx, levelData) {
        this.currentLevel = levelData;
        this.par = this.currentLevel.par
        this.courseDims = this.currentLevel.courseDims
        this.holePos = this.currentLevel.holePos
        this.range = this.currentLevel.range,
        this.bounds = this.currentLevel.bounds,
        this.zones = this.currentLevel.zones,
        // this.intercepts = this.currentLevel.intercepts,
        this.stationaryObjects = [];
        this.ctx = ctx;
        this.ballStatus = 0;
        this.addGolfCourse();
        this.roundOver = false;
        this.levels
    }

    
    addGolfCourse() {
        // let img1 = new Image();
        // img1.src = "assets/images/golfball.png";
        
        let club = new Image();
        club.src = "assets/images/golfclub.png";
        let hole = new Image();
        hole.src = "assets/images/hole.png";
        // this.ctx.drawImage(holeImg, 250, 150);
        let golfcourse = new GolfCourse(this.ctx, club, hole, this.courseDims, this.holePos, this.range, this.bounds, this.zones);
        this.golfcourse = golfcourse;
    }

    shotHandler(e) {
        if ((this.ballStatus < 1) && this.golfcourse.clicked) {
            this.ballStatus += 1;
        }
        else if (this.ballStatus >= 1 && this.golfcourse.clicked) {
            this.golfcourse.ballisMoving = true;
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.moveBall();
        }
    }
    
    moveBall() {                
        this.golfcourse.move();
        setTimeout(()=>{this.golfcourse.ballisMoving = false;
        }, 1500);
    }

    won() {
        return (
            (
                (Math.abs(this.golfcourse.pos[0]-this.golfcourse.holePos[0]) >= 0) &&
                (Math.abs(this.golfcourse.pos[0] - this.golfcourse.holePos[0]) <= 8)
            ) &&
            (
                (Math.abs(this.golfcourse.pos[1] - this.golfcourse.holePos[1]) >= 0) &&
                (Math.abs(this.golfcourse.pos[1] - this.golfcourse.holePos[1]) <= 8)
            )
        )
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.fillStyle = "rgb(126, 200, 80)";
        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // let img = new Image();
        // img.src = "assets/images/grass.png"
        // this.ctx.drawImage(img, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.ctx.canvas.width, this.ctx.canvas.height)
        // Add objects to canvas
        // let holeImg = new Image();
        // holeImg.src = "assets/images/hole.png";
        // this.ctx.drawImage(holeImg, 250, 150);
        this.golfcourse.draw();
        // let clubImg = new Image();
        // clubImg.src = "assets/images/golfclub.png";
        // this.ctx.drawImage(clubImg, 224, 200);
    }

}

export default Game;