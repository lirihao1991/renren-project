<%@ page contentType="text/html;charset=UTF-8" language="java"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <title>Document</title>
                <meta charset="UTF-8">
                <meta name="format-detection" content="telephone=no" />
                <meta name="screen-orientation" content="portrait">
                <meta name="x5-orientation" content="portrait">
                <script src="http://s.xnimg.cn/a12345/wap/static/activity/starcollege/libs.js"></script>
                <link rel="stylesheet" href="http://s.xnimg.cn/a12345/wap/static/activity/starcollege/starcollege.css" />
                <style>

                </style>
            </head>

            <body>
                <div class="content">
                    <div class="headimg">
                    </div>
                    <div class="explain">
                        在人人星球上有一所顶尖的魔法大学——星光学院。学院诞生了4个拥有不同技能的魔法派系：<span>极光系</span>、<span>影月系</span>、<span>流风系</span>、<span>长云系</span>，只有少数人才能成为最优秀的魔法师。
                    </div>
                    <div class="activityearth1">
                        <div class="activitys">
                            <div class="road">
                            </div>
                            <div class="activityfood">
                                <canvas id="canvasfood" width="228" height="225">
                                </canvas>
                            </div>
                            <div class="activityearthonehour">
                                <canvas id="onehourcanvas" width="228" height="250"></canvas>
                            </div>
                            <div class="activitynightparty">
                                <canvas id="nightcanvas" width="244" height="218">
                                </canvas>
                            </div>
                            <div class="activityprotectlove">
                                <canvas id="protectcanvas" width="239" height="222">
                                </canvas>
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
                                        <div class="divjoin1" data-collegeid="1">
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
                                    <div class="divjoin2" data-collegeid="3">
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
                                    <div class="divjoin3" data-collegeid="5">
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
                                    <div class="divjoin4" data-collegeid="7">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="greendiv">
                        <div class="river">
                        </div>
                        <div class="whitediv">
                            <div class="rank">
                         <!--        <div class="fronttree">
                                    <div class="ranknum">
                                        1
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dayUporDown">
                                        昨日+2345
                                    </div>
                                </div>
                                <div class="fronttree">
                                    <div class="ranknum">
                                        1
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="fronttree">
                                    <div class="ranknum">
                                        1
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frontseven">
                                    <div class="ranknumseven">
                                        100
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frontseven">
                                    <div class="ranknumseven">
                                        4
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frontseven">
                                    <div class="ranknumseven">
                                        4
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frontseven">
                                    <div class="ranknumseven">
                                        4
                                    </div>
                                    <div class="head">
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                2.4亿
                                            </div>
                                        </div>
                                        <div class="devoter">
                                            <div class="devoterimg">
                                            </div>
                                            <div class="devoterinfo">
                                                <span>赞助人</span>
                                                <span class="devotername">赞助人的名字</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="frontmoreten">
                                    <div class="ranknumseven">
                                        11
                                    </div>
                                    <div class="usercontent">
                                        <div class="userinfo">
                                            <div class="usernickname">
                                                用户名某某某斯蒂芬
                                            </div>
                                            <div class="usercollengname">
                                                流风系
                                            </div>
                                            <div class="userscore">
                                                3547.4万
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mycollege">

                </div>
            </body>
            <script>
                var collegelist = '${collegelist}';
                  var rankList = '${rankList}';
                  var hasJoin = '${hasJoin}';
                  var member = '${member}';
            </script>
            <script src="http://s.xnimg.cn/a12345/wap/static/activity/starcollege/starcollege.js"></script>

            </html>
