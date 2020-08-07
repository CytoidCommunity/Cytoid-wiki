jQuery.easing.def = "easeInQuart";
var searchBarON = false;
var onSearchResultPage = false;

function showSearchBar() {
    $('#search-bar').animate({ width: '300px' });
    searchBarON = true;
}

function startSearch() {
    var thing2Search = $("#search-input").val();
    if (searchBarON == false) {
        showSearchBar();
    } else if (thing2Search != "") {
        window.location.href = "/search.html?search=" + thing2Search.split(' ').join('+');
    }
}
function closeSearchBar() {
    var thing2Search = $("#search-input").val();
    if (thing2Search == "" && (!onSearchResultPage)) {
        $('#search-bar').animate({ width: '40px' });
        searchBarON = false;
    } else {
        $("#search-input").val("");
    }
}

$(document).ready(function(){
    $('#search-input').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            startSearch();
            return false;
        } 
    });
});
