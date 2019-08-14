import { lotteryResult } from '../functions'

const getData = async (req, res) => {
  try {
    const data = await lotteryResult()

    res.json({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

const filter = async (req, res) => {
  try {
    let data = []

    if (req.query.data !== undefined) {
      data = await lotteryResult(req.query.data)
    }

    res.json({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

export { getData, filter }
