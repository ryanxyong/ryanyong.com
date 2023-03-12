### PURPOSE: TO AUTOMATE THE CREATION OF GALLERY ALBUMS
### especially for Allen King Collection because of
### quantity of albums and photos

### USAGE: navigate to file directory one step below target photos directory
### then run from there

import pathlib
import os

ROOT = 'Object Portfolio/'
INVALID = '.DS_Store'

HEAD = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<link rel="stylesheet" href="../../style.css">\n<link rel="shortcut icon" type="images/x-icon" href="../../favicon.ico">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<meta name="theme-color" content="#1B1C1E">\n<title>Ryan Yong Photo</title>\n</head>\n<div class="navbar">\n<a href="../../swd.html" class="clickable"><h4>Software Developer</h4></a>\n<a href="https://www.ryanyong.com/"><img src="../../images/logo_w.png" class="logo"></a>\n<a href="../../photo.html" class="clickable"><h4>Photographer</h4></a>\n</div>\n<body class="base">\n<h1 class="tagline">' # Add album name after

BODY = '</h1>\n<div id="gallery" class="photo-container">\n<!-- imageadder.js auto adds photos -->\n</div>\n<a href="../../contact.html" class="contact">\n<div class="box">\n<h3>Contact Me</h3>\n</div>\n</a>\n</body>\n<script src="../../scripts/imageadder.js"></script>\n<script>addPhotos(' # Add category name, directory number, number photos after

BOT = ')</script> <!-- category name, directory number, number photos -->\n</html>'

# To find all possible paths in a directory
# Returns a list of all paths
def find_paths(dir):
    start = pathlib.Path(dir)
    paths_gen = start.rglob('*')
    paths = []
    for path in paths_gen:
        if str(path)[-len(INVALID):] != INVALID:
            paths.append(str(path)[len(ROOT):])
    return paths

# Creates the HTML files based on the information from directories
def exportHTML(category_name, obj_name, dir_n, photos_n):
    f = open('output/' + str(dir_n) + '.html', 'w')
    f.write(HEAD + obj_name + BODY + '"' + category_name + '"' + ',' + str(dir_n) + ',' + str(photos_n) + BOT)
    f.close()

# Takes in name of category and directory of photos
# Renames all photos to match format and creates HTML files for each album
def processDIR(category_name, dir):
    paths = find_paths(dir)
    for i in range(114):
        album_paths = find_paths(ROOT + paths[i])
        num_photos = len(album_paths)
        exportHTML(category_name, paths[i], i + 1, num_photos)
        for j in range(num_photos):
            os.rename(ROOT + album_paths[j], ROOT + paths[i] + '/' + str(j + 1) + '.jpg')

        os.rename(ROOT + paths[i], ROOT + str(i+1))

processDIR('akc', ROOT)