import Vector from './vectors'

class GolfCourse {
    constructor(ctx, img1, img2) {
        // if (!position) {
        //     this.position = new Vector();
        // }
        // else{
        //     this.position = position
        // }
        // if (!origin) {
        //     this.origin = new Vector();
        // }
        // else{
        //     this.origin = origin;
        // }

        this.ctx = ctx;
        this.canvas = document.getElementById("game-canvas");
        this.vel = {x: 0, y:0};
        this.initialLoad = true;
        this.clicked = false;
        this.ballisMoving = false;
        this.gameCanvas = document.getElementById("game-canvas")
        this.range = {xmin: 300, ymin: 400, xmax: 380, ymax: 440}
        this.pos = [(this.range.xmin + this.range.xmax)/2, (this.range.ymin + this.range.ymax)/2];
        this.clubPos = [this.pos[0], this.pos[1]];
        this.trajPos = [this.pos[0], this.pos[1]];
        let a = (this.pos[0] - this.clubPos[0]);
        let b = (this.pos[1] - this.clubPos[1]);
        this.c = Math.sqrt(a * a + b * b);
        let angle = Math.atan2(b, a)
        this.traj = {x:Math.cos(angle) * this.c, y:Math.sin(angle) * this.c}
        // var a = (this.clubPos[0] - this.pos[0]);
        // var b = (this.clubPos[1] - this.pos[1]);
        // this.trajDist = Math.sqrt(a * a + b * b);
        // this.xDist = (this.pos[0] - this.clubPos[0])
        // this.yDist = (this.pos[1] - this.clubPos[1])
        this.img1 = img1;
        this.img2 = img2;
    }
    
    move() {
        this.pos[0] += 2 * this.traj.x;
        this.pos[1] += 2 * this.traj.y;
        // this.frameRate = 5;
        
        // if (!this.rightKey && !this.leftKey) this.vel[0] = 0;

        // if (this.pos[0] + this.radius <= this.ctx.canvas.width) {
        //     if (this.rightKey) {
        //         this.pos[0] += constants.SPEED;
        //         this.vel[0] = constants.SPEED - 1;
        //     }
        // }

        // if (this.leftKey) {
        //     this.pos[0] -= constants.SPEED;
        //     this.vel[0] = -(constants.SPEED - 1);
        // }

        // if (!this.upKey && !this.downKey) this.vel[1] = 0;

        // if (this.pos[1] + this.radius <= this.ctx.canvas.height) {
        //     if (this.downKey) {
        //         this.pos[1] += constants.SPEED;
        //         this.vel[1] = constants.SPEED - 1;
        //     }
        // }
        
        // if (this.pos[1] - this.radius >= 0) {
        //     if (this.upKey) {
        //         this.pos[1] -= constants.SPEED;
        //         this.vel[1] = -(constants.SPEED - 1);
        //     }
        // }
    }

