const fs = require('fs')
const path = require('path')
const myError = new Error("Something went Wrong")
// console.log(myError)
// throw myError;

try
{
    // throw myError;

    const fileData = fs.readFileSync(path.join(__dirname, "files","MyContent1.txt"), "utf-8")
    console.log(fileData)
}
catch(myError)
{
    console.log(myError.message)
}