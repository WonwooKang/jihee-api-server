let express = require('express');
let router = express.Router();
let mysql = require('mysql');
var dbConfig  = require('../config/dbConfig.json');

var connection = mysql.createConnection({
    host     : dbConfig.dbHost,
    port     : dbConfig.dbPort,
    user     : dbConfig.dbUser,
    password : dbConfig.dbPassword,
    database : dbConfig.dbScheme
});

/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM tb_project_type', function(err, rows, fields){
        console.log(rows)

        let resultData = {
            meta : { des: '안녕하세요 지히 전용 API 서버입니다.' },
            data : rows
        }

        res.json(resultData);
    })


});

module.exports = router;
