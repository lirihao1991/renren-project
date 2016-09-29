require('../scss/award.scss')     //gennerate by pms , don't delete

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
function awardList(){
	var getColleageId=function(collegeid){
		var str="";
		switch(collegeid){
			case 5:
                str="流风系";
                	break;
            case 1:
                str="极光系";                  
                    break;
            case 7:
                str="长云系";                   
                    break;
            case 3:
                str="影月系";                    
                    break;
		}
		return str;
	};    
	$.ajax({
		url:"http://huodong.renren.com/common/foodFestival/rankList",
		type:'get',
		dataType:'json',
		data:{
			page:1,
            limit:10,
            activityId:1
		},
		success:function(msg){
			console.log(msg);
			if(msg.code==0){				
				var topThreeNumArray=[2,1,3];
				topThreeNumArray.forEach(function(item){
				var str='<div data-userid="'+msg.rankList[item-1].userId+ '" class="top-containner top'+item+'">'+
				'<div class="star star'+item+'"></div>'+
				'<div class="act-containner'+item+'">'+
					'<img src="'+msg.rankList[item-1].headUrl+'">'+
					'<div class="sweet-anchor'+item+'"></div>'+
				'</div>'+
				'<div class="font'+item+'">'+
				'<p class="name'+item+'">'+msg.rankList[item-1].userName+'</p>'+
				'<p class="group'+item+'">'+getColleageId(msg.rankList[item-1].colleageId)+'</p>'+
				'<p class="num'+item+'">'+numChange(msg.rankList[item-1].totalStar)+'</p>'+
				'</div>'+
				'</div>';
				$(".top").append(str);
				});

				for(var i=3;i<msg.rankList.length;i++){
					var str='<li data-userid="'+msg.rankList[i].userId+ '"><div class="rankNum">'+(i+1)+'</div>'+
					'<img src="'+msg.rankList[i].headUrl+'">'+
					'<div class="pName">'+
					'<p class="pName1">'+msg.rankList[i].userName+'</p>'+
					'<p class="pName2">'+getColleageId(msg.rankList[i].colleageId)+'</p>'+
					'</div>'+
					'<div class="tallNum">'+numChange(msg.rankList[i].totalStar)+'</div>'+
					'<div class="lastImg">'+					
					'</div>'+
				'</li>';
					$("#score").append(str);					
				}			

			}
		}
	});
}
$(".top").on("click",".top-containner",function(){
	var userid=$(this).data("userid");
	location.href="http://www.renren.com/"+userid+"/profile"; 
});
$("#score").on("click","li",function(){
	var userid=$(this).data("userid");
	location.href="http://www.renren.com/"+userid+"/profile"; 
});
$(".return").click(function(){
	 location.href = "http://huodong.renren.com/common/activity/activityHome";
})
awardList();