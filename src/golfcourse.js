import Vector from './vectors'

class GolfCourse {
    constructor(ctx, club, hole, courseDims, holePos, range, bounds, zones) {
        this.courseDims = courseDims;
        this.holePos = holePos;
        this.ctx = ctx;
        this.canvas = document.getElementById("game-canvas");
        this.vel = {x: 0, y:0};
        this.initialLoad = true;
        this.clicked = false;
        this.ballisMoving = false;
        this.gameCanvas = document.getElementById("game-canvas");
        this.range = range;
        this.bounds = bounds;
        this.zones = zones;
        // this.intercepts = intercepts;
        this.pos = [(this.range.xmin + this.range.xmax)/2, (this.range.ymin + this.range.ymax)/2];
        this.clubPos = [this.pos[0], this.pos[1]];
        this.trajPos = [this.pos[0], this.pos[1]];
        this.dir = {x:1,y:1};
        const a = (this.pos[0] - this.clubPos[0]);
        const b = (this.pos[1] - this.clubPos[1]);
        this.angle = Math.atan2(b, a);
        this.c = Math.sqrt(a * a + b * b);
        this.step = 0;
        this.traj = {x:Math.cos(this.angle) * this.c, y:Math.sin(this.angle) * this.c}
        // var a = (this.clubPos[0] - this.pos[0]);
        // var b = (this.clubPos[1] - this.pos[1]);
        // this.trajDist = Math.sqrt(a * a + b * b);
        // this.xDist = (this.pos[0] - this.clubPos[0])
        // this.yDist = (this.pos[1] - this.clubPos[1])
        // this.img1 = img1;
        this.club = club;
        this.hole = hole;
    }

    holeInCheck(startPos, endPos) {
        // distance and angle between startpos and endpos
        let a1 = (startPos[0] - endPos[0]);
        let b1 = (startPos[1] - endPos[1]);
        let c1 = Math.sqrt(a1 * a1 + b1 * b1);
        let angle1 = Math.atan2(b1, a1);

        // distance and angle between startpos and hole
        let a2 = (startPos[0] - this.holePos[0]);
        let b2 = (startPos[1] - this.holePos[1]);
        let c2 = Math.sqrt(a2 * a2 + b2 * b2);
        let angle2 = Math.atan2(b2, a2);
        // ((this.traj.x * mag.x < (Math.cos(angle2) * c2))) && (this.traj.y * mag.y < (Math.sin(angle2) * c2))
        if ((Math.abs(angle1-angle2)<=0.20) && (c2<=c1) && ((c2)<200)) {
            return true;
        }
        return false;
    }

    outOfBounds(start,end){
        // if midpoint in grass boundaries,
        // results in illegal path and returns true so ball will bounce instead
        // shift the y coordinate for that y-int boundaries are y-axis
        // debugger
        let mid={};
        let x = (start[0] + end[0]) * 0.50;
        let y = (start[1] + end[1]) * 0.50;

        for (let i = 0; i < this.zones.length; i++) {
            if (this.zones[i](mid.x, mid.y)) {
                return true;
            }
        }
        return false;
    }

    changePos(trajx, trajy,mag) {
        return [this.pos[0] + (this.dir.x * trajx) * mag, this.pos[1] + (this.dir.y * trajy) * mag]
    }
    
    move() {      
        // let inBounds=true;
        let angle = this.clubPos[1] < this.pos[1] ? 
        Math.acos(this.traj.x / this.c) : -1 * Math.acos(this.traj.x / this.c)
        let trajx = Math.cos(angle);
        let trajy = Math.sin(angle);
        let mag = 5;
        let newPos = this.changePos(trajx, trajy, mag);
        // let newPos = [this.pos[0]+(this.dir.x*trajx)*mag, this.pos[1]+(this.dir.y*trajy)*mag]
        // debugger
        //magnitude will be mutliplied by traj to displace ball
        //if ball out of bounds, will decrease by 0.1 till in bounds
        for (let i=0; i<this.bounds.length; i++) {
            if (this.bounds[i](newPos[0],newPos[1]))
            //  ||
            // this.outOfBounds([this.pos[0], this.pos[1]],
            // [this.pos[0] + mag * dir.x * this.traj.x, this.pos[1] + mag * dir.y * this.traj.y])) 
            {
                // inBounds=false;
                // while ((this.bounds[i](newPos) && mag>0 ))
                // ||
                // this.outOfBounds([this.pos[0], this.pos[1]],
                // [this.pos[0] + mag * dir.x * this.traj.x, this.pos[1] + mag * dir.y * this.traj.y]))
                // && mag>0) 
                // {
                //     mag -= 0.1;
                // }
                // this stops ball right at point where it hits wall
                mag = 1;
                this.step += (1*mag);
                newPos = this.changePos(trajx, trajy, mag)
                this.pos = newPos
                // this.pos[0] += mag * dir.x * trajx;
                // this.pos[1] += mag * dir.y * trajy;
                // need to determine which direction ball will deflect in
                //if deflection in one direction leads to out of bounds, will deflect in the other
                if (this.bounds[i](this.pos[0] + (-1 * trajx), this.pos[1] + (trajy))) {
                // ||
                // this.outOfBounds([this.pos[0], this.pos[1]],
                // [this.pos[0] + mag * -1 * this.traj.x, this.pos[1] + mag * this.traj.y])) 
                // {
                    this.dir = { x: 1, y: -1 };
                    // setTimeout(() => this.move(), 100) 
                    // this.move()
                    // this.move(mag, {x: 1, y: -1})
                }
                else if (this.bounds[i](this.pos[0] + (trajx), this.pos[1] + (-1 * trajy))) {
                // ||
                this.dir = { x: -1, y: 1 }
                // this.outOfBounds([this.pos[0], this.pos[1]],
                // [this.pos[0] + mag * this.traj.x, this.pos[1] + mag * -1 * this.traj.y])) {
                    // setTimeout(() => this.move(), 100)
                    // this.move()
                    // this.move(mag, { x: -1, y: 1 })
                }
                break;
            }
        }
  
        newPos = this.changePos(trajx, trajy, mag)

        //check if ball is in hole
        if (newPos[0] === this.holePos) {
            this.step+=(1*mag)
            this.pos = this.holePos
        }
        else{
            this.step += (1*mag)
            this.pos = newPos
        }
        // }
        if (this.step < this.c * 3) {
            window.requestAnimationFrame(this.move.bind(this));
        }
        else if (this.step >= this.c * 3) {
            this.step = 0;
            this.dir = {x:1, y:1};
        }   
    }   

