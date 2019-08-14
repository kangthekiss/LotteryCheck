import express from 'express'
import osmosis from 'osmosis'

const app = express()
const port = process.env.PORT || 3003

function splitText(string) {
  let str_split = string
    .split('\t')
    .join('')
    .split('\n')
  return concatString(str_split)
}

function splitSpace(string) {
  let str_split = string.split(' ')
  return concatString(str_split)
}

function concatString(string) {
  let arr = []
  return (arr = arr.concat(string))
}

app.get('/', (req, res) => {
  let data = []

  osmosis
    .get('https://lotto.mthai.com')
    .set({
      title: 'div#site-head-title h2 a span',
      prize1: 'div#prize-1 div.result div span',
      prizen1: 'div#prize-n1 div.result span span'
    })
    .data(result => {
      data.push({
        title: result.title,
        prize1: result.prize1,
        prizen1: splitSpace(result.prizen1)
      })

      return res.json({ data })
    })
    .log(console.log)
    .error(error => {
      return res.status(500).json({ error })
    })
})

app.listen(port, () => {
  console.log('server is running')
})
