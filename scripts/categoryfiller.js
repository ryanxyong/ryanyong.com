const ROOT = "../images/photo/";

let category_div = document.getElementById("category");

function addThumbs(category, dirs_num) {
    for (let i = 0; i < dirs_num; i++) {
        category_div.innerHTML += '<a href="' + category + "/" + (i+1).toString() + '.html"><img src="' + ROOT + category + '/' + (i+1).toString() + '/' + "1" + '.jpg" class="clickable photo-thumb"></a>\n';
    }
}