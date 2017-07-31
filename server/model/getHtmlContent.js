const request = require('request')
class GetContent {
  content (url) {
    return new Promise((resolve, reject) => {
      request(url, (err, req, body) => {
        if (!err) {
          resolve(body)
        } else {
          reject(false)
        }
    })
    })
  }
}
module.exports = new GetContent()