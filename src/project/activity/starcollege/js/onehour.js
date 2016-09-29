require('../scss/onehour.scss') //gennerate by pms , don't delete
function ajaxFunc(type, url, data, successFunc) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: "json",
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
var load_flag = false;
var page = 2;
var totalnum = 1;

function init() {
     $(".mycollege").click(function() {
            location.href = "http://huodong.renren.com/common/activity/activityHome";
    });
     $(".ranklist").on("click",".firstThree",function(e){
        var userid=$(this).data("userid");
        window.location.href="http://www.renren.com/"+userid+"/profile";
     });
      $(".ranklist").on("click",".notFirstThree",function(e){
        var userid=$(this).data("userid");
        window.location.href="http://www.renren.com/"+userid+"/profile";
     });
    $.ajax({
        type: "get",
        url: "http://huodong.renren.com/common/oneHour/mainRank",
        data: { page: 1, limit: 10 },
        dataType: "json",
        success: function(e) {
            var obj = e;
            if (obj.code == 0) {
                renderRank(obj.rankList, 1);
                $(window).scroll(function() {
                    if (load_flag) {
                        return;
                    }
                    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if (totalheight >= ($(document).height()-10)) {
                        load_flag = true;
                        ajaxFunc('get', "http://huodong.renren.com/common/oneHour/mainRank?page=" + page + "&limit=10", '', getdata);
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
    $(".ranklist").on("click", ".buttonIcon", function() {
        // var userId = $(this).data("userid");
        // var select = ".devoterlist[data='" + userId + "']";
        // var status = $(this).data("status");
        // if (status == "down") {
        //     $(select).show();
        //     $(this).addClass('upbtn');
        //     $(this).removeClass('downbtn');
        //     $(this).data("status", "up");
        // } else {
        //     $(select).hide();
        //     $(this).addClass('downbtn');
        //     $(this).removeClass('upbtn');
        //     $(this).data("status", "down");
        // }
    });
}
function toastfun(text, delay) {
    var selector = document.querySelector(".toast");
    if (selector) {
        selector.parentNode.removeChild(selector);
    }
    var domdiv = document.createElement('div');
    domdiv.className = 'toast';
    domdiv.innerText = text;
    document.getElementsByTagName("body")[0].appendChild(domdiv);
    clearTimeout(toastTime);
    var toastTime = setTimeout(function() {
        var selector = document.querySelector(".toast");
        if(selector!=null){
            selector.parentNode.removeChild(selector);
        }
    }, delay || 2000);
}

function getCollegeName(collegeid) {
    var collegeName = "";
    switch (collegeid) {
        case 5:
            collegeName = "流风系";
            break;
        case 1:
            collegeName = "极光系";
            break;
        case 7:
            collegeName = "长云系";
            break;
        case 3:
            collegeName = "影月系";
            break;

    }
    return collegeName;
}

function numChange(num) {
    num = parseInt(num);
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

function getdata(e) {
    var obj = e;
    if (obj.code == 0) {
        if (obj.rankList.length > 0) {
            renderRank(obj.rankList, page);
            page++;
            load_flag = false;
        } else {

        }
    } else {
        console.log("数据返回错误");
    }
}

function renderRank(datalist, page) {
    console.log(datalist);
    for (var i = 0; i < datalist.length; i++) {
        var item = datalist[i];
        var contentclass = "";
        if (totalnum <= 3) {
            contentclass = "firstThree";
        } else {
            contentclass = "notFirstThree";
        }
        var str = '<div data-userid="'+ item.userId +'" class="' + contentclass + '">' +
            '<ul class="rankul">' +
            '<li>' +
            '<div class="ranknum">' +
            totalnum +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="headimg" style="background-image:url(' + item.headUrl + ')">' +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="userinfo">' +
            '<div class="username">' +
            item.userName +
            '</div>' +
            '<div class="collegename">' +
            getCollegeName(item.colleageId) +
            '</div>' +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="score">' +
            numChange(item.totalStar) +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="buttonIcon downbtn" data-userid="' + item.userId + '" data-status="down">' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '<ul class="devoterlist" data="' + item.userId + '">' +
            '<li>' +
            '<div class="headImgs">' +
            '<div class="head1" style="background-image:url(' + item.headUrl + ')">' +
            '</div>' +
            '<div class="head2" style="background-image:url(' + item.donorHeadUrl + ')">' +
            '</div>' +
            '</div>' +
            '<div class="tuhaoinfo">' +
            '<div class="tuhaonameparent">' +
            '与<span class="tuhaoname">' + item.donorName + '</span>' +
            '</div>' +
            '<div class="tuhaonameparent">' +
            '共同捐赠<span class="givevalue">' + numChange(item.donorStar) + '</span>' +
            '</div>' +
            '</div>' +
            '</li>' +

            '</ul>' +
            '</div>';

        $(".ranklist").append(str);
        totalnum++;
    }
}

$(function() {
    init();
})
