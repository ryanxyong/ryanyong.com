// Ryan Yong
// Last updated: 9.12.22

let picTag = "pic"
let picIdx = 1

// To go to the next photo
function nextPic() {
  picIdx += 1;
  photoCarousel();
}

// To go to the previous photo
function prevPic() {
  picIdx -= 1
  photoCarousel();
}

// Changes the shown photo
function photoCarousel() {
  let i;
  var pics = document.getElementsByClassName(picTag);

  if (picIdx > pics.length) {picIdx = 1}
  if (picIdx < 1) {picIdx = pics.length}

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  pics[picIdx-1].style.display = "block";
}

// Loads initial image
function loadStart() {
  photoCarousel(picTag, picIdx);
}
