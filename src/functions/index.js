import osmosis from 'osmosis'
import { uri, set } from '../config'

const concatString = string => {
  let arr = []
  return (arr = arr.concat(string))
}

const splitText = string => {
  let str_split = string
    .split('\t')
    .join('')
    .split('\n')
  return concatString(str_split)
}

const splitSpace = string => {
  let str_split = string.split(' ')
  return concatString(str_split)
}

const isEmptyObject = obj => {
  for (var item in obj) return false

  return true
}

const lotteryResult = (filter = '') => {
  let data = []

  return new Promise((resolve, reject) => {
    osmosis
      .get(uri)
      .set(set)
      .data(result => {
        if (!isEmptyObject(result)) {
          data.push({
            title: result.title,
            prize1: result.prize1,
            prizen1: splitSpace(result.prizen1),
            prize2: splitText(result.prize2),
            prize3: splitText(result.prize3),
            prize4: splitText(result.prize4),
            prize5: splitText(result.prize5),
            prizef3: splitSpace(result.prizef3),
            prizel3: splitSpace(result.prizel3),
            prizel2: result.prizel2
          })
        }
      })
      .log(console.log)
      .error(err => reject(err))
      .done(() => {
        if (filter) {
          let list = []

          data.filter(item => {
            if (item.prize1 === filter) list.push(item.prize1)

            item.prizen1.filter(item => {
              if (item === filter) list.push({ prizen1: item })
            })

            item.prize2.filter(item => {
              if (item === filter) list.push({ prize2: item })
            })

            item.prize3.filter(item => {
              if (item === filter) list.push({ prize3: item })
            })

            item.prize4.filter(item => {
              if (item === filter) list.push({ prize4: item })
            })

            item.prize5.filter(item => {
              if (item === filter) list.push({ prize5: item })
            })

            item.prizef3.filter(item => {
              if (item === filter) list.push({ prizef3: item })
            })

            item.prizel3.filter(item => {
              if (item === filter) list.push({ prizel3: item })
            })

            if (item.prizel2 === filter) list.push(item.prizel2)

            resolve(list)
          })
        }

        resolve(data)
      })
  })
}

export { lotteryResult, splitSpace, splitText }
