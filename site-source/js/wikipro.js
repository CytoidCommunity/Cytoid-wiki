function loadIMG() {
    console.log("running")
    $("img.side-img").each(function () {
        let src = $(this).attr("src");
        let info = $(this).attr("alt");

        let newItemIMG = document.createElement("img");
        newItemIMG.src = src;
        newItemIMG.setAttribute('data-orgain',src);
        newItemIMG.className = 'side-img medium-zoom-image';
        newItemIMG.alt = info;

        let newItemP = document.createElement("p");
        newItemP.innerHTML = info;

        let newItem = document.createElement("div");
        newItem.className = "side-img";

        newItem.appendChild(newItemIMG);
        newItem.appendChild(newItemP);
        //console.log(newItem)

        $(this).hide();
        $(this).before(newItem);
    });

    $('article img').each(function() {
        if (!($(this).attr('data-no-zoom') == '')) {
            $(this).zoomify();
        }
    });
}

