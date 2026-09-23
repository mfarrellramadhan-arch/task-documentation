const fs = require('fs')

//menuliskan string ke file (synchronous)
try {
    fs.writeFileSync('data/test.txt', 'Hello World secara synchronous')
} catch (e) {
    console.log(e)
}

// console.log(fs)