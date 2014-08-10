var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

fs.createReadStream("./README.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("saidfafdad.pdf"));

