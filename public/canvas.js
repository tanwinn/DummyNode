console.log('Another fucking hello word from the introvert pardise of mf losers');

/* ------- Canvas Object -------- */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(canvas);

/* ------- Context Object -------- */
const c = canvas.getContext('2d');
console.log(c);

let range = myRandomInt(20, 70);

// Functions
// Return a random number between 0 (inclusive) and 1 (exclusive):
function RectDemo(){
    for (let i = 0; i < range; i++){
        drawRandomRect();
    }
}

function drawRandomRect(){
    var prop = new Array(4);
    prop[1] = myRandomInt(0, canvas.width);
    prop[2] = myRandomInt(0, canvas.height/3);
    prop[3] = myRandomFloat(0,100);
    prop[4] = myRandomFloat(9,170);
    c.fillStyle = myRandomColor();
    c.fillRect(prop[1], prop[2], prop[3], prop[4]);
}

// Line
c.strokeStyle = myRandomColor();
c.beginPath();
let x = myRandomInt(0, canvas.width-200), y = canvas.height/2+100;
c.moveTo(x, y);
c.lineTo(x+200, y);
c.stroke();

c.beginPath();
c.moveTo(x+200, y);
c.strokeStyle = myRandomColor();
c.lineTo(x+300, y+200);
c.stroke();

// Arc \ Circle
// A Circle
x = 500, y = canvas.height/2+100; 
c.arc(x, y, 30, 0, Math.PI * 2);

c.fillStyle = c.strokeStyle;
c.fillRect(x-25, y-10, 50, 14);
c.fillStyle = 'white';
c.fillText('radius = 30', x-25, y, 100);
c.stroke();

// Circles
range =  myRandomInt(50, 140);
function CircleDemo(){
    for (let i = 0; i < range; i++){
        drawRandomCircle();
    }
}

function drawRandomCircle(){
    c.beginPath();
    c.strokeStyle = myRandomColor();
    x = myRandomInt(0, canvas.width), y = myRandomInt(canvas.height/2, canvas.height/2+200);
    r = myRandomInt(50, 100);
    c.arc(x, y, r, 0, Math.PI * 2);
    c.stroke();

    // info sign
    c.fillStyle = c.strokeStyle;
    //c.fillRect(x-r/2, y, r);
    c.fillText(`radius = ${r}`, x-r/2, y, r);
}

let frame = 0;
function animate(){
    if (frame>130) {
        frame++;
        requestAnimationFrame(animate);
        if (frame>250){
            c.clearRect(0, 0, canvas.width, canvas.height);
            frame = 0;
        }
    }
    
    else{
        // console.log(frame++);
        drawRandomCircle();
        drawRandomRect();
        frame++;
        requestAnimationFrame(animate);
    }
}

animate();