var imgCache = {};

function hexToRgb(hex) {
    return [parseInt('0x' + hex.slice(1, 3)), parseInt('0x' + hex.slice(3, 5)), parseInt('0x' + hex.slice(5, 7))]
}

function tailor(src, foreground, callback = null) {
    if (imgCache[src] != undefined) {
        callback(imgCache[src]);
    }
    foreground = hexToRgb(foreground);
    img = new Image();
    img.src = src;
    img.onload = function() {
        canva = document.createElement('canvas');
        ctx = canva.getContext('2d');
        canva.width = img.width;
        canva.height = img.height;
        ctx.drawImage(img, 0, 0);
        imgData = ctx.getImageData(0, 0, canva.width, canva.height);
        lOffset = canva.width, rOffset = 0, tOffset = canva.height, bOffset = 0;
        for (w = 0; w < canva.width; w++) {
            for (h = 0; h < canva.height * 4 / 7; h++) {
                pos = (w + canva.width * h) * 4;
                r = imgData.data[pos];
                g = imgData.data[pos + 1];
                b = imgData.data[pos + 2];
                rgba = [255, 255, 255, 255];
                tolerance = Math.sqrt((r - rgba[0]) * (r - rgba[0]) + (g - rgba[1]) * (g - rgba[1]) + (b - rgba[2]) * (b - rgba[2]));
                if (tolerance >= 300) {
                    bOffset = Math.max(h, bOffset);
                    rOffset = Math.max(w, rOffset);
                    tOffset = Math.min(h, tOffset);
                    lOffset = Math.min(w, lOffset);
                    imgData.data[pos] = foreground[0];
                    imgData.data[pos + 1] = foreground[1];
                    imgData.data[pos + 2] = foreground[2]
                }
                else if (tolerance <= 10) {
                    imgData.data[pos] = 0;
                    imgData.data[pos + 1] = 0;
                    imgData.data[pos + 2] = 0;
                    imgData.data[pos + 3] = 0
                }
            }
        }
        x = document.createElement("canvas");
        x.width = rOffset - lOffset;
        x.height = bOffset - tOffset;
        xx = x.getContext("2d");
        ctx.putImageData(imgData, 0, 0);
        xx.drawImage(canva, lOffset, tOffset, x.width, x.height, 0, 0, x.width, x.height);
        imgCache[src] = x.toDataURL();
        if (callback) {
            callback(x.toDataURL())
        }
    }
}