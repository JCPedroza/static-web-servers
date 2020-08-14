const fs = require('fs')
const http = require('http')
const path = require('path')

const hostname = 'localhost'
const port = 3000
const runLog = `Server running ar http://${hostname}:${port}`
const rootPath = '../public'
const errorPath = `${rootPath}/not-found.html`

const server = http.createServer((req, res) => {
  const fileUrl = req.url === '/' ? '/index.html' : req.url
  const filePath = path.resolve(`${rootPath}${fileUrl}`)
  res.setHeader('Content-Type', 'text/html')

  if (reqIsOk(req, filePath)) {
    res.statusCode = 200
    fs.createReadStream(filePath).pipe(res)
  } else {
    res.statusCode = 404
    fs.createReadStream(errorPath).pipe(res)
  }
})

function reqIsOk (req, filePath) {
  const fileExt = path.extname(filePath)
  return req.method === 'GET' && fileExt === '.html' && fs.existsSync(filePath)
}

server.listen(port, hostname, () => {
  console.log(runLog)
})
