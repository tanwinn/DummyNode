const canvas = document.querySelector('#main-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2animate = document.querySelector('#animation-canvas');
canvas2animate.height = canvas.height;
canvas2animate.width = canvas.width;

const canvasContainer = document.querySelector('div.canvas');
canvasContainer.style.height = `${canvas.height}px`;

const c = canvas.getContext('2d');
const ctx = canvas2animate.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', (data) => {
    mouse.x = data.x,
    mouse.y = data.y;
    // console.log(mouse);
});

let arrCircle = new Array(), count=2000;
let rangeR = .5;
function circleManager(arrCircle, count){
    if (count<arrCircle.length)
        arrCircle.length = count;
    for (let i=0; i<count; i++){
        let r = myRandomInt(1, 7),
        x = myRandomFloat(r, innerWidth-r*2),
        y = myRandomFloat(r, innerHeight-r*2),
        dx = myRandomFloat(-rangeR, rangeR),
        dy = myRandomFloat(-rangeR, rangeR),
        isFilled = true,
        color= myRandomColor(),
        c = new Circle(x, y, r, dx, dy, ctx, isFilled, color);
        arrCircle.push(c);
    }
}

var frame = 0;
var control = 1;
var isModified = false;
function animateCircleWithSpeed(){    
    requestAnimationFrame(animateCircleWithSpeed);
    if (frame==320){
        frame = 0;
        if (control != 2)
            control = 2;
        else control = 1;
        if (myRandomBool() && count<=4000) 
            count += 1000;
        else 
            count -= 1000;
        isModified = true;
        console.log(count);
    }
    if (isModified){
        controlSystem();
        isModified = false;
    }
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (let i=0; i<arrCircle.length; i++){
        arrCircle[i].update(mouse, control);
    }
    frame++;
}

function controlSystem(){
    if (count!=arrCircle.length)
        circleManager(arrCircle, Math.abs(count-arrCircle.length));
}



circleManager(arrCircle, count);
requestAnimationFrame(animateCircleWithSpeed);