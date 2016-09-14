require('../scss/starcollege.scss') //gennerate by pms , don't deletes
// console.log("collegelist");
// console.log(JSON.parse(collegelist));
// console.log("rankList");
// console.log(rankList);
// console.log("hasJoin");
// console.log(hasJoin);
// console.log("member");
// console.log(member);
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


var public = require('../js/public.js');
var pubFunc = new public();
var ranklist = require('../js/ranklist.js');
 ranklistobj = new ranklist();



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
// loadImg(foodImagesArraySrc, function() {
//     imgWidthFood = imagesArrayObj["foodonly"].width;
//     imgHeightFood = imagesArrayObj["foodonly"].height;
//     canvasFood = document.getElementById("canvasfood");
//     cxtFood = canvasFood.getContext("2d");
//     canvasWidthFood = canvasFood.width;
//     canvasHeightFood = canvasFood.height;
//     foodRender();
// }, imagesArrayObj);

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
// loadImg(starSrcOneHour, function() {
//     onehourCanvas = document.getElementById("onehourcanvas");
//     canvaswidthOnehour = onehourCanvas.width;
//     canvasheightOnehour = onehourCanvas.height;
//     cxtOnehour = onehourCanvas.getContext("2d");
//     hourStarxy = {
//         x: 0,
//         y: 10,
//         rate: 0.2,
//         starflag: true
//     };
//     hourCloadxy = {
//         x: 26,
//         y: 62,
//         rate: 0.2,
//         cloadflag: true
//     };
//     onehourRender();
// }, imagesArrayOneHourObj);

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


function collectrank() {
    var collectListObjArray = JSON.parse(collegelist);
    collectListObjArray.sort(pubFunc.keysrt('totalScore',true));
    var images=[require('../img/NO1.png'),require('../img/NO2.png'),require('../img/NO3.png'),require('../img/NO4.png')];
    for (var i = 0; i < collectListObjArray.length; i++) {
        switch (collectListObjArray[i].name) {
            case "流风系":
                $(".collegename3 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent3 .norank3").css({"backgroundImage":"url("+images[i]+")"});
                break;
            case "长云系":
                $(".collegename4 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent4 .norank4").css({"backgroundImage":"url("+images[i]+")"});
                break;
            case "极光系":
                $(".collegename1 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                 $(".licontent1 .norank1").css({"backgroundImage":"url("+images[i]+")"});
                break;
            case "影月系":
                $(".collegename2 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent2 .norank2").css({"backgroundImage":"url("+images[i]+")"});
                break;
        }
    }
}

function joincollege($obj) {
    if (hasJoin != "false") {
        var collegeObj = JSON.parse(member);
        switch (collegeObj.collegeId) {
            case 5:
                alert("您已经加入流风系");
                break;
            case 1:
                alert("您已经加入极光系");
                break;
            case 7:
                alert("您已经加入长云系");
                break;
            case 3:
                alert("您已经加入影月系");
                break;
        };

    } else {
        var collegeId = $obj.data("collegeid");
       pubFunc.ajaxFunc("post", "http://huodong.renren.com/common/activity/joinCollege", { "collegeId": collegeId }, function(e) {
            var resultobj = JSON.parse(e);
            if (resultobj.result == 0) {
                alert("加入成功");
            }
            if (resultobj.result == 1) {
                alert("您之前已经加入了");
            }
            if (resultobj.result == 2) {
                alert("学院人数不均衡");
            }
        });
    }
}



function init() {
    $(".divjoin1").tap(function() {
        joincollege(this);
    });
    $(".divjoin2").tap(function() {
        joincollege(this);
    });
    $(".divjoin3").tap(function() {
        joincollege(this);
    });
    $(".divjoin4").tap(function() {
        joincollege(this);
    });
    $(".licontent1 .tapdiv").tap(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent2 .tapdiv").tap(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent3 .tapdiv").tap(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent4 .tapdiv").tap(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    collectrank();
    ranklistobj.studentRank(rankList,false,pubFunc, $(".rank"));
    //studentRank();
    if (member == "{}") {
        $(".mycollege").hide();
    } else {
        $(".mycollege").show();
        $(".mycollege").tap(function() {
            var collegeObj = JSON.parse(member);
            location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeObj.collegeId;
        });
    }




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
