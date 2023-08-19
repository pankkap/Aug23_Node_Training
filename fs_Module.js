// Node is commonJS based, so we will use require keyword to import libraries
const fs = require('fs')
const path = require('path')


// Writing into the file
fs.writeFileSync('content.txt', "Hi Friends, i am using NodeJS inbuilt Module for Writing/Reading into Files")
fs.writeFileSync('content.txt', "Hello Friends")

//Append the Content Into the file
fs.appendFileSync('content.txt', '\nHi Friends, i am using NodeJS inbuilt Module for Writing/Reading into Files')

// Read from a file
// All data in the file stored as Binary 
const fileData = fs.readFileSync("content.txt")
console.log(fileData)
// Convert the data into string using toString() method
console.log(fileData.toString())

// Convert the data into string using utf flag
const fileData1 = fs.readFileSync("content.txt", "utf-8")
console.log(fileData1)

// Rename the file
fs.renameSync('content.txt', 'MyContent.txt')

//delete the file
const filePath = path.join(__dirname, "MyContent.txt")
fs.unlinkSync(filePath)
