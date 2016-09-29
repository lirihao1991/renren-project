<%@ page contentType="text/html;charset=UTF-8" language="java"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <title>星光学院开学啦</title>
                <meta charset="UTF-8">
                <meta name="format-detection" content="telephone=no" />
                <meta name="screen-orientation" content="portrait">
                <meta name="x5-orientation" content="portrait">
                <script src="http://s.xnimg.cn/a86497/wap/static/activity/starcollege/libs.js"></script>
                <script src="http://s.xnimg.cn/a86482/wap/static/activity/starcollege/txbb-pop1.js"></script>
                <link rel="stylesheet" href="http://s.xnimg.cn/a86548/wap/static/activity/starcollege/starcollege.css" />
                <style>

                </style>
            </head>

            <body>
                <div class="content">
                    <div class="headimg">
                    </div>
                    <p class="explain">
                        在人人星球上有一所顶尖的魔法大学——星光学院。学院诞生了4个拥有不同技能的魔法派系：<span>极光系</span>、<span>影月系</span>、<span>流风系</span>、<span>长云系</span>，只有少数人才能成为最优秀的魔法师。
                    </p>
                     <p class="explain">
            主播选择派系加入活动，开启专属技能。活动期间主播得到的星光值将计算积分，积分高的主播活动结束后可获得<span>iPhone7 plus等一系列大奖</span>。同时观众根据直播观看和充值情况，也将得到人人送出的丰厚奖励。
        </p>
        <div class="details">
            <div class="btnDetails">

            </div>
        </div>
                    <div class="activityearth1">
                        <div class="activitys">
                            <div class="road">
                            </div>
                               <div class="activityfood gray">
                    <div class="food">
                    </div>
                    <div class="foodcaidai">
                    </div>
                </div>
                <div class="activityearthonehour gray">
                    <div class="starhour">
                    </div>
                    <div class="clode">
                    </div>
                    <div class="hourcaidai">
                    </div>
                    <!-- <canvas id="onehourcanvas" width="228" height="250"></canvas> -->
                </div>
                <div class="activitynightparty gray">
                    <div class="moon">
                    </div>
                    <div class="bat">
                    </div>
                    <div class="pumpkin">
                    </div>
                    <div class="caidaiparty">
                    </div>
                </div>
                <div class="activityprotectlove gray">
                    <div class="leftwing">
                    </div>
                    <div class="rightwing">
                    </div>
                    <div class="protectlove">
                    </div>
                </div>
                            <div class="activityroad">
                            </div>
                            <div class="activityprocess1">
                            </div>
                            <div class="activityprocess2">
                            </div>
                            <div class="activityprocess3">
                            </div>
                            <div class="activityprocess4">
                            </div>
                        </div>
                    </div>
                    <div class="colleges">
                        <ul>
                            <li>
                                <div class="licontent1">
                                    <div class="tapdiv" data-collegeid="1">
                                         <div class="norank1">
                                        </div>
                                        <div class="collegename1">极光系<span></span><span>积分</span></div>
                                        </div>
                                        <div class="divjoin1 divjoinbtn" data-collegeid="1">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="licontent2">
                                <div class="tapdiv" data-collegeid="3">
                                    <div class="norank2">
                                    </div>
                                    <div class="collegename2">影月系<span></span><span>积分</span></div>
                                </div>
                                    <div class="divjoin2 divjoinbtn" data-collegeid="3">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="licontent3">
                                <div class="tapdiv" data-collegeid="5">
                                    <div class="norank3">
                                    </div>
                                    <div class="collegename3">流风系<span></span><span>积分</span></div>
                                     </div>
                                    <div class="divjoin3 divjoinbtn" data-collegeid="5">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="licontent4">
                                 <div class="tapdiv" data-collegeid="7">
                                    <div class="norank4">
                                    </div>
                                    <div class="collegename4">长云系<span></span><span>积分</span></div>
                                     </div>
                                    <div class="divjoin4 divjoinbtn" data-collegeid="7">
                                    </div>
                                </div>
                            </li>
                        </ul>
                         <div class="explaintext">
                    *本次活动最终解释权归人人网所有
                </div>
                    </div>
                    <div class="greendiv">
                        <div class="river">
                        </div>
                        <div class="whitediv">
                            <div class="rank">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="mycollege">

                </div>
            </body>
            <script>
                var collegelist = ${collegelist};
                var rankList = ${rankList};
                  var hasJoin = ${hasJoin};
                  var member = ${member};
                  var nowtime=${currentTime};
                  var isVj=${isVJ};
            </script>
            <script src="http://s.xnimg.cn/a86565/wap/static/activity/starcollege/starcollege.js"></script>

            </html>
