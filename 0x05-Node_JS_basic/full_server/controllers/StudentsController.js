const read = require("../utils");

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    read.readDatabase(process.argv[2].toString()).then((output) => {
      res.write('This is the list of our students\n');
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 500;
      res.end('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    // console.log(field);
    // console.log(field === 'SWE');
    if (field !== "CS" && field !== "SWE") {
      res.statusCode = 500;
      res.end("Major parameter must be CS or SWE");
    } else {
      // console.log(data);
      res.statusCode = 200;
      // console.log(field.toString())
      read.readDatabasebyMajor(process.argv[2].toString(), field.toString()).then((output) => {
        const outString = output.split('List:');
        res.end(`List:` + outString[1]);
      }).catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
    }
  }
}

module.exports = { StudentsController }
