var dbcon = require("../config/db_connection");
var connection = dbcon.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  connection.query("select * from product", (err, records, fileds) => {
    if (err) {
      console.error("Error while fetching data!");
    } else {
      res.send(records);
    }
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    "select * from product where id=" + req.params.id,
    (err, records, fileds) => {
      if (err) {
        console.error("Error while fetching data!");
      } else {
        res.send(records);
      }
    }
  );
});

router.post("/", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price;
  connection.query(
    `insert into product values('${id}','${name}','${description}','${price}')`,
    (err, result) => {
      if (err) {
        console.error("erro while inserting data" + err);
      } else {
        res.send({ insert: "success" });
      }
    }
  );
});

module.exports = router;