    draw() {
        if (this.courseDims[7]) {
            //outer yellow border
            this.ctx.beginPath();
            this.ctx.moveTo(this.courseDims[1][0], this.courseDims[1][1]);
            this.ctx.lineTo(this.courseDims[2][0], this.courseDims[2][1]);
            this.ctx.lineTo(this.courseDims[3][0], this.courseDims[3][1]);
            this.ctx.lineTo(this.courseDims[4][0], this.courseDims[4][1]);
            this.ctx.lineTo(this.courseDims[5][0], this.courseDims[5][1]);
            this.ctx.lineTo(this.courseDims[6][0], this.courseDims[6][1]);
            this.ctx.lineTo(this.courseDims[7][0], this.courseDims[7][1]);
            this.ctx.lineTo(this.courseDims[8][0], this.courseDims[8][1]);
            this.ctx.lineTo(this.courseDims[9][0], this.courseDims[9][1]);
            this.ctx.lineTo(this.courseDims[10][0], this.courseDims[10][1]);
            this.ctx.lineTo(this.courseDims[11][0], this.courseDims[11][1]);
            this.ctx.lineTo(this.courseDims[12][0], this.courseDims[12][1]);
            this.ctx.fillStyle = "rgb(221, 245, 66)";
            this.ctx.fill();
            this.ctx.closePath();

            //grass
            this.ctx.beginPath();
            this.ctx.moveTo(this.courseDims[1][0] + 5, this.courseDims[1][1] + 5);
            this.ctx.lineTo(this.courseDims[2][0] + 5, this.courseDims[2][1] - 5);
            this.ctx.lineTo(this.courseDims[3][0] + 5, this.courseDims[3][1] - 5);
            this.ctx.lineTo(this.courseDims[4][0] + 5, this.courseDims[4][1] + 5);
            this.ctx.lineTo(this.courseDims[5][0] + 5, this.courseDims[5][1] + 5);
            this.ctx.lineTo(this.courseDims[6][0] + 5, this.courseDims[6][1] - 5);
            this.ctx.lineTo(this.courseDims[7][0] - 5, this.courseDims[7][1] - 5);
            this.ctx.lineTo(this.courseDims[8][0] - 5, this.courseDims[8][1] + 5);
            this.ctx.lineTo(this.courseDims[9][0] - 5, this.courseDims[9][1] + 5);
            this.ctx.lineTo(this.courseDims[10][0] - 5, this.courseDims[10][1] - 5);
            this.ctx.lineTo(this.courseDims[11][0] - 5, this.courseDims[11][1] - 5);
            this.ctx.lineTo(this.courseDims[12][0] - 5, this.courseDims[12][1] + 5);
            this.ctx.fillStyle = "rgb(66, 245, 81)";
            this.ctx.fill();
            this.ctx.closePath();

            // this.ctx.drawImage(
            //     this.hole,
            //     this.holePos[0], this.holePos[1],
            // ) 

            //golf hole
            this.ctx.beginPath()
            this.ctx.arc(this.holePos[0], this.holePos[1], 8, 0, Math.PI * 2, true)
            this.ctx.fillStyle = "rgb(18, 17, 17)"
            this.ctx.fill()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.arc(this.holePos[0], this.holePos[1], 6, 0, Math.PI, true)
            this.ctx.fillStyle = "rgb(69, 68, 68)"
            this.ctx.fill()
            this.ctx.closePath()
        }

        //green mat
        this.ctx.fillStyle = "rgb(31, 87, 36)";
        this.ctx.fillRect(this.range.xmin, this.range.ymin, this.range.xmax-this.range.xmin, this.range.ymax-this.range.ymin);
        
        //draw ball
        this.ctx.beginPath()
        this.ctx.arc(this.pos[0], this.pos[1], 5, 0, Math.PI * 2, false)
        this.ctx.fillStyle = "rgb(255, 255, 255)"
        this.ctx.fill()
        this.ctx.closePath()

        //render club and aim if ball is placed
        if (this.clicked && !this.ballisMoving) {
            this.ctx.drawImage(
                this.club,
                this.clubPos[0], this.clubPos[1],
            )

            for (let i=0; i<6; i++) {
                this.ctx.beginPath()
                this.ctx.arc((this.pos[0]+2)+(i*((this.traj.x)/6)), (this.pos[1]+1.5)+(i*((this.traj.y)/6)), 2, 0, Math.PI * 2, false)
                this.ctx.fillStyle = "rgb(226, 255, 59)"
                this.ctx.fill()
                this.ctx.closePath()
            }
        }
    }
    
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
        this.traj = {
            x: Math.cos(angle) * this.c,
            y: Math.sin(angle) * this.c
        }
    }
}

export default GolfCourse;