    draw() {
        // Testing
        // this.ctx.beginPath();
        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        // this.ctx.strokeStyle = "black";
        // this.ctx.stroke();
        // this.ctx.closePath();
        // End Testing


        // if (this.vel[0] === 0 && this.vel[1] === 0) {
        //     this.frameCount = 0;
        //     this.currentLoop = 0;
        //     this.facingRight ? this.currentRow = 1 : this.currentRow = 0;
        // }

        // if (this.vel[0] < 0) {
        //     this.currentRow = 0;
        // } else if (this.vel[0] > 0) {
        //     this.currentRow = 1;
        // }

        // this.frameCount++;
        // this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius, this.pos[1] - this.radius);
        // if (this.frameCount < this.frameRate) {
        //     return // don't update animate unless specific # of frames have past
        // }

        // this.frameCount = 0;
        // this.currentLoop++;
        // if (this.currentLoop === this.numCols) {
        //     this.currentLoop = 0;
        // }
        this.ctx.fillStyle = "rgb(66, 245, 81)";
        this.ctx.fillRect(200, 100, 200, 400)
        this.ctx.strokeStyle = "rgb(221, 245, 66)";
        this.ctx.lineWidth = 10;
        this.ctx.strokeRect(200,100, 200,400)
        this.ctx.fillStyle = "rgb(31, 87, 36)";
        this.ctx.fillRect(300, 400, 80, 40);
        this.ctx.drawImage(
        this.img1,
        this.pos[0], this.pos[1],
        ) 
        if (this.clicked && !this.ballisMoving) {
            // this.ctx.save();
            // this.ctx.translate(this.position.x, this.position.y)
            // this.ctx.restore()
            this.ctx.drawImage(
                this.img2,
                this.clubPos[0], this.clubPos[1],
            )
            
                        // this.ctx.beginPath();
                        // this.ctx.moveTo(this.trajPos[0], this.trajPos[1]);
                        // this.ctx.lineTo(this.trajPos[0] + (this.trajDist * xoperand), this.trajPos[1] + (this.trajDist * yoperand));
                        // this.ctx.strokeStyle = "rgb(255, 59, 206)";
                        // this.ctx.lineWidth = 3;
                        // this.ctx.stroke();
            // let xoperand = (this.pos[0] - this.clubPos[0]) > 0 ? 1 : (this.pos[0] === this.clubPos[0]) ? 0 : -1;
            // let yoperand = (this.pos[1] - this.clubPos[1]) > 0 ? 1 : (this.pos[1] === this.clubPos[1]) ? 0 : -1;

            for (let i=0; i<6; i++) {
                this.ctx.beginPath()
                this.ctx.arc((this.pos[0]+2)+(i*((this.traj.x)/6)), (this.pos[1]+1.5)+(i*((this.traj.y)/6)), 2, 0, Math.PI * 2, false)
                this.ctx.fillStyle = "rgb(226, 255, 59)"
                this.ctx.fill()
                this.ctx.closePath()
            }
        }
    }

    // drawFrame(frameX, frameY, canvasX, canvasY) {
    //     this.ctx.drawImage(
    //       this.img,
        //   frameX * this.frameWidth,
        //   frameY * this.frameHeight,
        //   this.frameWidth,
        //   this.frameHeight,
        //   canvasX,
        //   canvasY,
        //   this.frameWidth * this.scale,
        //   this.frameHeight * this.scale
    //     );
    // }

    windowToCanvas(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();

        return {
            x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }
    
    mouseClickHandler(e) {
        if (this.initialLoad) {
            this.initialLoad = false;
        }
        else if (!this.clicked) {
            this.clicked = true;
            this.gameCanvas.classList.toggle('place-ball');
            this.gameCanvas.classList.toggle('ball-placed');
            console.log('clicked');
        }
    }

    mouseMoveHandler(e) {
        
        let loc = this.windowToCanvas(this.canvas, e.clientX, e.clientY);

        if (this.clicked) {
            this.pos[0] = this.pos[0]
            this.pos[1] = this.pos[1]
        }
        else{
            if ((loc.x >= this.range.xmin && loc.x <= this.range.xmax) 
            && (loc.y >= this.range.ymin && loc.y <= this.range.ymax)
            ) {
                this.pos[0] = loc.x
                this.pos[1] = loc.y
            }
        }

        this.clubPos[0] = loc.x;
        this.clubPos[1] = loc.y;

        let a = (this.pos[0] - loc.x);
        let b = (this.pos[1] - loc.y);
        this.c = Math.sqrt(a * a + b * b);
        let angle = Math.atan2(b, a)
        // debugger
        this.traj = {
            x: Math.cos(angle) * this.c,
            y: Math.sin(angle) * this.c
        }
    }
    // keyDownHandler(e) {
    //     if (e.keyCode === 39) {
    //         this.rightKey = true;
    //         this.facingRight = true;
    //     } else if (e.keyCode === 37) {
    //         this.leftKey = true;
    //         this.facingRight = false;
    //     }

    //     if (e.keyCode === 40) {
    //         this.downKey = true;
    //     } else if (e.keyCode === 38) {
    //         this.upKey = true;
    //     }
    // }


    // keyUpHandler(e) {
    //     if (e.keyCode === 39) {
    //         this.rightKey = false;
    //     } else if (e.keyCode === 37) {
    //         this.leftKey = false;
    //     }

    //     if (e.keyCode === 40) {
    //         this.downKey = false;
    //     } else if (e.keyCode === 38) {
    //         this.upKey = false;
    //     }
    // }
}

export default GolfCourse;