require('../scss/starcollege.scss') //gennerate by pms , don't deletes

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60); //定义每秒执行60次动画
        };
})();

//绘制食物节
var foodOnly = new Image();
var caidaiFood = new Image();
var sclaeFood = 1;
var imgWidthFood;
var imgHeightFood;
var scaleNumFood = 1;
var rateFood = 0.01;
var flagFood = true;
var canvasFood, cxtFood, canvasWidthFood, canvasHeightFood;

function loadImg(e, callback, images) {
    var loadedImages = 0;
    var numImages = 0;
    for (var src in e) {
        numImages++;
    }
    for (var src in e) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = e[src];
    }
}
var foodImagesArraySrc = { "caidai": "../img/food/caidai.png", "foodonly": "../img/food/foodonly.png" };
var imagesArrayObj = { "caidai": null, "foodonly": null };
loadImg(foodImagesArraySrc, function() {
    imgWidthFood = imagesArrayObj["foodonly"].width;
    imgHeightFood = imagesArrayObj["foodonly"].height;
    canvasFood = document.getElementById("canvasfood");
    cxtFood = canvasFood.getContext("2d");
    canvasWidthFood = canvasFood.width;
    canvasHeightFood = canvasFood.height;
    foodRender();
}, imagesArrayObj);

function foodRender() {
    if (scaleNumFood >= 1) {
        flagFood = false;
    }

    if (scaleNumFood <= 0.9) {
        flagFood = true;
    }
    if (flagFood) {
        scaleNumFood = scaleNumFood * (1 + rateFood);
    } else {
        scaleNumFood = scaleNumFood * (1 - rateFood);
    }
    cxtFood.clearRect(0, 0, canvasWidthFood, canvasWidthFood);
    cxtFood.save();
    cxtFood.translate(112, 80);
    cxtFood.scale(scaleNumFood, scaleNumFood);
    cxtFood.drawImage(imagesArrayObj["foodonly"], -imgWidthFood / 2, -imgHeightFood / 2);
    cxtFood.restore();
    cxtFood.save();
    cxtFood.translate(0, 111);
    cxtFood.drawImage(imagesArrayObj["caidai"], 0, 0);
    cxtFood.restore();
    setTimeout(foodRender, 100);
}




//绘制1小时

//绘制一小时


var onehourCanvas,
    cxtOnehour;
var star = new Image();
var cload = new Image();
var hourCaidai = new Image();
var hourStarxy, hourCloadxy;
var canvaswidthOnehour;
var canvasheightOnehour;

var starSrcOneHour = {
    "cload": "../img/onehour/cload.png",
    "hourcaidai": "../img/onehour/hourcaidai.png",
    "star": "../img/onehour/star.png"
}
var imagesArrayOneHourObj = { "cload": null, "hourcaidai": null, "star": null };
loadImg(starSrcOneHour, function() {
    onehourCanvas = document.getElementById("onehourcanvas");
    canvaswidthOnehour = onehourCanvas.width;
    canvasheightOnehour = onehourCanvas.height;
    cxtOnehour = onehourCanvas.getContext("2d");
    hourStarxy = {
        x: 0,
        y: 10,
        rate: 0.2,
        starflag: true
    };
    hourCloadxy = {
        x: 26,
        y: 62,
        rate: 0.2,
        cloadflag: true
    };
    onehourRender();
}, imagesArrayOneHourObj);

function onehourRender() {
    if (hourStarxy.y > 20) {
        hourStarxy.starflag = true;
    }
    if (hourStarxy.y < 0) {
        hourStarxy.starflag = false;
    }
    if (hourStarxy.starflag) {
        hourStarxy.y = ((hourStarxy.y * 100) - hourStarxy.rate * 100) / 100;
    } else {
        hourStarxy.y = ((hourStarxy.y * 100) + hourStarxy.rate * 100) / 100;
    }
    if (hourCloadxy.y > 72) {
        hourCloadxy.cloadflag = true;
    }
    if (hourCloadxy.y < 52) {
        hourCloadxy.cloadflag = false;
    }
    if (hourCloadxy.cloadflag) {
        hourCloadxy.y = ((hourCloadxy.y * 100) - hourCloadxy.rate * 100) / 100;
    } else {
        hourCloadxy.y = ((hourCloadxy.y * 100) + hourCloadxy.rate * 100) / 100;
    }

    cxtOnehour.clearRect(0, 0, canvaswidthOnehour, canvasheightOnehour);
    cxtOnehour.save();
    cxtOnehour.drawImage(imagesArrayOneHourObj["star"], hourStarxy.x, hourStarxy.y);
    cxtOnehour.restore();
    cxtOnehour.save();
    cxtOnehour.drawImage(imagesArrayOneHourObj["cload"], hourCloadxy.x, hourCloadxy.y);
    cxtOnehour.restore();
    cxtOnehour.save();
    cxtOnehour.drawImage(imagesArrayOneHourObj["hourcaidai"], 0, 136);
    cxtOnehour.restore();
    setTimeout(onehourRender, 1000);
}



