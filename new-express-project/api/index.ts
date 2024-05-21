const express = require("express");
const app = express();
// get the client
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors())

// create the connection to database
const connection = mysql.createConnection({
  host: '18.191.254.206',
  user: 'james',
  password: 'password',
  database: 'project'
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/sql", function (req,res)
{   var decoded = decodeURI(req.query.data);
    console.log(decoded);
     connection.query(
        decoded,
        function(err, results, fields) {
            console.log(results);
            res.send(results);
        }
    )
})

app.listen(3005, () => console.log("Server ready on port 3005."));

module.exports = app;