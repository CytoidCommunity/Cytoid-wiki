/*
function img2side (orgain_pic) {
    var pic_source = orgain_pic.src;
    var pic_name = orgain_pic.alt;

    var newbox = "<div class=\"side-img\"><img src=\""
                    +orgain_pic.src+
                    "\" alt=\""
                    +orgain_pic.alt+
                    "\"><p>"
                    +orgain_pic.alt+
                    "</p></div>"
    
    orgain_pic.style="display:none";
    //orgain_pic.after(sidebox)
    orgain_pic.insertAdjacentHTML("afterend",newbox)
}

    var pics = document.getElementsByClassName("side-img");
//    for (let readypic in pics){
//        img2side(readypic);
//    }
img2side(pics[0]);

*/
var pics = document.getElementsByClassName("side-img");
var num=0;
for (let pic in pics){
    var pic_source = pics[num].src;
    var pic_name = pics[num].alt;

    var newbox = "<div class=\"side-img\"><img src=\""
                    +pics[num].src+
                    "\" alt=\""
                    +pics[num].alt+
                    "\"><p>"
                    +pics[num].alt+
                    "</p></div>"

    pics[num].style="display:none";
    //pics[num].after(sidebox)
    pics[num].insertAdjacentHTML("afterend",newbox)
    num++;
}

