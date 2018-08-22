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

// 프로젝트 목록 조회
router.get('/getProject', function(req, res) {

    let projectNo = req.query.projectNo; //프로젝트 번호
    let query = '';


    query += '' +
        'SELECT ' +
        '   A.*, ' +
        '   B.URL AS THUMBNAIL_URL, ' +
        '   B.ALT AS THUMBNAIL_ALT, ' +
        '   C.URL AS MAIN_IMAGE_URL, ' +
        '   GROUP_CONCAT(D.URL SEPARATOR ", ") AS SUB_IMAGE_URL, ' +
        '   E.PROJECT_TYPE_NAME ' +
        ' FROM ' +
        '   ( ' +
        '   SELECT * FROM ' +
        '       tb_project_info ';


    if (projectNo != undefined && projectNo != null) {
        query += ' WHERE PROJECT_NO = ' + projectNo + ' ';
    }

    query +=
        '      ) A ' +
        '   INNER JOIN (SELECT * FROM tb_project_image WHERE IMAGE_TYPE_CD = "03" ) B ' + //썸네일
        '       ON A.PROJECT_NO = B.PROJECT_NO ' +
        '   INNER JOIN (SELECT * FROM tb_project_image WHERE IMAGE_TYPE_CD = "01" ) C ' + //메인이미지
        '       ON A.PROJECT_NO = C.PROJECT_NO ' +
        '   INNER JOIN (SELECT * FROM tb_project_image WHERE IMAGE_TYPE_CD = "02" ) D ' + //서브이미지
        '       ON A.PROJECT_NO = D.PROJECT_NO ' +
        '   INNER JOIN tb_project_type E ' +
        '        ON E.PROJECT_TYPE_CD = A.PROJECT_TYPE_CD ' +
        'GROUP BY A.PROJECT_NO ' +
        'ORDER BY A.PROJECT_NO DESC ';
console.log(query)


    connection.query(query, function(err, rows, fields){
        // console.log(query)
        // console.log(rows)
        // console.error(err)
        for (key in rows) {
            // console.log(rows[key].SUB_IMAGE_URL.split(', '))
            rows[key].subImageList = rows[key].SUB_IMAGE_URL.split(', ')
        }

        // console.log(rows);

        res.json({
            meta : {},
            data : rows
        });
    });
});

// 프로젝트 상세 조회


module.exports = router;
