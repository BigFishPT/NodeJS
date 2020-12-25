const fs = require('fs')

fs.writeFileSync('notes.txt','This file was created using nodeJS')
fs.appendFileSync('notes.txt',' - this data was appended to the file')