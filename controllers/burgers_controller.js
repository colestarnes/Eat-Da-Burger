const express = require("express"); 
const { result } = require("underscore");
const router = express.Router(); 
const burger = require ("../models/burgers.js") 

router.get("/", function(req, res) {
    burger.all(function(data) {

    
    var hbsObject = {
        burgers: data
    }; 
    console.log(hbsObject); 
    res.render("index", hbsObject.burgers)
}); 
}); 

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
}); 

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id; 

    console.log("condition", condition);
     burger.update({
         devoured: req.body.devoured
     }, condition, function(result) {
         if (result.changedRows == 0) {
             return res.status(404).end();
         }
     });
}); 

router.delete("/api/burgers/:id", function(req, res) {
var condition = "id = " + req.params.id; 

burger.delete(condition, function(result) {
    if (result.affectedRows === 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});
});
 
module.exports = router;