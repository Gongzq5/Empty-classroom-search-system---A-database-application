const util = require('util')
let sqlite3 = require('sqlite3')

console.log('new sqlite3.db')

var db = new sqlite3.Database('data.db')

console.log('use utils')

db.allAsync = util.promisify(db.all)

var sql = "SELECT * FROM CLASSROOM WHERE FREETIME LIKE '%MON3-4%';"

tst(sql)

console.log('Holy shit')

async function tst(sql) { 
    let a = undefined
    try {
        a = await db.allAsync(sql)            
    } catch(e) {
        console.log(e);
    }
    console.log(a)
    console.log('Holy shit in async')
}