const request = require('request');

exports.notifyEvent = (msg) => {
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer:'fI0hClVOvm6YC6XsattCZB80mAU4AKGczTw5CKLiffz'
        },
        formData:{
            message: msg,
            stickerPackageId:1,
            imageFile: fs.createReadStream(fileData)
        }
    })
}

exports.notifyEvening = (msg,filename ) => {
    var fileData =  `public/uploads/${filename}`
    request({
        uri :'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer:'fI0hClVOvm6YC6XsattCZB80mAU4AKGczTw5CKLiffz'
        },
        formData:{
            massage:msg,
            imageFile: fs.createReadStream(filedata)
        }
    })
}