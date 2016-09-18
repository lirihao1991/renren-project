require('../scss/jiguang.scss')     //gennerate by pms , don't delete
//开始

$(function(){
     inOrNot();
     rankPick();
     collegeInfo();
     joinUs();
    //  var public = require('../js/public.js');
    //  var pubFunc = new public();
    // var ranklist = require('../js/ranklist.js');
    //  ranklistobj = new ranklist(); 
    //  ranklistobj.studentRank(JSON.stringify(weekRank),true,pubFunc,$(".rank"));
})




//榜单选择
function rankPick(){
    var imgUrl1 = require('../img/rankBar1.png');
    var imgUrl2 = require('../img/rankBar2.png');
    $('.leftBar').on('tap',function(){
      $('.rankBar').css({"background":"url("+imgUrl1+")"});
     var public = require('../js/public.js');
     var pubFunc = new public();
    var ranklist = require('../js/ranklist.js');
     ranklistobj = new ranklist(); 
     ranklistobj.studentRank(JSON.stringify(weekRank),true,pubFunc,$(".rank"));
    });
    $('.rightBar').on('tap',function(){
        $('.rankBar').css({"background":'url('+imgUrl2+')'});
     var public = require('../js/public.js');
     var pubFunc = new public();
    var ranklist = require('../js/ranklist.js');
     ranklistobj = new ranklist(); 
     ranklistobj.studentRank(JSON.stringify(weekRank),true,pubFunc,$(".rank"));
    });

}
//获取学院信息
function collegeInfo(){
    var collegeImg1=require('../img/LFhead.png');
    var collegeImg2=require('../img/JGhead.png');
    var collegeImg3=require('../img/CYhead.png');
    var collegeImg4=require('../img/YYhead.png');
    switch (college.id){
        case 5:
            $('.JGhead').css({"background":"url("+collegeImg1+")"});
            break;
        case 1:
            $('.JGhead').css({"background":"url("+collegeImg2+")"});
            break;
        case 7:
            $('.JGhead').css({"background":"url("+collegeImg3+")"});
            break;
        case 3:
            $('.JGhead').css({"background":"url("+collegeImg4+")"});
            break;

    }
    $('.t1').text(college.name);
    $('.t2').text(college.memberCount);
    $('.t3').text(college.totalScore);
    $('.t4').text(college.rank);
    $('.JGIntroduction').text(college.description);
}

//加入学院
function joinUs(){
    $('.joinUs').on('tap',function(){
        joincollege(this);
    })
}
function joincollege($obj) {
     var collegeId = window.location.href.split("?");
        collegeId=collegeId[1].split("=")[1];
    if (hasJoin != false) {

        switch (collegeId) {
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

       
        ajaxFunc("post", "http://huodong.renren.com/common/activity/joinCollege", { "collegeId": collegeId }, function(e) {
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

function ajaxFunc(type, url, data, successFunc) {

    $.ajax({

        type: type,

        url: url,

        data: data,

        success: function(e) {
            successFunc(e);
            return true;

        },
        error: function(e) {
            // alert(e.responseText);
            console.log(e);
            return false;

        }
    });
}

//判断是否加入
function  inOrNot(){
    if(hasJoin==true){
        $('.userInfo').hide();
        $('.bottom').css("margin-top",'-2.1rem');
        $('.rankBar').css("margin-top",'-2.1rem');
    }else{
        userInfo();
    }
}
//获取个人信息
function userInfo(){
    $('.point1').find('span').val(member.rankCount);
}