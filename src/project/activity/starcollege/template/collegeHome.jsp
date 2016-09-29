<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>院系</title>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no"/>
    <script src = "http://s.xnimg.cn/a12345/wap/static/activity/starcollege/libs.js"></script>
    <link rel="stylesheet" href="http://s.xnimg.cn/a12345/wap/static/activity/starcollege/jiguang.css"/>
</head>
<body>
    <div class="top">
        <div class="JGhead"></div>
        <div class="JGInfo">
            <p class="JGtitle"><span class="xingxing"> </span><span class="t1"> </span><span class="xingxing"> </span></p>
            <p><span class="textLeft">学员人数</span><span class="t2"> </span></p>
            <p><span class="textLeft">总积分</span><span class="t3"> </span></p>
            <p><span class="textLeft">今日排名</span><span class="t4"></span></p>
        </div>
        <div class="JGIntroduction">adsdasdas</div>
        <div class="userInfo">
            <div class="userAvatar"> <img src=""></div>
            <div class="userPoints">
                <p class="point1 paiming">我在学院排名第<span>168</span></p>
                <p class="point2">总积分<span></span></p>
                <p class="point3">本学期积分<span></span></p>
                <p class="point4">昨日积分<span></span></p>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="rankBar">
            <div class="leftBar"></div>
            <div class="rightBar"></div>
        </div>
        <div class="rankList">
            <div class="mingci"></div>
            <div class="nicheng"></div>
            <div class="jifen"></div>
            <div class="rank"></div>
        </div>
    </div>
    <div class="joinUs"></div>
    <div class="goBack"></div>
</body>
<script src = "http://s.xnimg.cn/a12345/wap/static/activity/starcollege/jiguang.js"></script>
<script src = "http://s.xnimg.cn/a12345/wap/static/activity/starcollege/txbb-pop1.js"></script>
<script type="text/javascript">
    var college=${college};
    var hasJoin=${hasJoin};
    var member=${member};
    var weekRank=${weekRank};
    var totalRank=${totalRank};
    var isVJ=${isVJ};
</script>
</html>
