const ROOT = "../images/photo/";

let category_div = document.getElementById("category");

function addThumbs(category, dirs_num) {
    for (let i = dirs_num; i > 0; i--) {
        category_div.innerHTML += '<a href="' + category + "/" + (i).toString() + '.html"><img src="' + ROOT + category + '/' + (i).toString() + '/' + "1" + '.jpg" class="clickable photo-thumb"></a>\n';
    }
}