var canvasNight;
var cxtNight;
var starSrcOneHour = {
    "bat": "../img/party/bat.png",
    "caidaiparty": "../img/party/caidaiparty.png",
    "pumpkin": "../img/party/pumpkin.png"
}
var imagesArrayNightObj = { "bat": null, "caidaiparty": null, "pumpkin": null };

var rotatex = 0;
var rotatey = 0;
var rate = 0.01;
var flag = true;
var canvaswidthNight;
var canvasheightNight

loadImg(starSrcOneHour, function() {
    canvasNight = document.getElementById("nightcanvas");
    cxtNight = canvasNight.getContext("2d");
    canvaswidthNight = canvasNight.width;
    canvasheightNight = canvasNight.height;
    drawnight();
}, imagesArrayNightObj);


function drawnight() {
    if (rotatex >= Math.PI * 1 / 8) {
        flag = false;
    }
    if (rotatex <= -Math.PI * 1 / 8) {
        flag = true;
    }
    if (flag) {
        rotatex = rotatex + rate;
    } else {
        rotatex = rotatex - rate;
    }
    rotatey = rotatex;
    cxtNight.clearRect(0, 0, canvaswidthNight, canvasheightNight);
    cxtNight.save();
    cxtNight.beginPath();
    cxtNight.arc(65, 52, 46, 0, Math.PI * 2, true);
    cxtNight.fillStyle = "#ffe252";
    cxtNight.closePath();
    cxtNight.fill();
    cxtNight.restore();
    cxtNight.save();
    cxtNight.drawImage(imagesArrayNightObj["bat"], 59, 7);
    cxtNight.restore();
    cxtNight.save();
    cxtNight.translate(112, 89);
    cxtNight.rotate(rotatey);
    cxtNight.drawImage(imagesArrayNightObj["pumpkin"], -73, -78);
    cxtNight.restore();
    cxtNight.save();
    cxtNight.drawImage(imagesArrayNightObj["caidaiparty"], 0, 107);
    cxtNight.restore();
    setTimeout(drawnight, 100);
}



function Drawprotectstart() {

    var canvas = document.getElementById("protectcanvas");
    var cxt = canvas.getContext("2d");
    var leftwing = new Image();
    leftwing.src = "../img/protectlove/leftwing.png";
    var rightwing = new Image();
    rightwing.src = "../img/protectlove/rightwing.png";
    var protectlove = new Image();
    protectlove.src = "../img/protectlove/protectlove.png";
    var leftwingy = 21;
    var rightwingy = 45;
    var angle = 0;
    var speed = 0.1;
    this.drawprotect = function() {
        leftwingy = 26 + Math.sin(angle) * 5;
        rightwingy = 45 + Math.sin(angle) * 5;
        angle += speed;
        var canvaswidth = canvas.width;
        var canvasheight = canvas.height;
        cxt.clearRect(0, 0, canvaswidth, canvasheight);

        cxt.save();
        cxt.drawImage(leftwing, 8, leftwingy);
        cxt.restore();
        cxt.save();
        cxt.drawImage(rightwing, 164, rightwingy);
        cxt.restore();
        cxt.save();
        cxt.drawImage(protectlove, 0, 0);
        cxt.restore();
    }


};


function init() {
    // foodInit();
    // oneHourInit();
    /*
    var fooddraw = new Foodstart();
    var onehour = new Onehourstart();
    var drawnight = new Drawnightstart();
    var drawprotect = new Drawprotectstart();

     fooddraw.drawfood();
     */
    // function test() {
    //     window.setTimeout(test, 1000 / 60); //
    //     fooddraw.drawfood();
    //     onehour.drawonehour();
    //     drawnight.drawnight();
    //     drawprotect.drawprotect();
    // };
    // test();
    /*
    (function drawcanvas() {
        requestAnimFrame(drawcanvas);

        fooddraw.drawfood();
        //onehour.drawonehour();
        // drawnight.drawnight();
        // drawprotect.drawprotect();

    })();
    */
}

init();
