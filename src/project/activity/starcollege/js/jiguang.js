require('../scss/jiguang.scss')     //gennerate by pms , don't delete
//开始
var collegeId;
$(function(){
    collegeId = window.location.href.split("?");
     collegeId=collegeId[1].split("=")[1];
     console.log(collegeId);
     changeName();
     inOrNot();
     rankPick();
     collegeInfo();
     joinUs();
     $('.goBack').on('click',function(){
        window.location.href="http://huodong.renren.com/common/activity/activityHome";
     })
     var public = require('../js/public.js');
     var pubFunc = new public();
    var ranklist = require('../js/ranklistcollege.js');
     ranklistobj = new ranklist(); 
     ranklistobj.studentRank(weekRank,true,pubFunc,$(".rank"));
})
//榜单选择
function rankPick(){
    $('.leftBar').on('click',function(){
        $('.rank').text('');
        $('.rankBar').css({"background":"url(http://a.xnimg.cn/wap/static/activity/starcollege/rankBar1.png)"});
        $('.rankBar').css({"background-size":'cover'});
        var public = require('../js/public.js');
        var pubFunc = new public();
        var ranklist = require('../js/ranklistcollege.js');
        ranklistobj = new ranklist(); 
        ranklistobj.studentRank(weekRank,true,pubFunc,$(".rank"));
    });
    $('.rightBar').on('click',function(){
        $('.rankBar').css({"background":'url(http://a.xnimg.cn/wap/static/activity/starcollege/rankBar2.png)'});
        $('.rankBar').css({"background-size":'cover'});
        $('.rank').text('');
        var public = require('../js/public.js');
        var pubFunc = new public();
        var ranklist = require('../js/ranklistcollege.js');
        ranklistobj = new ranklist(); 
        ranklistobj.studentRank(totalRank,false,pubFunc,$(".rank"));
    });

}
//获取学院信息
function collegeInfo(){
    switch (college.id){
        case 5:
            $('.JGhead').css({"background":"url(http://a.xnimg.cn/wap/static/activity/starcollege/LFhead.png)"});
            $('.JGhead').css({"background-size":'cover'});
            break;
        case 1:
            $('.JGhead').css({"background":"url(http://a.xnimg.cn/wap/static/activity/starcollege/JGhead.png)"});
            $('.JGhead').css({"background-size":'cover'});
            break;
        case 7:
            $('.JGhead').css({"background":"url(http://a.xnimg.cn/wap/static/activity/starcollege/CYhead.png)"});
            $('.JGhead').css({"background-size":'cover'});
            break;
        case 3:
            $('.JGhead').css({"background":"url(http://a.xnimg.cn/wap/static/activity/starcollege/YYhead.png)"});
            $('.JGhead').css({"background-size":'cover'});
            break;

    }
    $('.t1').text(college.name);
    $('.t2').text(college.memberCount);
    $('.t3').text(numChange(college.totalScore));
    $('.t4').text(college.rank);
    $('.JGIntroduction').text(college.description);
}

//加入学院
function joinUs(){
    $('.joinUs').on('click',function(){
        joincollege(this);
        $('.joinUs').hide();
        $('.goBack').show();
    })
}
function joincollege($obj) { 

    if(isVJ==true){
        if (hasJoin != false) {
            switch (collegeId) {
                case '5':
                    toast("您已经加入流风系");
                    break;
                case '1':
                    toast("您已经加入极光系");
                    break;
                case '7':
                    toast("您已经加入长云系");
                    break;
                case '3':
                    toast("您已经加入影月系");
                    break;
            };

        } else {
            $.ajax({
                url:"http://huodong.renren.com/common/activity/joinCollege",
                type:'post',
                data:{
                    collegeId:collegeId
                },
                success:function(msg){
                     var obj=JSON.parse(msg);
                        if (obj.result== 0) {
                            toast("加入成功");
                            return ;
                        }
                        if (obj.result == 1) {
                            toast("您之前已经加入了");
                            return ;
                        }
                        if (obj.result== 2) {
                            toast("学院人数不均衡");
                            return ;
                        }
                }
            });
        }
    }else{
            var opt = {
                    body : '<p>Sorry，您还不是认证主播，本次活动仅限认证主播参与呦~</p>',
                    title: '提示',
                    cancelText: '立即申请',
                    cancel: function(){
                        window.location.href='http://huodong.renren.com/common/player/submitInfo ';
                    },
                    okText: '我知道了'
                }
            Txbb.Pop('modal', opt);
        }
}


function toast(_text, _delay) {
    $(".toast").remove();
    $("body").append("<div class='toast'>" + _text + "</div>");
    clearTimeout(toastTime);
    var toastTime = setTimeout(function() {
        $(".toast").remove();
    }, _delay || 2000);
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
            console.log(e);
            return false;

        }
    });
}

//判断是否加入
function  inOrNot(){
    if(hasJoin==false){
        $('.userInfo').hide();
        $('.bottom').css("margin-top",'-2.1rem');
        $('.rankBar').css("margin-top",'-2.1rem');
        $('.joinUs').show();
        $('.goBack').hide();
        
    }else{
        if(member.collegeId!=collegeId){
            $('.goBack').show();
            $('.joinUs').hide();
            $('.userInfo').hide();
            $('.bottom').css("margin-top",'-2.1rem');
            $('.rankBar').css("margin-top",'-2.1rem');
        }
        userInfo();
        $('.goBack').show();
        $('.joinUs').hide();
    };

}
//获取个人信息
function userInfo(){
    if(member.totalScore==0){
        $('.point1').find('span').text('NA');
        $('.point2').find('span').text(member.totalScore);
        $('.point3').find('span').text(member.weekScore);
        $('.point4').find('span').text(member.dayScoreBak);
        $('.userAvatar').find('img').attr("src",member.headUrl);
    }else{
        $('.point1').find('span').text(member.rankCount);
        $('.point2').find('span').text(member.totalScore);
        $('.point3').find('span').text(member.weekScore);
        $('.point4').find('span').text(member.dayScoreBak);
        $('.userAvatar').find('img').attr("src",member.headUrl);
    }
}
//改变title值
function changeName(){

                 switch (collegeId) {
            case '5':
                document.title="流风系";
                break;
            case '1':
                document.title="极光系";
                break;
            case '7':
                document.title="长云系";
                break;
            case '3':
                document.title="影月系";
                break;
        };
}
function numChange(num){
    num =parseInt(num);
    if (num < 10000) {
        } else if (num < 100000000) {
            num = num / 1000;
            num = Math.floor(num);
            num = num / 10;
            num = (num + "万");
        } else {
            num = num / 10000000;
            num = Math.floor(num);
            num = num / 10;
            num = (num + "亿");
        }
        return num;
}