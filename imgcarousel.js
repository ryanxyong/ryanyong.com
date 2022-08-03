// Ryan Yong
// Last updated: 6.15.22

// To hold all names of albums and their starting indices
let albumNames = ["conch", "nature", "architecture", "dartlib", "boots"]
let currAlbumPic = []

// Initiates current album photo index
for (albumIdx = 0; albumIdx < albumNames.length; albumIdx++) {
  currAlbumPic.push(1);
}

// To go to the next photo
function nextPic(albumIdx) {
  photoCarousel(albumIdx, currAlbumPic[albumIdx] += 1);
}

// To go to the previous photo
function prevPic(albumIdx) {
  photoCarousel(albumIdx, currAlbumPic[albumIdx] -= 1);
}

// Changes the shown photo
function photoCarousel(albumIdx, currPic) {
  let i;
  var pics = document.getElementsByClassName(albumNames[albumIdx]);

  if (currPic > pics.length) {currAlbumPic[albumIdx] = 1}
  if (currPic < 1) {currAlbumPic[albumIdx] = pics.length}
  currPic = currAlbumPic[albumIdx];

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  pics[currPic-1].style.display = "block";
}

// // Runs through to show all base images on page load
// for (albumIdx = 0; albumIdx < albumNames.length; albumIdx++) {
//   photoCarousel(albumIdx, currAlbumPic[albumIdx]);
// }

// Loads initial image
function loadStart(albumIdx) {
  photoCarousel(albumIdx, 1);
}
