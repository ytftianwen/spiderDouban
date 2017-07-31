const express = require('express')
const app = express()

const getHtml = require('./model/getHtmlContent')
getHtml.content('http://www.baidu.com')
  .then(res => {
    console.log('****', res)
  })

app.listen(3022, () => {
  console.log('server start at: 3022')
})
