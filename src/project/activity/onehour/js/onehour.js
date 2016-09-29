require('../scss/onehour.scss') //gennerate by pms , don't delete
function init() {
    $.ajax({
        type: "get",
        url: "http://huodong.renren.com/common/oneHour/mainRank",
        data: { page: 1, limit: 10 },
        dataType: "json",
        success: function(e) {
            var obj = e;
            if (obj.code == 0) {
                renderRank(obj.rankList, 1);
            }
            return true;
        },
        error: function(e) {
            console.log(e);
            return false;
        }
    });
    $(".mycollege").click(function() {
        location.href = "http://huodong.renren.com/common/activity/activityHome";
    });
    $(".topThree,.rank").on("click", ".btndiv", function() {
        var userid = $(this).data("userid");
        window.location.href = "http://www.renren.com/" + userid + "/profile";
    })

}
init();

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

function renderTopThree(str, dataitem) {
    var item = dataitem;
    var $str = '<div data-userid="' + item.userId + '" class="btndiv ' + str + '">\
                    <div class="headigms">\
                        <div class="authorheadimg" style="background-image:url(' + item.headUrl + ')">\
                        </div>\
                        <div class="devoterheadimg" style="background-image:url(' + item.donorHeadUrl + ')">\
                        </div>\
                    </div>\
                    <div class="authorname">' +
        item.userName + '</div>\
                    <div class="devotername">' +
        item.donorName +
        '</div>\
                    <div class="collegename">' +
        getCollegeName(item.colleageId) +
        '</div>\
                    <div class="devotevalue">' +
        numChange(item.totalStar) +
        '</div>\
                </div>';
    $(".topThree").append($str);

}

function renderBottomThree(num, dataitem) {
    var item = dataitem;
    var str = '<div data-userid="' + item.userId + '"  class="bottomSeven btndiv">\
                    <div class="numbackgroundImg">' +
        num +
        '</div>\
                    <div class="authordiv">\
                        <div class="authorimg" style="background-image:url(' + item.headUrl + ')">\
                        </div>\
                        <div class="authorname">' +
        item.userName +
        '</div>\
                    </div>\
                      <div class="devoterdiv">\
                        <div class="devoterimg" style="background-image:url(' + item.donorHeadUrl + ')">\
                        </div>\
                        <div class="devotername">' +
        item.donorName +
        '</div>\
                    </div>\
                    <div class="collegename">' + getCollegeName(item.colleageId) +
        '</div>\
                    <div class="valuediv">' +
        numChange(item.totalStar) +
        '</div>\
                </div>';
    $(".rank").append(str);
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

function renderRank(rankList) {
    var numArray = [2, 1, 3];
    var classnum;
    numArray.forEach(function(e) {
        switch (e) {
            case 2:
                classnum = "second";
                renderTopThree(classnum, rankList[2]);
                break;
            case 1:
                classnum = "first";
                renderTopThree(classnum, rankList[1]);
                break;
            case 3:
                classnum = "third";
                renderTopThree(classnum, rankList[3]);
                break;
        }
    });
    for (var i = 3; i < 10; i++) {
        var item = rankList[i];
        renderBottomThree(i + 1, item);
    }
}
