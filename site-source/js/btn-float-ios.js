function isIOS() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function(){
    if (isIOS()) {
        document.getElementById('btn-dark').className += ' btn-float-ios';
        document.getElementById('btn-top').className += ' btn-float-ios';
    }
});