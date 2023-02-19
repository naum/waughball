
import fs from 'fs'
import readline from 'readline'

const dictfile = '/usr/share/dict/words'
const wstubout = '../wordstubs.json'

let goodwords = []

const rl = readline.createInterface({
    input: fs.createReadStream(dictfile),
    crlfDelay: Infinity
})

rl.on('line', (line) => {
    if (/^\w{1,6}$/.test(line)) {
        goodwords.push(line.toLowerCase())
    }
})

rl.on('close', () => {
    const uniqwords = [...new Set(goodwords)]
    const data = JSON.stringify(uniqwords)
    fs.writeFileSync(wstubout, data)
    console.log(`Wrote ${uniqwords.length} words to ${wstubout}`)
    const diff = goodwords.length - uniqwords.length
    console.log(`${diff} duplicate words removed`)
})