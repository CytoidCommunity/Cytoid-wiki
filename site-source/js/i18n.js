var version = 1;
//
// localStorage.getItem("langSupport")
// localStorage.getItem("langVer")
// localStorage.getItem("lang")
//
function updateLang() {
    var url = "/site-source/data/i18n.json"
    fetch(url).then(function (response) {
        //打印返回的json数据
        response.json().then(function (data) {
            //console.log(JSON.stringify(data));
            localStorage.setItem("langSupport", JSON.stringify(data));
        })
    }).catch(function (e) {
        console.log('error: ' + e.toString());
    })
}//

function matchLang(lang) {
    var langSupport = JSON.parse(localStorage.getItem("langSupport"));
    var matchList = langSupport.match;
    //console.log(matchList);
    for (supportLang in matchList) {
        //console.log(matchList[supportLang])
        if (supportLang == lang) return matchList[supportLang];
    }
    return "en";
}//匹配到: 输出结果, 没有匹配到: 输出en

function isSupportLang(lang) {
    var langSupport = JSON.parse(localStorage.getItem("langSupport"));
    var supportList = langSupport.supports;
    for (supportLang in supportList) {
        //console.log(supportList[supportLang])
        if (supportList[supportLang] == lang) return 1;
    }
    return 0;
}//

function getUserLang() {
    var userLang;
    if (!(localStorage.getItem("lang"))) {
        userLang = matchLang(navigator.language);
    } else {
        if (isSupportLang(localStorage.getItem("lang"))) {
            userLang = localStorage.getItem("lang");
        }
    }
    return userLang;
}//

function loadLang(lang) {
    document.getElementById("loadingHit").style.display = "none";
    //document.getElementById("cover-main").style.display = "none";
    document.getElementById("loadingLanguagesHit").style.display = "";

    var langSupport = JSON.parse(localStorage.getItem("langSupport"));
    var langIndex = langSupport.lang[lang];
    console.log(langSupport.lang[lang])

    document.getElementById("motto").innerHTML = langIndex.motto;
    document.getElementById("ReadWIKI").innerHTML = langIndex.ReadWIKI;
    document.getElementById("ReadWIKI").href = langIndex.wiki;
    document.getElementById("cytoidLink").innerHTML = langIndex.io;
    document.getElementById("cytoidLink").href = langIndex.site;

    document.getElementById("loadingLanguagesHit").style.display = "none";
    document.getElementById("cover-main").style.display = "";
    document.getElementById("chooseLanguage").style.display = "";
}

window.onload = function () {
    if (!(localStorage.getItem("langVer")) || version != localStorage.getItem("langVer")) updateLang();
    lang = getUserLang();
    //console.log(lang)
    loadLang(lang);
}

function manualLang(lang) {
    console.log(isSupportLang(lang))
    if (lang == "Auto"){
        lang = getUserLang();
        //console.log(lang)
        loadLang(lang);
    } else if (!isSupportLang(lang)) {
        alert("Comming Soon! ");
        return;
    } else {
        loadLang(lang);
    }
}