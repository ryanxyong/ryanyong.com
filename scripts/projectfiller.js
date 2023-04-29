const ROOT = "../images/swd/";

let project_div = document.getElementById("project");

let pages = ['../swd/jmmr.html', 'https://github.com/ryanxyong/pong', 'https://github.com/ryanxyong/tinysearchengine', 'https://drive.google.com/drive/folders/1W7GTadLWxzSHAnUb_lbTwP0wrhZeEq5z?usp=sharing', 'https://github.com/ryanxyong/ryanyong.com', 'https://drive.google.com/drive/folders/1A_6VM610AC2T6dmRUh5Iv-8plJxeVICS?usp=sharing', 'https://github.com/ryanxyong/gradientpaste', 'https://drive.google.com/drive/folders/1ed3E-Re82xpIGHbpbIvY5a5evoStnKDT?usp=sharing', 'https://drive.google.com/drive/folders/1bGn2qDDOvBpGLh8rkRHFroxgc7Gw_51n?usp=sharing', 'https://drive.google.com/drive/folders/1TIWlnO7G1yOsvQ02fVP1Zivu13nNDryg?usp=sharing', 'https://github.com/ryanxyong/computerarchitecture']

let pageTitles = ['The John Milton Reading Room', 'Pong arcade game', 'Tiny Search Engine: Crawler, indexer, and querier', 'Nuggets 2: Based on the computer game Rogue', 'My personal website: Here!', 'Live Sketch App', 'Gradient-domain Copy Paste', 'Handwriting Recognition', 'Sentence Part of Speech Identifier', 'Huffman File (De)compression', 'Computer Built from Scratch']

function addThumbs(num_pages) {
    for (let i = 0; i < num_pages; i++) {
        project_div.innerHTML += '<a href="' + pages[i] + '"><img src="' + ROOT + (i+1).toString() + '.jpg" class="clickable photo-thumb"></a>\n';
    }
}