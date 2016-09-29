require('../scss/starcollege.scss'); //gennerate by pms , don't deletes
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
console.log(456);
var requirepubFunc = require('../js/public.js');
var pubFunc = new requirepubFunc();
var ranklist = require('../js/ranklist.js');
var ranklistobj = new ranklist();



var datenowtime = new Date();
datenowtime.setTime(nowtime);
   function popup() {
    var opt = {
        body: '<p>Sorry，您还不是认证主播，本次活动仅限认证主播参与呦~</p>',
        title: '提示',
        cancelText: '立即申请',
        cancel: function() {
            window.location.href = 'http://huodong.renren.com/common/player/submitInfo';
        },
        okText: '我知道了'
    };
    Txbb.Pop('modal', opt);
}


function collectrank() {
    var collectListObjArray = collegelist;
    collectListObjArray.sort(pubFunc.getSortFun('desc', 'totalScore'));
    var images = ['http://a.xnimg.cn/wap/static/activity/starcollege/NO1.png', 'http://a.xnimg.cn/wap/static/activity/starcollege/NO2.png', 'http://a.xnimg.cn/wap/static/activity/starcollege/NO3.png', 'http://a.xnimg.cn/wap/static/activity/starcollege/NO4.png'];
    for (var i = 0; i < collectListObjArray.length; i++) {
        switch (collectListObjArray[i].name) {
            case "流风系":
                $(".collegename3 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent3 .norank3").css({ "backgroundImage": "url(" + images[i] + ")" });
                break;
            case "长云系":
                $(".collegename4 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent4 .norank4").css({ "backgroundImage": "url(" + images[i] + ")" });
                break;
            case "极光系":
                $(".collegename1 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent1 .norank1").css({ "backgroundImage": "url(" + images[i] + ")" });
                break;
            case "影月系":
                $(".collegename2 span").eq(0).text(pubFunc.numChange(collectListObjArray[i].totalScore));
                $(".licontent2 .norank2").css({ "backgroundImage": "url(" + images[i] + ")" });
                break;
        }
    }
}

function joincollege($obj) {

    var collegeId = $obj.data("collegeid");
    location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeId;


}


function GetDateStr(day, AddDayCount) {
    var dd = new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), day.getMinutes(), day.getSeconds());
    dd.setDate(dd.getDate() + AddDayCount); //
    return dd;
};

function setstatus(num, tiaozhuanUrl, status) {
    switch (num + 1) {
        case 1:
            if (status == 2 || status == 1) {
              $(".food").addClass('pulse animated infinite');
            }
            $(".activityfood").removeClass('gray');
            $(".activityprocess1").css('backgroundImage', 'url(http://a.xnimg.cn/wap/static/activity/starcollege/start.png)');
            $(".activityfood").click(function() {
                location.href = tiaozhuanUrl;
            });
            $(".activityprocess1").click(function() {
                location.href = tiaozhuanUrl;
            });
            break;
        case 2:
            if (status == 2 || status == 1) {
                $(".starhour").addClass('starhouranimation');
                $(".clode").addClass('clodeanimation');
            }
            $(".activityprocess2").css('backgroundImage', 'url(http://a.xnimg.cn/wap/static/activity/starcollege/start.png)');
            $(".activityearthonehour").removeClass('gray');
            $(".activityearthonehour").click(function() {
                location.href = tiaozhuanUrl;
            });
              $(".activityprocess2").click(function() {
                location.href = tiaozhuanUrl;
            });
            break;
        case 3:
            if (status == 2 || status == 1) {
                $(".pumpkin").addClass('swing animated infinite');
            }
            $(".activityprocess3").css('backgroundImage', 'url(http://a.xnimg.cn/wap/static/activity/starcollege/start.png)');
            $(".activitynightparty").removeClass('gray');
            $(".activitynightparty").click(function() {
                location.href = tiaozhuanUrl;
            });
              $(".activityprocess3").click(function() {
                location.href = tiaozhuanUrl;
            });
            break;
        case 4:
            if (status == 2 || status == 1) {
                $(".leftwing").addClass('rotateInUpRight animated infinite');
                $(".rightwing").addClass('rotateInUpLeft animated infinite');
            }
            $(".activityprocess4").css('backgroundImage', 'url(http://a.xnimg.cn/wap/static/activity/starcollege/start.png)');
            $(".activityprotectlove").removeClass('gray');
            $(".activityprotectlove").click(function() {
                location.href = tiaozhuanUrl;
            });
            $(".activityprocess4").click(function() {
                location.href = tiaozhuanUrl;
            });
            break;
    }
}

