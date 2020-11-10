const hasNativePrefersColorScheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
var sysDark = 0, lockDark = false, darkCookie = 00;

darkCookie = document.cookie.replace(/(?:(?:^|.*;\s*)dark-theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if ((darkCookie%10) != (darkCookie/10)) {
    lockDark = true;
}

if (hasNativePrefersColorScheme == true) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !lockDark) {
        // 当前系统主题为深色模式
        document.body.classList.add('dark-theme');
    } else if (lockDark && (darkCookie/10 == 1)){
        // 当前系统主题不为深色模式, 但是Cookies是强制深色模式
        document.body.classList.add('dark-theme');
    }


    window.matchMedia('(prefers-color-scheme: dark)').addListener(({matches}) => {
        dispatchEvent(new CustomEvent("colorschemechange", {
            detail: {colorScheme: (matches ? "dark" : "daily")}
        }));
    });
    window.addEventListener('colorschemechange', (e) => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // 当前系统主题为深色模式
            if (!lockDark){
                document.body.classList.add('dark-theme');
            }
            sysDark = 1;
        } else {
            if (!lockDark){
                document.body.classList.remove('dark-theme');
            }
            sysDark = 0;
        }
    });        
}

function manualDark() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.cookie = 'dark-theme=11;path=/';
            lockDark = false;
        } else {
            document.cookie = 'dark-theme=10;path=/';
            lockDark = true;
        }
    } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.cookie = 'dark-theme=01;path=/';
            lockDark = true;
        } else {
            document.cookie = 'dark-theme=00;path=/';
            lockDark = false;
        }    
    }
}

$(document).ready(function(){
    document.body.classList.remove('notranload');
});
