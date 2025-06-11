const multer = require('multer');
const path = require('path');

const tempFolderPath = path.resolve(__dirname, '../public/temp');
const maxSize = 5 * 1024 * 1024;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempFolderPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    limits: { fileSize: maxSize },
    storage: storage
});

module.exports = upload;
