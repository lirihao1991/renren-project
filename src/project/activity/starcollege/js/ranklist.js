module.exports = function() {
    /**
     * 生成排行榜
     * @param  {[type]}  rankList 数据
     * @param  {Boolean} isShow   是否显示昨日升降
     * @param  {[type]}  pubFunc  公共函数
     * @param  {[type]}  $obj     添加入的对象，jquery对象
     * @return {[type]}           [description]
     */
    this.studentRank = function (rankList,isShow,pubFunc,$obj){
        var rankListObjArray = rankList;
        rankListObjArray.sort(pubFunc.getSortFun('desc', 'totalScore'));
        rankListObjArray.forEach(function(item, index, array) {
            var str;
            if (index < 3) {
                str = '<div class="fronttree">' +
                    '<div class="ranknum">' +
                    (index + 1) +
                    '</div>' +
                    '<div class="head" style="background-image:url(' + item.headUrl + ')">' +
                    '</div>' +
                    '<div class="usercontent">' +
                    '<div class="userinfo">' +
                    '<div class="usernickname">' +
                    item.userName +
                    '</div>' +
                    '<div class="usercollengname">' +
                    item.collegeName +
                    '</div>' +
                    '<div class="userscore">' +
                    pubFunc.numChange(item.totalScore) +
                    '</div>' +
                    '</div>' +
                    '<div class="devoter">' +
                    '<div class="devoterimg" style="background-image:url(' + item.firstHead + ')">' +
                    '</div>' +
                    '<div class="devoterinfo">' +
                    '<span>守护者</span>' +
                    '<span class="devotername">'+item.firstName+'</span>' +
                    '</div><div class="yesterUporDown showOrhide">昨日+2345</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

            } else if (index < 10) {
                str = '<div class="frontseven">' +
                    '<div class="ranknumseven">' +
                    (index + 1) +
                    '</div>' +
                    '<div class="head" style="background-image:url(' + item.headUrl + ')">' +
                    '</div>' +
                    '<div class="usercontent">' +
                    '<div class="userinfo">' +
                    '<div class="usernickname">' +
                    item.userName +
                    '</div>' +
                    '<div class="usercollengname">' +
                    item.collegeName +
                    '</div>' +
                    '<div class="userscore">' +
                    pubFunc.numChange(item.totalScore) +
                    '</div>' +
                    '</div>' +
                    '<div class="devoter">' +
                    '<div class="devoterimg" style="background-image:url(' + item.firstHead + ')">' +
                    '</div>' +
                    '<div class="devoterinfo">' +
                    '<span>守护者</span>' +
                   '<span class="devotername">'+item.firstName+'</span>' +
                    '</div><div class="yesterUporDown showOrhide">昨日+2345</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else {
                str ='<div class="frontmoreten">'+
                                    '<div class="ranknumseven">'+
                                         (index + 1) +
                                    '</div>'+
                                    '<div class="usercontent">'+
                                        '<div class="userinfo">'+
                                            '<div class="usernickname">'+
                                                 item.userName+
                                            '</div>'+
                                            '<div class="usercollengname">'+
                                            item.collegeName +
                                            '</div>'+
                                            '<div class="userscore">'+
                                                pubFunc.numChange(item.totalScore) +
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                   '</div>';

            }
            $obj.append(str);
        });
        if (isShow) {

            $(".showOrhide").show();
        } else {
            $(".showOrhide").hide();
        }
    }

}
