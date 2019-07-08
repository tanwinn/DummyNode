class Circle {
    constructor(x, y, r, dx, dy, ctx, isFilled, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.ctx = ctx;
        this.isFilled = isFilled;
    }

    update(){
        if (this.x+this.r>window.innerWidth||this.x-this.r<0)
            this.dx = -this.dx;
        this.x += this.dx*myRandomFloat(0,1.5);

        if (this.y+this.r>window.innerWidth||this.y-this.r<0)
            this.dy = -this.dy;
        this.y += this.dy*myRandomFloat(0,1.5);

        if (this.isFilled)
            this.drawFilledAt(this.x, this.y, this.r, this.color)
        else
            this.drawStrokeAt(this.x, this.y, this.r, this.color)
    }

    drawStrokeAt(x, y, r, color) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI*2);
        this.ctx.stroke();
    }

    drawFilledAt(x, y, r, color) {
        this.ctx.fillStyle = color;
        this.drawStrokeAt(this.ctx, x, y, r, color);
        this.ctx.fill()
    }
}

module.exports = Circle;