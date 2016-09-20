module.exports = function() {

    this.ajaxFunc = function(type, url, data, successFunc) {
        $.ajax({
            type: type,
            url: url,
            data: data,
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
    this.toastfun= function(text, delay) {
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
                selector.parentNode.removeChild(selector);
            }, delay || 2000);
        }
        /*
        根据某字段排序
         */

    this.getSortFun = function(order, sortBy) {  
        var ordAlpah = (order == 'asc') ? '>' : '<';  
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');  
        return sortFun;
    }
    this.numChange = function(num) {
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
}
