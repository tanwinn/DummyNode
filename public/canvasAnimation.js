const canvas = document.querySelector('#main-canvas');

const canvas2animate = document.querySelector('#animation-canvas');
const canvasContainer = document.querySelector('div.canvas');
const c = canvas.getContext('2d');
const ctx = canvas2animate.getContext('2d');
sizing();

function sizing(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas2animate.height = canvas.height;
    canvas2animate.width = canvas.width;
    canvasContainer.style.height = `${canvas.height}px`;
}

var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', (data) => {
    mouse.x = data.x,
    mouse.y = data.y;
});

window.addEventListener('mousedown', (data) => {
    console.log(data.x, data.y);
});

window.addEventListener('resize', () => {
    sizing();
});

let arrCircle = new Array(), count=2500;
let rangeSpeed = .9;
function circleManager(arrCircle, count){
    
    for (let i=0; i<count; i++){
        let r = myRandomInt(1, 7),
        x = myRandomFloat(r, innerWidth-r*2),
        y = myRandomFloat(r, innerHeight-r*2),
        dx = myRandomFloat(-rangeSpeed, rangeSpeed),
        dy = myRandomFloat(-rangeSpeed, rangeSpeed),
        isFilled = true,
        color= myRandomColor(),
        c = new Circle(x, y, r, dx, dy, ctx, isFilled, color);
        arrCircle.push(c);
    }
}

var frame = 0;
var animationControl = 1;
var boolControl = true;
var isModified = false;
function animateCircleWithSpeed(){    
    requestAnimationFrame(animateCircleWithSpeed);
    /*if (frame==320){
        if (animationControl != 2)
            animationControl = 2;
        else animationControl = 1;
        if (myRandomBool() && count<=4000) 
            count += myRandomInt(50, 1000);
        else if (count>=2000)
            count -= myRandomInt(50, 1000);
        isModified = true;
        console.log(count);
    }
    else if (frame==500)
        frame = 0;
    if (isModified){
        controlSystem();
        isModified = false;
    }*/
    if (frame % 320 == 0){
        if (animationControl!=2)
            animationControl = 2;
        else animationControl = 1;
    }

    if (frame%50 == 0){
        controlSystem();
        if (boolControl && count<=2000) 
            count += myRandomInt(0, 10);
        else if (count >= 500)
            count -= myRandomInt(0, 10);
    }
    if (frame%400 == 0) boolControl = myRandomBool();
    
    ctx.clearRect(0,0,innerWidth,innerHeight);
    if (frame%arrCircle.length>100)
        arrCircle[(frame%arrCircle.length)].isFilled = !arrCircle[(frame%arrCircle.length)].isFilled;
    
    for (let i=0; i<arrCircle.length; i++){
        // if (frame == 450)
        //     arrCircle[i].isFilled = !arrCircle[i].isFilled;
        arrCircle[i].update(mouse, animationControl);
    }
    frame++;
}

function controlSystem(){
    if (count > arrCircle.length)
        circleManager(arrCircle, count-arrCircle.length)
    else if (count < arrCircle.length)
        arrCircle.length = count;

}

circleManager(arrCircle, count);
requestAnimationFrame(animateCircleWithSpeed);