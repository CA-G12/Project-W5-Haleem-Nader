const { appendFile } = require("fs");
const path = require("path");



const clientErrors = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "pages", "404page.html"));
};

const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, "..", "public", "pages", "500page.html"));
};

module.exports = {serverError, clientErrors };
