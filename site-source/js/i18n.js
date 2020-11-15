var langVer = 2;
//
// localStorage.getItem("langSupport")
// localStorage.getItem("langVer")
// localStorage.getItem("lang")
//
async function updateLang() {
    let url = '/site-source/data/i18n.json';
    try {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            let data = JSON.stringify(json);
            localStorage.setItem("langSupport", data);
        } else console.log('load failed with status code' + response.status);
    } catch (e) {
        console.log('error: ' + e.toString());
    }

    // fetch(url).then(function (response) {
    //     //打印返回的json数据
    //     response.json().then(function (data) {
    //         //console.log(JSON.stringify(data));
    //         localStorage.setItem("langSupport", JSON.stringify(data));
    //     })
    // }).catch(function (e) {
    //     console.log('error: ' + e.toString());
    // })
}

function matchLang(lang) {
    let langSupport = JSON.parse(localStorage.getItem("langSupport"));
    let matchList = langSupport.match;
    //console.log(matchList);
    for (supportLang in matchList) {
        //console.log(matchList[supportLang])
        if (supportLang == lang) return matchList[supportLang];
    }
    return "en";
}//匹配到: 输出结果, 没有匹配到: 输出en

function isSupportLang(lang) {
    let langSupport = JSON.parse(localStorage.getItem("langSupport"));
    let supportList = langSupport.supports;
    for (supportLang in supportList) {
        //console.log(supportList[supportLang])
        if (supportList[supportLang] == lang) return 1;
    }
    return 0;
}//

function getUserLang() {
    let userLang;
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

    let langSupport = JSON.parse(localStorage.getItem("langSupport"));
    let langIndex = langSupport.lang[lang];
    console.log(langSupport.lang[lang]);

    document.getElementById("motto").innerHTML = langIndex.motto;
    document.getElementById("ReadWIKI").innerHTML = langIndex.ReadWIKI;
    document.getElementById("ReadWIKI").href = langIndex.wiki;
    document.getElementById("cytoidLink").innerHTML = langIndex.io;
    document.getElementById("cytoidLink").href = langIndex.site;

    document.getElementById("loadingLanguagesHit").style.display = "none";
    document.getElementById("cover-main").style.display = "";
    document.getElementById("chooseLanguage").style.display = "";
}

window.onload = async () => {
    if (!(localStorage.getItem("langSupport")) || langVer != JSON.parse(localStorage.getItem("langSupport")).version) await updateLang();
    lang = getUserLang();
    console.log('Version: ' + JSON.parse(localStorage.getItem("langSupport")).version + '; Language: '+lang);
    loadLang(lang);
}

function manualLang(lang) {
    console.log(isSupportLang(lang));
    if (lang == "Auto") {
        lang = getUserLang();
        //console.log(lang)
        loadLang(lang);
        localStorage.removeItem("lang");
    } else if (!isSupportLang(lang)) {
        alert("Comming Soon!");
        return;
    } else {
        localStorage.setItem("lang",lang);
        loadLang(lang);
    }
}