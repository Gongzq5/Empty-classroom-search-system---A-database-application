const util = require('util')
const sqlite3 = require('sqlite3')

let db = new sqlite3.Database('./data.db', function() {
    console.log("Database [data] opened");
});

db.allAsync = util.promisify(db.all)
db.runAsync = util.promisify(db.run)

db.insertUser = async function(username, password) {
  let sql = "INSERT INTO USER VALUES(\'" + username + 
            "\' , 1 , \'" + password + "\');"
  await db.runAsync(sql)
}

db.queryUserWithoutPassword = async function(username) {
  let sql = "SELECT * FROM USER WHERE USERNAME = \'" + username  + "\';";
  return await db.allAsync(sql)
}

db.queryUser = async function(username, password) {
  let sql = "SELECT * FROM USER WHERE USERNAME = \'" + username + 
            "\' AND PASSWORD = \'" + password + "\';"
  console.log(sql)
  return await db.allAsync(sql)
}

db.queryCourse = async function(courseName) {
  let sql = "SELECT COURSEARMT.NAME, COURSEARMT.CLASSROOM, COURSEARMT.WEEK_BEGIN, COURSEARMT.WEEK_END, COURSEARMT.DOW, COURSEARMT.CLASS_BEGIN, COURSEARMT.CLASS_END \
            FROM COURSEARMT\
            INNER JOIN COURSE \
            ON COURSE.NAME = COURSEARMT.NAME and COURSEARMT.NAME = \'" + courseName + "\' \
            ORDER BY COURSEARMT.NAME ASC;"
  return await db.allAsync(sql)
}

db.queryRoom = async function(args) {
  let sql = "SELECT CLASSROOMARMT.NAME, CLASSROOMARMT.WEEK_BEGIN, CLASSROOMARMT.WEEK_END, CLASSROOMARMT.DOW, CLASSROOMARMT.CLASS_BEGIN, CLASSROOMARMT.CLASS_END\
            FROM CLASSROOMARMT\
            INNER JOIN CLASSROOM\
            ON CLASSROOM.NAME = CLASSROOMARMT.NAME "

  
  if (args.building != 'any') {
    let roomName
    if (args.classroomNumber) {
      roomName = args.building + args.classroomNumber
      sql = sql + " AND CLASSROOMARMT.NAME = \'" + roomName + "\' "
    } else {
      sql = sql + " AND CLASSROOMARMT.NAME LIKE \'%" + args.building + "%\' "
    }
  }
  if (args.day != 'any') {
    sql = sql + " AND CLASSROOMARMT.DOW = \'" + args.day + "\' "
  }
  
  if (args.startJ == 'any' || args.endJ == 'any') {
    args.startJ = 1;
    args.endJ = 11;
  }

  sql = sql + " AND CLASSROOMARMT.CLASS_BEGIN >= " + args.startJ 
        + " AND CLASSROOMARMT.CLASS_END <= " + args.endJ

  sql += ";"

  console.log(sql)

  return await db.allAsync(sql)
}

module.exports = db
