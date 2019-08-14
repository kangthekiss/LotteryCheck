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
      prizen1: 'div#prize-n1 div.result span span',
      prizef3: 'div#prize-f3 div.result span span',
      prizel3: 'div#prize-l3 div.result span span',
      prizel2: 'div#prize-l2 div.result div span',
      prize2: 'div#prize-2',
      prize3: 'div#prize-3',
      prize4: 'div#prize-4',
      prize5: 'div#prize-5'
    })
    .data(result => {
      data.push({
        title: result.title,
        prize1: result.prize1,
        prizen1: splitSpace(result.prizen1),
        prizef3: splitSpace(result.prizef3),
        prizel3: splitSpace(result.prizel3),
        prizel2: result.prizel2,
        prize2: splitText(result.prize2),
        prize3: splitText(result.prize3),
        prize4: splitText(result.prize4),
        prize5: splitText(result.prize5)
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
