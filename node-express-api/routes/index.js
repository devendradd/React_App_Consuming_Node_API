var express = require('express');
var router = express.Router();
var db = require('monk')('localhost:27017');


/* GET home page. */
router.get('/:id', function(req, res, next) {
    var id = req.param('id')
    var likes = 0
    var itunes = db.get("ITunes")

    itunes.find({ID : id},  (err, data) => {   
      if(data) likes = data.length
      res.send({likes})
  }) 
})

router.post('/', function(req, res, next) {  
  var itunes = db.get("ITunes")
  itunes.insert(req.body,  (err, data) => {    
     res.send(data)
  }) 
})

router.delete('/', function(req, res, next) {  
  var itunes = db.get("ITunes")
  itunes.remove({}) 
  res.send({message : 'database cleaned'})
})


module.exports = router;