function panduan() {
    var nowdata = datenowtime;
    console.log(nowdata);
    var foodtime = {};
    foodtime.start = new Date(2016, 8, 29, 0, 0, 0);
    foodtime.end = new Date(2016, 8, 29, 23, 59, 59);
    foodtime.baoming = "http://huodong.renren.com/common/foodFestival/joinPage";
    foodtime.yugao = "http://huodong.renren.com/common/foodFestival/mainPage";
    foodtime.award = "http://huodong.renren.com/common/foodFestival/foodAward";
    var onehourtime = {};
    onehourtime.start = new Date(2016, 9, 5, 18, 0, 0);
    onehourtime.end = new Date(2016, 9, 6, 1, 59, 59);
    onehourtime.baoming = "http://huodong.renren.com/common/oneHour/mainPage";
    onehourtime.yugao = "http://huodong.renren.com/common/oneHour/mainPage";
    onehourtime.award = "http://huodong.renren.com/common/oneHour/oneHourAward";
    var partytime = {};
    partytime.start = new Date(2016, 9, 15, 0, 0, 0);
    partytime.end = new Date(2016, 9, 15, 23, 59, 59);
    partytime.baoming = "http://huodong.renren.com/common/nightParty/joinPage";
    partytime.yugao = "http://huodong.renren.com/common/nightParty/mainPage";
    partytime.award = "http://huodong.renren.com/common/nightParty/nightAward";
    var protecttime = {};
    protecttime.start = new Date(2016, 9, 20, 0, 0, 0);
    protecttime.end = new Date(2016, 9, 20, 23, 59, 59);
    protecttime.baoming = "http://huodong.renren.com/common/trueLover/mainPage";
    protecttime.yugao = "http://huodong.renren.com/common/trueLover/mainPage";
    protecttime.award = "http://huodong.renren.com/common/trueLover/mainPage";
    var timelist = [foodtime, onehourtime, partytime, protecttime];
    var foodstarttime=new Date(2016, 8, 26, 10, 0, 0);
    if (nowdata < foodtime.start&&foodstarttime<nowdata) {
        setstatus(0, foodtime.baoming, 1);
    } else if (nowdata >= foodtime.start && nowdata <= foodtime.end) {
        setstatus(0, foodtime.yugao, 2);

    } else if(nowdata > foodtime.end){
        setstatus(0, foodtime.award, 3);
    }
    for (var i = 1; i < timelist.length - 2; i++) {
        var nowitem = timelist[i];
        var nextitem = timelist[i + 1];
        var frontitem = timelist[i - 1];
        if (nowdata <= frontitem.end) {
            return;
            //  setstatus(i+1, item.award);
        }
        if (nowdata > frontitem.end && nowdata < nowitem.start) {
            setstatus(i, nowitem.baoming, 1);
        }
        if (nowdata <= nowitem.end && nowdata >= nowitem.start) {
            setstatus(i, nowitem.yugao, 2);
        }
        if (nowdata < nextitem.start && nowdata > nowitem.end) {
            setstatus(i, nowitem.award, 3);
        }
        if (nowdata >= nextitem.start) {
            setstatus(i, nowitem.award, 3);
        }
    }

    //第三个活动
    var onehourstarttime=new Date(2016, 9, 10, 18, 0, 0);
    if (nowdata < partytime.start&&onehourstarttime<nowdata) {
        setstatus(2, partytime.baoming, 1);
    } else if (nowdata >= partytime.start && nowdata <= partytime.end) {
        setstatus(2, partytime.yugao, 2);

    } else if(nowdata > partytime.end){
        setstatus(2, partytime.award, 3);
    }


    if (nowdata >= partytime.end && nowdata < protecttime.start) {
        setstatus(3, protecttime.baoming, 1);
    } else if (nowdata >= protecttime.start && nowdata <= protecttime.end) {
        setstatus(3, protecttime.yugao, 2);
    } else if (nowdata > protecttime.end) {
        setstatus(3, protecttime.award, 3);
    }
}

function init() {
    $(".btnDetails").on("click",function(){
      location.href ='http://s.xnimg.cn/a86547/wap/static/activity/starcollege/explainstarcollege.html';
    });
    $(".divjoinbtn").on("click",function(){
        joincollege($(this));
    })
    $(".licontent1 .tapdiv").click(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent2 .tapdiv").click(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent3 .tapdiv").click(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    $(".licontent4 .tapdiv").click(function() {
        var collegeid = $(this).data("collegeid");
        location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeid;
    });
    collectrank();
    //rankList = rankList.slice(0,1);
    ranklistobj.studentRank(rankList, false, pubFunc, $(".rank"));

    panduan();

    //判断字段是否存在
    if (!member.collegeId) {
        // alert($(".rank").css('marginTop'));

        $(".mycollege").hide();

    } else {

        $(".whitediv").css("marginBottom", "1.3rem");
        $(".mycollege").show();

        var collegeObj = member;
        var entercollegeimg = 'http://a.xnimg.cn/wap/static/activity/starcollege/entercollege.png';
        // switch (collegeObj.collegeId) {
        //     case 5:
        //         $(".divjoin3").css({ "backgroundImage": "url(" + entercollegeimg + ")" });
        //         break;
        //     case 1:
        //         $(".divjoin1").css({ "backgroundImage": "url(" + entercollegeimg + ")" });
        //         break;
        //     case 7:
        //         $(".divjoin4").css({ "backgroundImage": "url(" + entercollegeimg + ")" });
        //         break;
        //     case 3:
        //         $(".divjoin2").css({ "backgroundImage": "url(" + entercollegeimg + ")" });
        //         break;
        // };
        $(".mycollege").click(function() {
            location.href = "http://huodong.renren.com/common/activity/collegeHome?collegeId=" + collegeObj.collegeId;
        });

    }
}

init();
