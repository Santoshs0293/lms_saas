const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({});
const fileFilter = (req, files, cb) => {
  if (
  files.mimetype === "image/png" ||
  files.mimetype === "image/jpg" ||
  files.mimetype === "image/jpeg" ||
  files.mimetype == "application/pdf"
  ) {
  cb(null, true);
  } else {
  cb(new Error("File format should be PNG,JPG,JPEG,PDF"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;