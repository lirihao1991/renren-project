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
        /*
        根据某字段排序
         */
    this.keysrt = function(key, desc) {

        return function(a, b) {
            return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
        }
    }
   this.numChange=  function (num) {
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























event = function() {
    // do more
    return {
        bind: function() {},
        unbind: function() {},
        trigger: function() {}
    };
}();
