let albumNames = ["conch", "nature", "architecture", "dartlib"]
let currConchPic = 1;
let currNaturePic = 1;
let currArchitecturePic = 1;
let currDartlibPic = 1;

function nextPic(albumIdx) {
  if (albumIdx == 0) {photoCarousel(albumIdx, currConchPic += 1)}
  else if (albumIdx == 1) {photoCarousel(albumIdx, currNaturePic += 1)}
  else if (albumIdx == 2) {photoCarousel(albumIdx, currArchitecturePic += 1)}
  else if (albumIdx == 3) {photoCarousel(albumIdx, currDartlibPic += 1)}
}

function prevPic(albumIdx) {
  if (albumIdx == 0) {photoCarousel(albumIdx, currConchPic -= 1)}
  else if (albumIdx == 1) {photoCarousel(albumIdx, currNaturePic -= 1)}
  else if (albumIdx == 2) {photoCarousel(albumIdx, currArchitecturePic -= 1)}
  else if (albumIdx == 3) {photoCarousel(albumIdx, currDartlibPic -= 1)}
}

function photoCarousel(albumIdx, n) {
  let i;
  var pics = document.getElementsByClassName(albumNames[albumIdx]);
  console.log(pics)
  console.log(n)
  console.log(albumIdx)

  if (albumIdx == 0) {
    if (n > pics.length) {currConchPic = 1}
    if (n < 1) {currConchPic = pics.length}
    n = currConchPic;
  } else if (albumIdx == 1) {
    if (n > pics.length) {currNaturePic = 1}
    if (n < 1) {currNaturePic = pics.length}
    n = currNaturePic;
  } else if (albumIdx == 2) {
    if (n > pics.length) {currArchitecturePic = 1}
    if (n < 1) {n = pics.length}
    n = currArchitecturePic;
  } else if (albumIdx == 3) {
    if (n > pics.length) {currDartlibPic = 1}
    if (n < 1) {n = pics.length}
    n = currDartlibPic;
  }

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  console.log(pics[0]);

  pics[n-1].style.display = "block";
  console.log(n)
}

photoCarousel(0, currConchPic);
photoCarousel(1, currNaturePic);
photoCarousel(2, currArchitecturePic);
photoCarousel(3, currDartlibPic);