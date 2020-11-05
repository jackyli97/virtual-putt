import Mouse from './mouse'

class GolfClub {
    constructor(ctx , img) {
        this.ctx = ctx;
    }

    update() {
        GolfClub.position = Mouse.position
    }

    draw() {
        this.ctx.drawImage(
            this.img2,
            this.clubPos[0], this.clubPos[1],
        )
        for (let i = 0; i < 6; i++) {
            this.ctx.beginPath()
            this.ctx.arc(this.clubPos[0] - (i * 5), this.clubPos[1] - (i * 5), 2, 0, Math.PI * 2, false)
            this.ctx.fillStyle = "rgb(226, 255, 59)"
            this.ctx.fill()
            this.ctx.closePath()
    }}
}

export default GolfClub;