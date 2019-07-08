// returns a random number between min (included) and max (excluded)
// Integers
function myRandomInt(min, max) {
    return Math.floor(myRandomFloat(min, max));
}

function myRandomFloat(min, max) {
    return Math.random() * max + min;
}

function myRandomBool(){
    return myRandomInt(1, 11)>5? true : false;
}
const grimGators = ['#53767d', '#64888b', '#749b98', '#84aea5', '#95c0b3'];
const monteCarlo = ['#f9d7a4', '#f6cecc', '#ecc1d7', '#ccc6ee', '#b0cdf4'];
const ameliorate = ['#abdbee', '#c1badf', '#d69fc9', '#e28a9d', '#f47783'];
let colors = ['#2C3635', '#974110', '#5F7044', '#D29055', '#BA9BA0', '#A19A90', '#CBB5A7', '#B8D3C0'];
function myRandomColor(){
    let colorPool=colors.concat(grimGators, monteCarlo, ameliorate);
    return colorPool[myRandomInt(0,colorPool.length-1)];
}

// return true if the two given object is in range
function inRange(thing1, thing2, range){
    return (Math.abs(thing1.x-thing2.x)<range) && (Math.abs(thing1.y-thing2.y)<range);
}

// function myRandomColor(bool){
//     return `rgb(${myRandomInt(0,255)},${myRandomInt(0,255)},${myRandomInt(0,255)})`;
// }

class Circle {
    constructor(x, y, r, dx, dy, ctx, isFilled, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dr = r;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.ctx = ctx;
        this.isFilled = isFilled;
    }
    update(magnet, control=1){
        if (Math.abs(control) == 1){
            if (magnet!=null && inRange(magnet, {x:this.x, y:this.y}, 50)){
                if (this.r <= 50)
                    this.r+=myRandomFloat(0, 1);
                if (this.x<magnet.x*myRandomFloat(0, 1))
                    this.x+=1;
                else this.x-=1;
                if (this.y<magnet.y*myRandomFloat(0, 1))
                    this.y+=1;
                else this.y-=1;
            } else {
                if (this.r >= Math.abs(this.dr))
                    this.r-=myRandomFloat(0, 1);
                if (this.x+this.r>innerWidth||this.x-this.r<0)
                    this.dx = -this.dx;
                if (this.y+this.r>innerHeight||this.y-this.r<0)
                    this.dy = -this.dy;
            }
        }
        else{
            if (magnet!=null && inRange(magnet, {x:this.x, y:this.y}, 50)){
                if (this.r > 40 || this.r <= 3)
                    this.dr = -this.dr;
                this.r += (this.dr<0)?-1:1*myRandomFloat(0, 1);
                // console.log(this.r);
                if (this.r < Math.abs(this.dr)) 
                    this.r = Math.abs(this.dr);
                if (this.x<magnet.x*myRandomFloat(.7, 1.2))
                    this.x+=1;
                else this.x-=1;
                if (this.y<magnet.y*myRandomFloat(.7, 1.2))
                    this.y+=1;
                else this.y-=1;
            }
            if (this.x+this.r>innerWidth||this.x-this.r<0)
                this.dx = -this.dx;
            if (this.y+this.r>innerHeight||this.y-this.r<0)
                this.dy = -this.dy;
            
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

    draw(){
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
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI*2);
        this.ctx.fill();
    }
}