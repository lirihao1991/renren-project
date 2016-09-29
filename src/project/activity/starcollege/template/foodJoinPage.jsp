<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>“美”食嘉年华</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
    <script src = "http://s.xnimg.cn/a86497/wap/static/activity/starcollege/libs.js"></script>
    <link rel="stylesheet" href=" http://s.xnimg.cn/a86543/wap/static/activity/starcollege/foodcarnival.css"/>
    <link rel="stylesheet" href="http://s.xnimg.cn/a86423/wap/static/activity/starcollege/iosSelect.css"/>
</head>
<body>
    <div class="top">
        <div class="activityInfo"></div>
        <p class="textInfo">9月29日活动当天，报名的主播会按照直播时收到的调料礼物，实时调制自己的食材并吃掉，你喜爱的TA尝到的是黑暗料理还是可口美食都由你说了算哦~</p>
    </div>
    <div class="main">
        <div class="enter">
            <div class="line1">
                <div class="textEnter1">所在院系</div>
                <input id="collegeName" type="text" placeholder="请选择一个院系" value=""  onmousedown="return false" onkeypress="javascript:return false" readonly="readonly" />
                <div class="jiantou"></div>
            </div>
            <div class="line2">
                 <div class="textEnter2">直播时间</div>
                <input id="liveTime" type="text" placeholder="点击选择直播时间" value="" readonly="readonly" onmousedown="return false" onkeypress="javascript:return false"/>
                <div class="jiantou"></div>
            </div>
            <div class="line3">
                <div class="textEnter3">直播标题</div>
                <input id="liveTitle" type="text" placeholder="黑暗料理是怎样炼成的"/>
            </div>
            <p class="enterTip">* 同学们需自行控制调味品的添加量，不要引起身体不适，星光学院不设校医哦~</p>
            <div class="enterButton"></div>
        </div>
    </div>
    <div class="bottom">
        <div class="rankBar">
            <div class="JGButton allXi"></div>
            <div class="YYButton allXi"></div>
            <div class="LFButton allXi"></div>
            <div class="CYButton allXi"></div>
        </div>
        <div class="rankList">
            <div class="yiBaoMing"></div>
            <div class="liveTime"></div>
            <div class="rank">
            </div>
        </div>
    </div>
    <div class="backCollege"></div>
</body>
<script src = "http://s.xnimg.cn/a86423/wap/static/activity/starcollege/iosSelect.js"></script>
<script src = "http://s.xnimg.cn/a86517/wap/static/activity/starcollege/txbb-pop2.js"></script>
<script src = " http://s.xnimg.cn/a86542/wap/static/activity/starcollege/foodcarnival.js"></script>
<script type="text/javascript">
var userId=${userId};
var hasJoin=${hasJoin};
var schoolId=${colleageId};
var isV=${isVj};
</script>
</html>