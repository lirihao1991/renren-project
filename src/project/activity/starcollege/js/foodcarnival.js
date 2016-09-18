require('../scss/foodcarnival.scss')     //gennerate by pms , don't delete
var collegeData = [
    {'id': '10001', 'value': '极光学院'},
    {'id': '10002', 'value': '影月学院'},
    {'id': '10003', 'value': '长风学院'},
    {'id': '10004', 'value': '流云学院'},
];
var timeHour=[ 
    {'id': '20000', 'value': '0'},
    {'id': '20001', 'value': '1'},
    {'id': '20002', 'value': '2'},
    {'id': '20003', 'value': '3'},
    {'id': '20004', 'value': '4'},
    {'id': '20005', 'value': '5'},
    {'id': '20006', 'value': '6'},
    {'id': '20007', 'value': '7'},
    {'id': '20008', 'value': '8'},
    {'id': '20009', 'value': '9'},
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
    {'id': '30006', 'value': '60'},
];
//函数开始
$(function(){
     collegeSelect();
     timeSelect();
     pickLiveList();
})
function collegeSelect(){
 $('#collegeName').on('click',function(){
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
    $('#liveTime').on('click',function(){
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
    var xiImg1=require('../img/jiguangButton.png');
    var xiImg2=require('../img/yingyueButton.png');
    var xiImg3=require('../img/liufengButton.png');
    var xiImg4=require('../img/changyunButton.png');
    $('.JGButton').on('tap',function(){
        $('.rankBar').css({"background":'url('+xiImg1+') no-repeat 50% 50%'});
    });
    $('.YYButton').on('tap',function(){
        $('.rankBar').css({"background":'url('+xiImg2+') no-repeat 50% 50%'});
    });
    $('.LFButton').on('tap',function(){
        $('.rankBar').css({"background":'url('+xiImg3+') no-repeat 50% 50%'});
    });
    $('.CYButton').on('tap',function(){
        $('.rankBar').css({"background":'url('+xiImg4+') no-repeat 50% 50%'});
    });
}
