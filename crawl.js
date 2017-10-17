const cheerio = require('cheerio')

const _ = require('lodash')

const fs = require('fs');

const document = fs.readFileSync('./hacker-news.html', 'utf-8');

const $ = cheerio.load(document)


const links = Array.from($('a.storylink'))
const item = _.sample(links)
const title = $(item).text()
const link = $(item).attr('href')
const result = `${title}\n${link}`

console.log(result)
