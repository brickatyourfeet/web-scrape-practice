const cheerio = require('cheerio')

const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('./hacker-news.html'));


//console.log($.html())


console.log($('.athing').toArray())
