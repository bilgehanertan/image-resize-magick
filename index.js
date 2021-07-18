var im = require('imagemagick');
var fs = require('fs'),
    gm = require('gm').subClass({
        imageMagick: true
    });
const path = require('path');
const chalk = require('chalk');


const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            if (file !== "desktop.ini")
                arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

const inputDir = "inputPathDir";
const outputDir = "outPathDir";
const width = 1077;

const allFiles = getAllFiles(inputDir)

allFiles.forEach(function (item, index) {
    console.log(`${chalk.magenta(item)} File read success!`)
    let outputPath = item.replace(inputDir, outputDir);

    gm(item)
        .filter("Triangle")
        .define("filter:support=2")
        .thumbnail(width)
        .unsharp(0.25, 0.25, 8, 0.065)
        .dither(false)
        .quality(100)
        .define("jpeg:fancy-upsampling=off")
        .define("png:compression-filter=5")
        .define("png:compression-level=9")
        .define("png:compression-strategy=1")
        .define("png:exclude-chunk=all")
        .interlace("none")
        .colorspace("sRGB")
        .strip()
        .write(outputPath, function (err) {
            if (!err) console.log(`${chalk.green(item)} => Resize success!`)
            else {
                console.log(`${chalk.red(item)} ERROR! ==> `, err);
            }
        });


})