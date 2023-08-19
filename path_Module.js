const path = require('path')
const fs = require('fs')



// Find the current working directory
console.log(__dirname)

// give the complete address of Current file
console.log(__filename)

// To find the path of any file
console.log(path.join(__dirname, "MyContent.txt"))

// to add a folder path in the location
console.log(path.join(__dirname, "files", "MyContent.txt"))
