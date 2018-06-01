var express = require('express');
var router = express.Router();

var data = {
    'code':'000',
    'message':'message消息',
    'lists':[
        {
          'naem':'小明',
            'age': '12',
            'sex':'男'
        },{
          'naem':'小红',
            'age': '112',
            'sex':'女'
        }
    ]

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
