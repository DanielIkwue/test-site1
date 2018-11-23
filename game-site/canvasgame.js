// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Utility Functions 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}



// Objects
function Players(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = () => {
        this.draw()
    }

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
}

// objects
let enemy;
let Player;
let enemy2;
let enemy3;
let enemy4;
let enemy6;
let enemy5;
let enemy7;
let enemy8;
let enemy9;
let enemy10;
let enemy11;
let enemy12;
function init() {
 

    Player  =  new Players(100,100,20, 'green');
    enemy  = new Players(300,259,50, 'black');
    enemy2 = new Players(500,50,30, 'yellow');
    enemy3 = new Players(883,290,30, 'red');
    enemy4 = new Players(30,100,40, 'blue');
    enemy5 = new Players(456,500,30, 'grey');
    enemy6 = new Players(800,350,60, 'purple');
    enemy7 = new Players(599,200,40, 'bage');
    enemy8 = new Players(900,90,70, 'lightgreen');
    enemy10 = new Players(1200,20,60, 'lightblue');
    enemy9 = new Players(1000,400,40, 'orange');
    enemy11 = new Players(600,425,50, 'darkred');
    enemy12 = new Players(700,250,40, 'lightyellow');


}



// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    enemy.update();
    enemy2.update();
    enemy3.update();
    enemy4.update();
    Player.update();
    enemy5.update();
    enemy6.update();
    enemy8.update();
    enemy7.update();
    enemy9.update();
    enemy10.update();
    enemy11.update();
    enemy12.update();
    Player.x = mouse.x;
    Player.y = mouse.y;
    Player.update();
 
    if (distance(enemy.x, enemy.y,Player.x,Player.y) < enemy.radius + Player.radius) {

     enemy = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }
    
     if (distance(enemy2.x, enemy2.y,Player.x,Player.y) < enemy2.radius + Player.radius) {

     enemy2 = new Players(1300,600,0, 'white');
     c.fillText("score = 200" ,10,10);
    Player.radius ++;
    }

     if (distance(enemy3.x, enemy3.y,Player.x,Player.y) < enemy3.radius + Player.radius) {

     enemy3 = new Players(1300,600,0, 'white');
     c.fillText("score = 300",10,10);
     Player.radius ++;
    }

         if (distance(enemy4.x, enemy4.y,Player.x,Player.y) < enemy4.radius + Player.radius) {

     enemy4 = new Players(1300,600,0, 'white');
     c.fillText("score = 400",10,10);
     Player.radius ++;
    }
        
        if (distance(enemy5.x, enemy5.y,Player.x,Player.y) < enemy5.radius + Player.radius) {

     enemy5 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

        if (distance(enemy6.x, enemy6.y,Player.x,Player.y) < enemy6.radius + Player.radius) {

     enemy6 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

        if (distance(enemy7.x, enemy7.y,Player.x,Player.y) < enemy7.radius + Player.radius) {

     enemy7 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

        if (distance(enemy8.x, enemy8.y,Player.x,Player.y) < enemy8.radius + Player.radius) {

     enemy8 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

            if (distance(enemy10.x, enemy10.y,Player.x,Player.y) < enemy10.radius + Player.radius) {

     enemy10 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

        if (distance(enemy9.x, enemy9.y,Player.x,Player.y) < enemy9.radius + Player.radius) {

     enemy9 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

            if (distance(enemy11.x, enemy11.y,Player.x,Player.y) < enemy11.radius + Player.radius) {

     enemy11 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }

        if (distance(enemy12.x, enemy12.y,Player.x,Player.y) < enemy12.radius + Player.radius) {

     enemy12 = new Players(1300,600,0, 'white'); 
     c.fillText("score = 100" ,10,10); 
     Player.radius ++;

    }


}

init()
animate()
