require('../scss/nightparty.scss')     //gennerate by pms , don't delete
var collegeData = [
    {'id': '10001', 'value': '极光学院'},
    {'id': '10002', 'value': '影月学院'},
    {'id': '10003', 'value': '流风学院'},
    {'id': '10004', 'value': '长云学院'},
];
var timeHour=[ 
    {'id': '20000', 'value': '00'},
    {'id': '20001', 'value': '01'},
    {'id': '20002', 'value': '02'},
    {'id': '20003', 'value': '03'},
    {'id': '20004', 'value': '04'},
    {'id': '20005', 'value': '05'},
    {'id': '20006', 'value': '06'},
    {'id': '20007', 'value': '07'},
    {'id': '20008', 'value': '08'},
    {'id': '20009', 'value': '09'},
    {'id': '20010', 'value': '10'},
    {'id': '20011', 'value': '11'},
    {'id': '20012', 'value': '12'},
    {'id': '20013', 'value': '13'},
    {'id': '20014', 'value': '14'},
    {'id': '20015', 'value': '15'},
    {'id': '20016', 'value': '16'},
    {'id': '20017', 'value': '17'},
    {'id': '20018', 'value': '18'},
    {'id': '20019', 'value': '19'},
    {'id': '20020', 'value': '20'},
    {'id': '20021', 'value': '21'},
    {'id': '20022', 'value': '22'},
    {'id': '20023', 'value': '23'},
];
var timeMinute=[
    {'id': '30000', 'value': '00'},
    {'id': '30001', 'value': '10'},
    {'id': '30002', 'value': '20'},
    {'id': '30003', 'value': '30'},
    {'id': '30004', 'value': '40'},
    {'id': '30005', 'value': '50'},
];
var colleageId=1;//学院选择
// modal
(function(window, $, undefined){
    window.Modal = Modal;
    var modalContainerTPL =  "<div class='modal-containner-shadow'>"+
                                "<div class='modal-content-containner'>"+
                                    "<div class='modal-header'>"+
                                    "</div>"+
                                    "<div class='close-btn'><span>＋</span></div>"+
                                    "<div class='modal-body'></div>"+
                                "</div>"+
                             "</div>"

    function Modal(option){
        return new ModalFactory(option);
    }

    function ModalFactory(option){
        this.option = option ? option : {};
        this.init();
    }

    ModalFactory.prototype.init = function(){
        if ($('.modal-containner-shadow').length){
            $('.modal-containner-shadow').show();
            return;
        };
        this.buildConstructor();
        this.position();
        this.bindEvent();
        //this.show();
    }

    ModalFactory.prototype.buildConstructor = function(){
        $('body').append($(modalContainerTPL));
        this.$containner = $('.modal-content-containner');
        // set title、content、width
        this.option.title ? this.$containner.find(".modal-header").html(this.option.title) : "";
        this.option.body ? this.$containner.find(".modal-body").html($(this.option.body)) : "";
        this.option.width ? this.$containner.css("width", this.option.width) : "";

        if($.isFunction(this.option.shown)){
            this.option.shown.call(this);
        }
    }

    ModalFactory.prototype.position = function(){
        this.$containner.css('marginTop', ($(window).height()/2 - (this.$containner.height()/2))+"px")
    }

    ModalFactory.prototype.bindEvent = function(){
        $('.modal-containner-shadow, .close-btn').on( 'click', function(e){
            if ($(e.target).hasClass('modal-containner-shadow') || $(e.target).parent().hasClass('close-btn')){
                $('.modal-containner-shadow').hide();
            }
        })
    }
})(window, $, undefined)
//假设字段
var isV=true;
var hasJoin=true;
var schoolId=1;
//函数开始
$(function(){
    firstPop();
    // localStorage.setItem("firstCome",0);
    // var url=localStorage.getItem("firstCome");
    //new Modal({body:"<div class='foodInfo'></div> "})
    if(isV==true){
        if(hasJoin==true){
            switch(schoolId){
                case 1:
                $('#collegeName').val('极光学院');
                break;
                case 3:
                $('#collegeName').val('影月学院');
                break;
                case 5:
                $('#collegeName').val('流风学院');
                break;
                case 7:
                $('#collegeName').val('长云学院');
            }
            $('#collegeName').attr('disabled','disabled');
            $('#collegeName').css('background','white');
            timeSelect();
        }else{
            collegeSelect();
            timeSelect();
        }
    }else{
            collegeSelect();
            timeSelect();
    }
     pickLiveList();
     liveList();
     $('.enterButton').on('click',function(){
        if(isV==true){
            joinUs();
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
     });
     payAttention();
     $('.backCollege').on('click',function(){
        window.location.href="http://huodong.renren.com/common/activity/activityHome";
     });
     $('.activityInfo').on('click',function(){
        new Modal({body:"<div class='foodInfo'></div> "})
     });
})
//学院选择
function collegeSelect(){
 $('#collegeName').on('click',function(e){
    stopDefault(e);
    var collegeSelect=new IosSelect(1,
            [collegeData],
            {
                title: '学院选择',
                itemHeight: 35,
                callback:function(selectOneObj){
                    $('#collegeName').val(selectOneObj.value);
                }
            }
        );
 })
}

function timeSelect(){
    $('#liveTime').on('click',function(e){
        //stopDefault( e );
        var timeSelect=new IosSelect(2,
                [timeHour,timeMinute],
                {
                    title: '时间选择',
                    itemHeight: 35,
                    callback:function(selectOneObj,selectTwoObj){
                        $('#liveTime').val(selectOneObj.value+':'+selectTwoObj.value);
                    }
                }
            );
    })
}
function pickLiveList(){
    // var xiImg1=require('../img/jiguangButton.png');
    // var xiImg2=require('../img/yingyueButton.png');
    // var xiImg3=require('../img/liufengButton.png');
    // var xiImg4=require('../img/changyunButton.png');
    $('.JGButton').on('click',function(){
        $('.rankBar').css({"background":'url("http://a.xnimg.cn/wap/static/activity/starcollege/jiguangButton.png") no-repeat 50% 50%'});
        $('.rankBar').css({"background-size":'cover'});
         colleageId=1;
        $('.rank').text('');
        liveList();

    });
    $('.YYButton').on('click',function(){
        $('.rankBar').css({"background":'url("http://a.xnimg.cn/wap/static/activity/starcollege/yingyueButton.png") no-repeat 50% 50%'});
        $('.rankBar').css({"background-size":'cover'});
         colleageId=3;
        $('.rank').text('');
        liveList();

    });
    $('.LFButton').on('click',function(){
        $('.rankBar').css({"background":'url("http://a.xnimg.cn/wap/static/activity/starcollege/liufengButton.png") no-repeat 50% 50%'});
        $('.rankBar').css({"background-size":'cover'});
         colleageId=5;
        $('.rank').text('');
        liveList();

    });
    $('.CYButton').on('click',function(){
        $('.rankBar').css({"background":'url("http://a.xnimg.cn/wap/static/activity/starcollege/changyunButton.png") no-repeat 50% 50%'});
        $('.rankBar').css({"background-size":'cover'});
         colleageId=7;
        $('.rank').text('');
        liveList();
    });
}


//弹窗判断
function firstPop(){
    var firstCome=localStorage.getItem("firstCome");
    if(firstCome==undefined){
        new Modal({body:"<div class='foodInfo'></div> "});
         localStorage.setItem("firstCome",1);
        localStorage.setItem("today",26);
    };
    if( new Date().getDate()>localStorage.getItem("today")){
        localStorage.setItem("today",new Date().getDate());
        new Modal({body:"<div class='foodInfo'></div> "});
    }else{
        return false;
    }
    // if(new Date().getDate()>today){
    //     localStorage.setItem("firstCome",1);
    //     today++;
    //     new Modal({body:"<div class='foodInfo'></div> "});
    // }else{
    //     return false;
    // }
    // var now =new Date().getDate();
    // var dd=now.getDate();
    // var hh=now.getHours();
    // var ii=now.getMinutes();
}
//活动报名
function joinUs(){
    var collegeNum =0;
    var liveTitle ='黑暗料理是怎样炼成的';
    var a=$('#collegeName').val();
    switch (a){
        case '极光学院':
            collegeNum=1;
            break;
        case '影月学院':
            collegeNum=3;
            break;
        case '流风学院':
            collegeNum=5;
            break;
        case '长云学院':
            collegeNum=7;
            break;
    }
    if($('#liveTitle').val()!='' ){
        liveTitle=$('#liveTitle').val();
    }
    if($('#liveTime').val()==''){
        toast('请填写直播时间');
    }else{
        $.ajax({
            url:"http://huodong.renren.com/common/foodFestival/joinFoodFestival",
            type:'get',
            dataType:'json',
            data:{
                activityId:1,
                colleageId:collegeNum,
                liveTime:$('#liveTime').val(),
                liveTitle:liveTitle
            },
            success: function(msg){
                 toast(msg.msg);
            }
        })
    }
}

//弹层
function toast(_text, _delay) {
    $(".toast").remove();
    $("body").append("<div class='toast'>" + _text + "</div>");
    clearTimeout(toastTime);
    var toastTime = setTimeout(function() {
        $(".toast").remove();
    }, _delay || 2000);
}
//获取各个学院直播预告列表
function liveList(){
    $.ajax({
        url:"http://huodong.renren.com/common/foodFestival/joinUserList",
        type:'get',
        dataType:'json',
        data:{
            colleageId:colleageId,
            activityId:1
        },
        success:function(msg){
            if(msg.code==0){
                var count=0;
                for(count=0;count<msg.count;count++){
                    var str;
                    str= '<div class="rankNum">'+
                            '<div class="userAvatar">'+
                                '<img src='+msg.userList[count].headUrl+'>'+
                            '</div>'+
                            '<div class="userInfo">'+
                                '<div class="userName">'+msg.userList[count].userName+'</div>'+
                                '<div class="userLiveTitle">'+msg.userList[count].liveTitle+'</div>'+
                            '</div>'+
                            '<p class="userLiveTime">'+msg.userList[count].liveTime+'</p>'+
                            '<div class="concern" data-userid="'+msg.userList[count].userId+'"></div>'+
                        '</div>'
                        $('.rank').append(str);
                }
            }
        }
    })
}
//关注主播
function payAttention(){
    $('.rankList').on("touchstart",".concern",function(e){
        var toID = $(this).data('userid');
        var $this = $(e.target);
        if ($this.hasClass('forbid')) return;
            $.ajax({
                url: 'http://huodong.renren.com/common/famous/addFollow',
                type: 'post',
                data: 'fromId='+ userId +'&toId='+ toID,
                dataType: 'json',
                success: function(r) {
                    if(r.code == 0 || r.code == 1){
                        toast('关注成功');
                        $this.addClass('forbid');
                    }
                }
            });
    })
}
//
function stopDefault( e ) { 
//如果提供了事件对象，则这是一个非IE浏览器
if ( e && e.stopPropagation )
//因此它支持W3C的stopPropagation()方法
e.stopPropagation(); 
else
//否则，我们需要使用IE的方式来取消事件冒泡 
window.event.cancelBubble = true;
return false;
}