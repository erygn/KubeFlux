const express = require('express')
const app = express()
const port = 8000

let count = 0

app.get('/', (req, res) => {
  res.send('Node, Docker, Kube, Helm, Flux! ' + count)
})

app.get('/count', (req, res) => {
  count++;
  res.send('')
})

app.get('/v2', (req, res) => {
  res.send('update v2')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})