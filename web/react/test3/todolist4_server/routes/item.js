const con = require("./dbcon");
const express = require("express");
const router = express.Router();

router.post("/delete", (req, res) => {
  const key = parseInt(req.body.key);
  const sql = `delete from todolist where \`key\`= ${key}`;
  con.query(sql, function(err, result) {
    if (err) {
      res.json({ message: false });
    } else {
      console.log("Number of records deleted: " + result.affectedRows);
      res.json({ message: true });
    }
  });
});

router.post("/add", (req, res) => {
  console.log(req.body);
  const key = parseInt(req.body.key);
  console.log(key);
  const sql = `INSERT INTO todolist (\`key\`, text) VALUES (${key}, '${req.body.text}')`;
  con.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.json({ message: false });
    } else {
      console.log("1개 넣음");
      res.json({ message: "add ok" });
    }
  });
});

module.exports = router;
