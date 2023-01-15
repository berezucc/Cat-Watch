const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("cats");
    db_connect
      .collection("records")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
      db_connect[0];
   });

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      url: req.body.catObj.url,
      star: req.body.catObj.star,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        url: req.body.catObj.url,
        star: req.body.catObj.star,
      },
    };
    db_connect
      .collection("records")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });

    // Use the MongoDB driver to delete the record with the matching ID
   recordRoutes.delete('/record/:id', (req, res) => {
    const id = req.params.id;
    dbo.getDb().collection('records').deleteOne({_id: ObjectId(id)}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        });
    });
    
    
   module.exports = recordRoutes;