import express from 'express'

import lotteryRouter from './routers/lottery'

const app = express()
const port = process.env.PORT || 3003

app.use('/', lotteryRouter)

app.listen(port, () => {
  console.log('server is running')
})
