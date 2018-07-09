let sqlite3 = require('sqlite3')

var db = new sqlite3.Database('./data.db', function() {
  db.all("select count(*) from sqlite_master where type='table' and name='users'", async function(err, res) {    
    if (res[0]['count(*)'] == 0) {
      await db.run("create table users(name text primary key not null, password text)");
    }
    console.log("Database [user] opened");
  });
});

db.query = async function() {
  let sql = "";
  let result = await db.all(sql);
  return result;
}

db.insert = async function(user) {
  await db.run("insert into users values(?, ?)", [user.username, user.password], 
    async function(err, row){
      console.log('[0] insert a user ' + JSON.stringify(user));
  })
  console.log('[1] insert a user ' + JSON.stringify(user));
}

db.remove = function() {

}

db.update = function() {

}

module.exports = db
