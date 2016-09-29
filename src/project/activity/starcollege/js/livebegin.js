require('../scss/livebegin.scss')     //gennerate by pms , don't delete
var flagLive=0;
var advancePage=1;
var livePage=1;
var totalad=0;
var totalli=0;
var rankPage=1;
var load_flag = false;

var totalnum=0;
var pagenum=1;

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

//js开始
$(function(){   
    pickLive();
    liveNowList();
    // init();
    leftflip();
    rightflip();
    payAttention();
    personalHomepage();

 $.ajax({
        url:"http://huodong.renren.com/common/foodFestival/rankList",
        type:'get',
        dataType:'json',
        data:{
            page:1,
            limit:10,
            activityId:1
        },
        dataType: "json",
        success: function(e) {
            var obj = e;
            if (obj.code == 0) {
                renderRank(obj, 1);
                pagenum++;
                $(window).scroll(function() {

                    if (load_flag) {
                        return;
                    }
                    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if (totalheight >= ($(document).height()-10)) {
                        
                        load_flag = true;
                        ajaxFunc('get', "http://huodong.renren.com/common/foodFestival/rankList?page=" + pagenum + "&limit=10&activityId=1",null,getdata);
                    }
                });
            }
            return true;
        },
        error: function(e) {
            console.log(e);
            return false;
        }
    });





    // rankList();
     // $(window).scroll(function() {
     //                if (load_flag) {
     //                    return;
     //                }
     //                var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
     //                 if (totalheight >= ($(document).height()-10)) {
     //                    console.log(totalheight);
     //                    load_flag = true;
     //                    rankList();
     //                    rankPage++;
     //                }
     //                });
      $('.activityInfo').on('click',function(){
        new Modal({body:"<div class='foodInfo'></div> "})
     });
      $('.backCollege').on('click',function(){
        window.location.href="http://huodong.renren.com/common/activity/activityHome";
      })
})
//选择哪一个列表，预告or直播
function pickLive(){
    $('.liveButton').on('click',function(){
        // if(flagLive==0){

             $('.foreshowBar').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/foreshowBar4.png') 50% 50% no-repeat"});
             $('.foreshowBar').css({"background-size":'cover'});
             
             $('.liveList').text('');
             liveNowList();
        // }else if(flagLive==1){
        //     $('.foreshowBar').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/foreshowBar1.png') 50% 50% no-repeat"});
        //     $('.foreshowBar').css({"background-size":'cover'});
        //     flagLive=0;
        //     $('.liveList').text('');
        //     advanceList();
        // }
    })
    $('.nextButton').on('click',function(){
        $('.foreshowBar').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/foreshowBar3.png') 50% 50% no-repeat"});
            $('.foreshowBar').css({"background-size":'cover'});
            
            $('.liveList').text('');
            advanceList();
    })
}
//下拉预告列表
function advanceList(){
    $.ajax({
        url:"http://huodong.renren.com/common/foodFestival/livePreList",
        type:'get',
        dataType:'json',
        data:{
            activityId:1,
            page:advancePage,
            pageSize:3
        },
        success:function(msg){
           
            if(msg.code==0){
                totalad=msg.totalcount;
                var count=0;
                for(count=0;count<msg.userList.length;count++){
                    var str;
                    str= '<div class="showList">'+
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
                        $('.liveList').append(str);
                }
            }

        }
    })
}
//下拉正在直播列表
function liveNowList(){
    $.ajax({
        url:"http://huodong.renren.com/common/foodFestival/liveVideoList",
        type:'get',
        dataType:'json',
        data:{
            activityId:1,
            page:livePage,
            pageSize:6
        },
        success:function(msg){
           
            if (msg.code==0) {
                totalli=msg.totalcount;
                var count=0;
                for(count=0;count<msg.userList.length;count++){
                    var str;
                    str='<div class="liveNow">'+
                            '<div class="userAvatar">'+
                                '<img src='+msg.userList[count].headUrl+'>'+
                            '</div>'+
                            '<div class="userInfo">'+
                                '<div class="userName">'+msg.userList[count].userName+'</div>'+
                                '<div class="userLiveTitle">'+msg.userList[count].liveTitle+'</div>'+
                            '</div>'+
                        '</div>'
                        $('.liveList').append(str);
                }
            }
        }
    })
}
//右点击翻页
function rightflip(){
    $('.right').on('click',function(){
        if(flagLive==0){
            if(advancePage*3<totalad){
                advancePage++;
                $('.liveList').text('');
                advanceList();
                $('.iconLeft').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconLeft2.png') 50% 50% no-repeat"});
                $('.iconLeft').css({"background-size":'cover'});
                if(advancePage*3>=totalad){
                    console.log(advancePage);
                    $('.iconRight').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconRight1.png') 50% 50% no-repeat"});
                    $('.iconRight').css({"background-size":'cover'});
                }
            }
        }else if(flagLive==1){
            if (livePage*6<totalli) {
                livePage++;
                $('.liveList').text('');
                liveNowList();
                $('.iconLeft').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconLeft2.png') 50% 50% no-repeat"});
                $('.iconLeft').css({"background-size":'cover'});
                if(livePage*6>totalli){
                    $('.iconRight').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconRight1.png') 50% 50% no-repeat"});
                    $('.iconRight').css({"background-size":'cover'});
                }
            }
        }
    })
}


