const url = require('url')
let address = "http://localhost:8080/default.htm?year=2017&month=february"

const urlContent = url.parse(address, true)
console.log(urlContent)

// Hostname of an URL Address
console.log(urlContent.hostname)

// Path Name
console.log(urlContent.pathname)
console.log(urlContent.path)

// to find data from a Query String (Year/Month)
let queryData = urlContent.query
console.log(`Year = ${queryData.year}`)
console.log(`Month = ${queryData.month}`)


