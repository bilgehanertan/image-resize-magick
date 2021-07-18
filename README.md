## Image resizing with ImageMagick library

This node.js app makes it easy to resize images while preservin the image quality with the help of gm and imagemagick libraries.

## Step 1 - Clone the repository:

From the command line, clone the repository:

```sh
$ git clone https://github.com/bilgehanertan/image-resize-magick
```

## Step 2 - Change the required 3 variables in index.js

    In index.js,
    ```node.js
    const inputDir = "inputPathDir"; // Input directory relative path, which contains all images.
    const outputDir = "outPathDir"; // Output directory relative path, which will be new images written. Note that the app will write images in exact file structure pattern as it is read. Thus, ensure that all folders exist; you can duplicate the original image folder and rename it. The app will overwrite new images into the old images.
    const width = 1077; // Desired width of the new images.
    ```


## Step 3 - Run and witness the magick

```sh
    node index.js
```