//左点击翻页
function leftflip(){
    $('.left').on('click',function(){
        if(flagLive==0){
            if(advancePage*3>3){
                advancePage--;
                $('.liveList').text('');
                advanceList();
                $('.iconRight').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconRight2.png') 50% 50% no-repeat"});
                $('.iconRight').css({"background-size":'cover'});
                if(advancePage*3<=3){
                    console.log(advancePage);
                    $('.iconLeft').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconLeft1.png') 50% 50% no-repeat"});
                    $('.iconLeft').css({"background-size":'cover'});
                }
            }
        }else if(flagLive==1){
            if (livePage*6>6) {
                livePage--;
                $('.liveList').text('');
                liveNowList();
                $('.iconRight').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconRight2.png') 50% 50% no-repeat"});
                $('.iconRight').css({"background-size":'cover'});
                if(livePage*6>=6){
                    $('.iconLeft').css({"background":"url('http://a.xnimg.cn/wap/static/activity/starcollege/iconLeft1.png') 50% 50% no-repeat"});
                    $('.iconLeft').css({"background-size":'cover'});
                }
            }
        }
    })
}


//排行榜折叠
// function init() {
//     $('.rankList').on("click",".buttonIcon", function(e) {
//         var userId = $(this).data("userid");
//         var select = ".giftlist[data='" + userId + "']";
//         var status = $(this).data("status");
//         if (status == "down") {
//             $(select).show();
//             $(this).css("backgroundImage", "url('http://a.xnimg.cn/wap/static/activity/starcollege/up.png')");
//             $(this).data("status","up");
//             e.preventDefault();
//             event.stopPropagation();
//         } else {
//             $(select).hide();
//             $(this).css("backgroundImage", "url('http://a.xnimg.cn/wap/static/activity/starcollege/down.png')");
//             $(this).data("status","down");
//             e.preventDefault();
//             event.stopPropagation();
//         }
//     });
// }


//积分榜获取
// function rankList(){
//     $.ajax({
//         url:"http://huodong.renren.com/common/foodFestival/rankList",
//         type:'get',
//         dataType:'json',
//         data:{
//             page:rankPage,
//             limit:5,
//             activityId:1
//         },
//         success:function(msg){
//             console.log(msg.rankList.length);
//             if(msg.code==0){
//                 var count=0;
//                 for(count=0;count<msg.rankList.length;count++){
//                     var str;
//                     var name;
//                     switch(msg.rankList[count].colleageId){
//                         case 1:
//                             name="极光系";
//                             break;
//                         case 2:
//                             name="影月系";
//                             break;
//                         case 3:
//                             name="流风系";
//                             break;
//                         case 4:
//                             name="长云系";
//                             break;
//                     }
//                     if(count<3){
//                         str=  '<div class="firstThree">'+
//                                 '<ul class="rankul">'+
//                                     '<li>'+
//                                         '<div class="ranknum">'+(count+1)+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="headimg" style="background-image:url(' + numChange(msg.rankList[count].headUrl) + ')">'+
//                                         '</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="userinfo">'+
//                                             '<div class="username">'+msg.rankList[count].userName+'</div>'+
//                                             '<div class="collegename">'+name+'</div>'+
//                                         '</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="score">'+msg.rankList[count].totalStar+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="buttonIcon" data-userid="'+msg.rankList[count].userId+'" data-status="down">'+
//                                         '</div>'+
//                                     '</li>'+
//                                 '</ul>'+
//                                 '<ul class="giftlist" data='+msg.rankList[count].userId+'>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[0].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[1].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[2].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[3].giftCount+'</div>'+
//                                     '</li>'
//                                 '</ul>'+
//                             '</div>'
//                     }else{
//                         str='<div class="notFirstThree">'+
//                                 '<ul class="rankul">'+
//                                     '<li>'+
//                                         '<div class="ranknum">'+(5*(rankPage-1)+count+1)+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="headimg" style="background-image:url(' + msg.rankList[count].headUrl + ')">'+
//                                         '</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="userinfo">'+
//                                             '<div class="username">'+msg.rankList[count].userName+'</div>'+
//                                             '<div class="collegename">'+name+'</div>'+
//                                         '</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="score">'+numChange(msg.rankList[count].totalStar)+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="buttonIcon" data-userid="'+msg.rankList[count].userId+'" data-status="down">'+
//                                         '</div>'+
//                                     '</li>'+
//                                 '</ul>'+
//                                 '<ul class="giftlist" data='+msg.rankList[count].userId+'>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[0].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[1].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[2].giftCount+'</div>'+
//                                     '</li>'+
//                                     '<li>'+
//                                         '<div class="sugarli">'+msg.rankList[count].giftNumList[3].giftCount+'</div>'+
//                                     '</li>'
//                                 '</ul>'+
//                             '</div>'
//                     }
//                     $('.rankList').append(str);
//                 }
//                 load_flag = false;
//             }
//         }
//     })
// }
function getdata(e){
     var obj =JSON.parse(e);
     if (obj.code == 0) {
            renderRank(obj, pagenum);
              pagenum++;
           }
}


 function getSortFun(order, sortBy) {  
        var ordAlpah = (order == 'asc') ? '>' : '<';  
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');  
        return sortFun;
    }

