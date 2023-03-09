let ROOT = "images/home/"
let bg = document.getElementById('home-bg');
// let prev_img = "me_bg.JPG"
// let curr_img = document.documentElement;

document.onmousemove = mouseCoordinates;

function mouseCoordinates(event){
    let x = event.clientX;
    let y = event.clientY;

    // let img_name = ""

    if (y < window.innerHeight * .65 && y > window.innerHeight * .32) {
        if (x < window.innerWidth / 2) {
            img_name = "swd.jpg"
        } else {
            img_name = "photo.jpg"
        }
    } else {
        img_name = "me_bg.jpg"
    }

    // if (prev_img != img_name) { // restart css animation
    //     // curr_img.style.setProperty('--img_name', "url(" + ROOT + img_name + ")");
    //     bg.style.animation = 'none';
    //     bg.offsetHeight; /* trigger reflow */
    //     bg.style.animation = null; 
    // }
    
    // prev_img = img_name

    bg.style.backgroundImage = "url(" + ROOT + img_name + ")"
    }