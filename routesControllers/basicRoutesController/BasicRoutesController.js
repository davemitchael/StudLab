const multer = require('multer');

class BasicRoutesController {

    static getUploadFor(dir) {
        return multer({
            storage: multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, `C:/Users/vitaliy.ivantsiv/Documents/GitHub/StudLab/physicalDataBase/${req.session.user.email}/${dir}`)
                },
                filename: function (req, file, cb) {
                    cb(null, Date.now() + ',' + file.originalname);
                }
            })
        }).single('file')
    };
}

module.exports = BasicRoutesController;