let express = require('express');
let router = express.Router();
let moment = require('moment');
let mysql = require('mysql');
let dbConfig  = require('../config/dbConfig.json');



let connection = mysql.createConnection({
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
    let projectType = req.query.projectType;
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
        '   A.SITE_MANUAL, ' +
        '   B.URL AS THUMBNAIL_URL, ' +
        '   B.ALT AS THUMBNAIL_ALT, ' +
        '   C.URL AS MAIN_IMAGE_URL, ' +
        '   GROUP_CONCAT(D.URL SEPARATOR ", ") AS SUB_IMAGE_URL, ' +
        '   E.PROJECT_TYPE_NAME ' +
        ' FROM ' +
        '   ( ' +
        '   SELECT * FROM ' +
        '       tb_project_info ' +
        '   WHERE 1 = 1 '
        ;

    //프로젝트 상세용 단건조회
    if (projectNo != undefined && projectNo != null) {
        query += ' AND PROJECT_NO = ' + projectNo + ' ';
    }

    //프로젝트 타입별 조회
    if (projectType != undefined && projectType != null) {
        query += ' AND PROJECT_TYPE_CD = ' + projectType + ' ';
    }

    //더보기, 페이징용
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

// 프로젝트 타입 조회
router.get('/projectType', function(req, res) {
    let query = '' +
        '   SELECT ' +
        '       A.*, ' +
        '       COUNT(B.PROJECT_NO) AS PROJECT_COUNT ' +
        '   FROM ' +
        '       tb_project_type A' +
        '   INNER JOIN tb_project_info B ' +
        '       ON A.PROJECT_TYPE_CD = B.PROJECT_TYPE_CD ' +
        '   GROUP BY ' +
        '       A.PROJECT_TYPE_CD ' +
        '   ORDER BY ' +
        '       PROJECT_TYPE_ORDER ASC ';

    connection.query(query, function(err, rows, fields){
        res.json({
            meta : {},
            data : rows
        });
    });
});

// 접속 카운트 증가
router.post('/visitCount', function(req, res) {

    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let todayStart = moment().format('YYYY-MM-DD') + ' 00:00:00';
    let todayEnd = moment().format('YYYY-MM-DD') + ' 23:59:59';

    let visitChkQry = '' +
        'SELECT ' +
        '   VISIT_COUNT, ACCESS_IP ' +
        'FROM ' +
        '   tb_visit_info ' +
        'WHERE ' +
        '   ACCESS_IP = "'+ip+'" ' +
        '   AND DATE(VISIT_DATE) BETWEEN "' + todayStart + '" AND "' + todayEnd + '" ' +
        'ORDER BY SEQ DESC ' +
        'LIMIT 1 ';
    console.log('QUERY1 : ', visitChkQry)
    //기존 등록된 해당IP 금일 방문정보 조회
    connection.query(visitChkQry, function(err, rows, fields){
        if(err) console.error(err)
        console.log('visit check : ',rows)

        //오늘 방문하지 않았을경우에만 등록
        if (rows.length == 0) {
            let query = '' +
                'INSERT INTO tb_visit_info' +
                '(SEQ,VISIT_COUNT,ACCESS_IP,VISIT_DATE)' +
                'SELECT' +
                '   0,' +
                '   (SELECT MAX(VISIT_COUNT) FROM tb_visit_info) + 1,' +
                '   "' + ip + '", ' +
                '   NOW() ';
            console.log('QUERY2 : ', query)
            //방문기록 추가
            connection.query(query, function (err, rows, fields) {
                if (err) console.error(err)
                res.json({
                    meta: {message: "SUCCESS"},
                    data: rows
                });
            });
        } else {
            res.json({meta:{message:'ALREADY VISITED'}, data: {}})
        }
    });
});

//접속 카운트 조회
router.get('/visitCount', function(req, res) {

    let todayStart = moment().format('YYYY-MM-DD') + ' 00:00:00';
    let todayEnd = moment().format('YYYY-MM-DD') + ' 23:59:59';

    let query = '' +
        'SELECT VISIT_COUNT FROM tb_visit_info ORDER BY SEQ DESC LIMIT 1';
    console.log('QUERY : ', query)

    connection.query(query, function(err, rows, fields){
        if (err) console.error(err)

        let todayCountQuery = '' +
            'SELECT ' +
            '   COUNT(SEQ) AS TODAY_COUNT ' +
            'FROM ' +
            '   tb_visit_info ' +
            'WHERE ' +
            '   DATE(VISIT_DATE) BETWEEN "' + todayStart + '" AND "' + todayEnd + '" ';

        console.log('QUERY : ', todayCountQuery)
        connection.query(todayCountQuery, function(err, todayRows, todayFields){
            if (err) console.error(err)

            res.json({
                meta : {},
                data : {
                    totalCount : rows[0].VISIT_COUNT,   //총 방문자수
                    todayCount : todayRows[0].TODAY_COUNT //오늘 방문자수
                }
            });
        });
    });
});

//contact남기기
router.post('/contact', function(req, res) {
    console.log(req.body)
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    console.log(name)
    console.log(email)
    console.log(message)

    let query = '' +
        '   INSERT INTO ' +
        '       tb_contact ' +
        '       (SEQ, NAME, EMAIL, MESSAGE) ' +
        '   VALUES ( ' +
        '       0, ' +
        '       "' + name + '", ' +
        '       "' + email + '", ' +
        '       "' + message + '" ' +
        '   ) ';

    connection.query(query, function(err, rows, fields){
        if (err) console.error(err)

        res.json({
           meta : {},
           data : rows
        });
    });
});

//contact조회하기
router.get('/letMeShowMyContactInfo', function(req, res){

    let query = 'SELECT * FROM tb_contact';

    connection.query(query, function(err, rows, fields){
        if (err) console.error(err)

        res.json({
            meta : {},
            data : rows
        });
    });
});

module.exports = router;
