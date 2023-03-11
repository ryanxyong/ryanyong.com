const ROOT = "../../images/photo/";

let photo_div = document.getElementById("gallery");

function addPhotos(category, dir_num, num_pics) {
    
    for (let i = 0; i < num_pics; i++) {
        photo_div.innerHTML += '<img src="' + ROOT + category + '/' + dir_num.toString() + '/' + (i+1).toString() + '.jpg" class="photo">\n';
    }
}