function getgiftcount(gift){
    switch(msg.rankList[count].colleageId){
                        case 1:
                            name="极光系";
                            break;
                        case 2:
                            name="影月系";
                            break;
                        case 3:
                            name="流风系";
                            break;
                        case 4:
                            name="长云系";
                            break;
                    }
}

function renderRank(msg,pagenum){    
    var strtopclass="";
 for(count=0;count<msg.rankList.length;count++){
                    var str;
                    var name;
                    switch(msg.rankList[count].colleageId){
                        case 1:
                            name="极光系";
                            break;
                        case 2:
                            name="影月系";
                            break;
                        case 3:
                            name="流风系";
                            break;
                        case 4:
                            name="长云系";
                            break;
                    }
                    if(totalnum<3){
                        strtopclass="firstThree";
                    }else{
                        strtopclass="notFirstThree";
                    }
                    if(msg.rankList[count].giftNumList==null){
                        continue;
                    }
                    var giftarray=msg.rankList[count].giftNumList;
                        giftarray.sort(getSortFun('asc', 'giftId'));
                            str='<div  data-userid="'+msg.rankList[count].userId+'" class="'+strtopclass+'">'+
                                '<ul class="rankul">'+
                                    '<li>'+
                                        '<div class="ranknum">'+(totalnum+1)+'</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="headimg" style="background-image:url(' + msg.rankList[count].headUrl + ')">'+
                                        '</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="userinfo">'+
                                            '<div class="username">'+msg.rankList[count].userName+'</div>'+
                                            '<div class="collegename">'+name+'</div>'+
                                        '</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="score">'+numChange(msg.rankList[count].totalStar)+'</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="buttonIcon" data-userid="'+msg.rankList[count].userId+'" data-status="down">'+
                                        '</div>'+
                                    '</li>'+
                                '</ul>'+
                                '<ul class="giftlist" data='+msg.rankList[count].userId+'>'+
                                    '<li>'+
                                        '<div class="sugarli">'+msg.rankList[count].giftNumList[0].giftCount+'</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="sugarli">'+msg.rankList[count].giftNumList[1].giftCount+'</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="sugarli">'+msg.rankList[count].giftNumList[2].giftCount+'</div>'+
                                    '</li>'+
                                    '<li>'+
                                        '<div class="sugarli">'+msg.rankList[count].giftNumList[3].giftCount+'</div>'+
                                    '</li>'
                                '</ul>'+
                            '</div>';
                             $('.rankList').append(str);
                             totalnum++;

                }
                 load_flag = false;
}

//ajax请求
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

//关注主播
function payAttention(){
    $('.foreshow').on("click",".concern",function(e){
    var toID = $(this).data('userid');
        var $this = $(e.target);
        if ($this.hasClass('forbid')) return;
            $.ajax({
                url: 'http://huodong.renren.com/common/famous/addFollow',
                type: 'post',
                data: 'fromId='+ idUser +'&toId='+ toID,
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
//点击进入个人主页
function personalHomepage(){
    $('.rankList').on('click','.firstThree',function(e){
        var btndiv=$(this);
        console.log(e.target.className);
        if ( e.target.className=='buttonIcon'){
            return ;
        }else{
            window.location.href="http://www.renren.com/"+btndiv.data('userid')+"/profile";
        }
    });
    $('.rankList').on('click','.notFirstThree',function(e){
        var btndiv=$(this);
        if (e.target.className=='buttonIcon'){
            return ;
        }else{

            window.location.href="http://www.renren.com/"+btndiv.data('userid')+"/profile";
        }
    })
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
//
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

//http://www.renren.com/{uId}/profile