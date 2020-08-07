function getForm(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return decodeURI(returnValue);
    }
}

const search = new jekyllSearch(
    '/assets/data/search.json',
    '#search-input',
    '#list',
    'https://alembic.darn.es'
);
search.init();

var keyword = getForm("search");
var searchInputer = document.getElementById("search-input");
//if (keyword != "") document.title = keyword+" - "+document.title;
searchInputer.value = keyword;
showSearchBar();
onSearchResultPage = true;

