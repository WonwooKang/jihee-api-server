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
        //console.log(rows)

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
    let limit = req.query.limit;
    let offset = req.query.offset;
    let query = '';


    query += '' +
        'SELECT ' +
        '   A.PROJECT_NO, ' +
        '   A.PROJECT_TYPE_CD, ' +
        '   A.PROJECT_TITLE, ' +
        '   A.PROJECT_SUB_TITLE, ' +
        '   A.CLIENT, ' +
        '   DATE_FORMAT(A.RELEASE_DATE, "%Y. %m") AS RELEASE_DATE, ' +
        '   A.MAIN_BACKGROUND_COLOR, ' +
        '   A.DEFAULT_ALT, ' +
        '   A.SITE_URL, ' +
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

    if (limit != undefined && limit != null &&
        offset != undefined && offset != null) {
        query += 'limit ' + offset + ', ' + limit
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

        let data = {}

        if (projectNo != undefined && projectNo != null) {
            data = rows[0]
        } else {
            data = rows
        }

        res.json({
            meta : {},
            data : data
        });
    });
});

// 접속 카운트 증가
router.post('/visitCount', function(req, res) {

    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    let query = '' +
        'INSERT INTO tb_visit_info' +
        '(SEQ,VISIT_COUNT,ACCESS_IP)' +
        'SELECT' +
        '   0,' +
        '   (SELECT MAX(VISIT_COUNT) FROM tb_visit_info) + 1,' +
        '   "' + ip + '"';
console.log('QUERY : ', query)

    connection.query(query, function(err, rows, fields){
        res.json({
            meta : {},
            data : rows
        });
    });
});

//접속 카운트 조회
router.get('/visitCount', function(req, res) {


    let query = '' +
        'SELECT VISIT_COUNT, ACCESS_IP FROM tb_visit_info ORDER BY SEQ DESC LIMIT 1';
    console.log('QUERY : ', query)

    connection.query(query, function(err, rows, fields){
        res.json({
            meta : {},
            data : rows[0]
        });
    });
})

module.exports = router;
