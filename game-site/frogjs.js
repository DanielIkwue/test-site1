(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 600,
    player = {
        x: width / 2,
        y: height - 15,
        width: 30,
        height: 30,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.211;

var boxes = [];


boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});
// level boxes bru
boxes.push({
    x: 363,
    y: 553,
    width: 80,
    height: 80
});

boxes.push({
    x: 332,
    y: 522,
    width: 80,
    height: 80
});

boxes.push({
    x: 10,
    y: 482,
    width: 300,
    height: 40
});

boxes.push({
    x: 236,
    y: 379,
    width: 300,
    height: 40
});

boxes.push({
    x: 10,
    y: 428,
    width: 95,
    height: 30
});

boxes.push({
    x: 468,
    y: 361,
    width: 90,
    height: 40
});

boxes.push({
    x: 700,
    y: 308,
    width: 96,
    height: 40
});

boxes.push({
    x: 907,
    y: 299,
    width: 90,
    height: 40
});


boxes.push({
    x: 702,
    y: 220,
    width: 90,
    height: 40
});

boxes.push({
    x: 349,
    y: 184,
    width: 220,
    height: 40
});

boxes.push({
    x: 10,
    y: 109,
    width: 200,
    height: 40
});

boxes.push({
    x: 402,
    y: 60,
    width: 190,
    height: 40
});


canvas.width = width;
canvas.height = height;

function update() {

    if (keys[38] || keys[32]) {
        
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
 
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
  
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {

    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
    
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
     
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});