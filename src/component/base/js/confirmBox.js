/*
 * name : confirmBox
 * describ: 弹出确认框 
 * author: rihao.li
 * contact: rihao.li@renren-inc.com
 * params @ option  object 配置选项
 */


require('../scss/confirmBox.scss');

var ConfirmBox = function(option){

    if (!option.btnInfo || !option.btnInfo instanceof Array){
        option.btnInfo = [{},{}];
    }

    var confirmBoxHTML = '<div class="body"><div id="btnContainner"></div></div></div>';
    var confirmBox = document.createElement("div");
    var confirmBody,confirmContent;

    confirmBox.id = "confirmBoxContainer";
    confirmBox.innerHTML = confirmBoxHTML;
    document.body.appendChild(confirmBox);
    confirmBody = confirmBox.firstChild;
    confirmContent = document.createElement('p');
    confirmContent.className = "content";
    confirmContent.innerHTML = option.text;
    confirmBody.insertBefore(confirmContent, confirmBody.firstChild);

    confirmBox.onclick = cancle;

    makeConfirmBtn(confirmBody, option);

    position(confirmBody);
}


function makeConfirmBtn(confirmBody, option){
    var btnContainner = confirmBody.getElementsByTagName('div')[0],
        btnHTML;

    btnContainner.innerHTML = option.btnInfo.map(renderBtn).join('');
    bindEvent(option, btnContainner);
}

function renderBtn(e,i){
    e.text = (i == 0 && !e.text) ? '取消' : e.text;
    e.text = (i == 1 && !e.text) ? '确定' : e.text;
    e.backgroundColor = (i == 0 && !e.backgroundColor) ? '#fff' : e.backgroundColor;
    e.backgroundColor = (i == 1 && !e.backgroundColor) ? '#009fec' : e.backgroundColor;
    e.textColor = (i == 0 && !e.textColor) ? '#282828' : e.textColor;
    e.textColor = (i == 1 && !e.textColor) ? '#fff' : e.textColor;

    return '<div class="btn" style="background:' + e.backgroundColor + ';color:' + e.textColor + '">' + e.text + '</div>';
}

function bindEvent(option, btnContainner){
    var btns = btnContainner.getElementsByTagName('div');
    for (var i = 0; i < btns.length; i++){
        btns[i].onclick = option.btnInfo[i].callBack ? option.btnInfo[i].callBack : cancle;
        btns[i].close = this.close;
    }

}


function cancle(e){
    if (e.target.id != 'confirmBoxContainer' && e.target.className != 'btn') return;
    document.getElementById('confirmBoxContainer').remove();
    e.stopPropagation();
    e.preventDefault();
}

function position(confirmBody){
    confirmBody.style.marginTop = (-confirmBody.offsetHeight/2) + 'px'
}
function close (){
    document.getElementById('confirmBoxContainer').remove();
}

window.ConfirmBox = ConfirmBox;

module.exports = ConfirmBox;