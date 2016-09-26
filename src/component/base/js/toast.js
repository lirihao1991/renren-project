require('../scss/toast.scss')

var toastfun = function(text, delay) {
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

window.toastfun = toastfun;

module.exports = toastfun;