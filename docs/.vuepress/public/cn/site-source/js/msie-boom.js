function isIE() {
    if (/(MSIE|Trident)/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}


if (isIE()) {
    document.execCommand("Stop");
    document.getElementsByTagName('body')[0].className = '';
    document.getElementsByTagName('body')[0].innerHTML = '<div id="app" style="font-family: sans-serif">× NO IE ×</div>';
}