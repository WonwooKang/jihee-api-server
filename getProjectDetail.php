<?php
    //기존 목록용 아이템 배열에 idx 를 추가해주세요!!
    //그리고 그 idx를 맞는상세 내용(아이템 번호1, 아이템번호2 부분)에 넣어주세요

    $categoryArray = array('01'=>'WEB APPLICATION', '02'=>'UI,UX DESIGN', '03'=>'DETAIL PAGE', '04'=>'SNS CONTENT', '05'=>'ETC');

    //uiux 데이터 배열
    $uiuxPageItemArray = array();

    //uiux 각 아이템 항목들의 내용
    $uiuxPageItemArray[30] = array(
        "mainImage"=>"../../resources/uiuxpage/project_30-1.jpg",
        "title"=>"템텍스 사이트 리뉴얼",
        "subTitle"=>"템텍스 테이프 브랜드의 대표 사이트입니다. 카페24로 제작되어있었으며  불필요한 컨텐츠들은 없애고, 필요한 컨텐츠들을 좀더 강조할수 있도록 제작하였습니다. ",
        "client"=>"온플",
        "releaseDate"=>"2016. 03",
        "type"=>$categoryArray['02'],
        "subImage"=>"../../resources/detailPage/project_01.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#CCDB5E"
    );

    //상세페이지용 데이터 배열
    $detailPageItemArray = array();

    //상세페이지 각 아이템 항목들의 내용
    $detailPageItemArray[1] = array(
        "mainImage"=>"../../resources/thumbnail/project_01.jpg",
        "title"=>"상품 상세페이지",
        "subTitle"=>"연습용으로 제작한 상품 상세페이지 입니다.",
        "client"=>"NONE",
        "releaseDate"=>"2016. 02",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_01.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#CCDB5E"
    );
    $detailPageItemArray[2] = array(
        "mainImage"=>"../../resources/thumbnail/project_02.jpg",
        "title"=>"상품 상세페이지",
        "subTitle"=>"연습용으로 제작한 상품 상세페이지 입니다.",
        "client"=>"NONE",
        "releaseDate"=>"2016. 02",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_02.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#CAE1E9"
    );
    $detailPageItemArray[3] = array(
        "mainImage"=>"../../resources/thumbnail/project_03.jpg",
        "title"=>"상품 상세페이지",
        "subTitle"=>"연습용으로 제작한 상품 상세페이지 입니다.",
        "client"=>"NONE",
        "releaseDate"=>"2016. 03",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_03.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#32353E"
    );
    $detailPageItemArray[4] = array(
        "mainImage"=>"../../resources/thumbnail/project_04.jpg",
        "title"=>"상품 상세페이지",
        "subTitle"=>"연습용으로 제작한 상품 상세페이지 입니다.",
        "client"=>"NONE",
        "releaseDate"=>"2016. 03",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_04.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#B1D6E8"
    );
    $detailPageItemArray[5] = array(
        "mainImage"=>"../../resources/thumbnail/project_05.jpg",
        "title"=>"상품 상세페이지",
        "subTitle"=>"연습용으로 제작한 상품 상세페이지 입니다.",
        "client"=>"NONE",
        "releaseDate"=>"2016. 04",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_05.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#414141"
    );
    $detailPageItemArray[6] = array(
        "mainImage"=>"../../resources/thumbnail/project_06.jpg",
        "title"=>"쥬얼리(반지) 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 쥬얼리 색상이 한가지 색상뿐이라서 나머지 2가지 색상은 포토샵으로 보정하여 만들었습니다. ",
        "client"=>"준쥬얼리",
        "releaseDate"=>"2016. 06",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_06.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#FBACB1"
    );
    $detailPageItemArray[15] = array(
        "mainImage"=>"../../resources/thumbnail/project_15.jpg",
        "title"=>"트로피칼 젤리시계 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 직접촬영한 사진을 이용하여 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 08",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_15.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#F3A1DF"
    );
    $detailPageItemArray[16] = array(
        "mainImage"=>"../../resources/thumbnail/project_16.jpg",
        "title"=>"밴드프로 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 일반 반창고가 아닌 밴드프로 브랜드만의 반창고의 특징을 잘 살려 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 10",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_16.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#DE4B65"
    );
    $detailPageItemArray[17] = array(
        "mainImage"=>"../../resources/thumbnail/project_17.jpg",
        "title"=>"밴드프로 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 일반 아쿠아밴드 아닌 밴드프로 브랜드만의 반창고의 특징을 잘 살려 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 10",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_17.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#69A3EC"
    );
    $detailPageItemArray[18] = array(
        "mainImage"=>"../../resources/thumbnail/project_18.jpg",
        "title"=>"밴드프로 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 일반 고탄력밴드가 아닌 밴드프로 브랜드만의 반창고의 특징을 잘 살려 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 10",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_18.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#FCB4C0"
    );
    $detailPageItemArray[19] = array(
        "mainImage"=>"../../resources/thumbnail/project_19.jpg",
        "title"=>"단잠애 힐링베게 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 기존의 디자인에서 리뉴얼하여 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 10",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_19.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#6B8FE5"
    );
    $detailPageItemArray[20] = array(
        "mainImage"=>"../../resources/thumbnail/project_20.jpg",
        "title"=>"테라스킨 씬 스팟패치 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 테라스킨 브랜드만의 특징을 잘 살려 디자인 하였으며, 직접촬영한 사진을 이용하여 제작하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 11",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_20.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#57B9FF"
    );
    $detailPageItemArray[21] = array(
        "mainImage"=>"../../resources/thumbnail/project_21.jpg",
        "title"=>"테라스킨 씬 스팟패치 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 테라스킨 브랜드의 습윤밴드 제품 특징을 잘 살려 디자인 하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2016. 12",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_21.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#33B4BA"
    );
    $detailPageItemArray[22] = array(
        "mainImage"=>"../../resources/thumbnail/project_22.jpg",
        "title"=>"아프지마요 뒤꿈치패드 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 아프지마요 브랜드만의 뒤꿈치패드 제품 특징을 잘 살려 디자인 하였습니다. ",
        "client"=>"온플",
        "releaseDate"=>"2017. 1",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_22.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#27B4AC"
    );
    $detailPageItemArray[25] = array(
        "mainImage"=>"../../resources/thumbnail/project_25.jpg",
        "title"=>"템텍스 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 템텍스 브랜드만의 테이프 제품 특징을 잘 살려 디자인 하였습니다. ",
        "client"=>"온플",
        "releaseDate"=>"2017. 1",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_25.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#5EC5E8"
    );
    $detailPageItemArray[26] = array(
        "mainImage"=>"../../resources/thumbnail/project_26.jpg",
        "title"=>"플렉스바디 마사지폼롤러 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 플렉스바디 브랜드만의 마사지폼롤러 제품 특징을 잘 살려 디자인 하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2017. 1",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_26.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#141206"
    );
    $detailPageItemArray[27] = array(
        "mainImage"=>"../../resources/thumbnail/project_27.jpg",
        "title"=>"플렉스바디 베어스트랩 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 플렉스바디 브랜드만의 스트랩 제품 특징을 잘 살려 디자인 하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2017. 1",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_27.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#231D1F"
    );
    $detailPageItemArray[28] = array(
        "mainImage"=>"../../resources/thumbnail/project_28.jpg",
        "title"=>"템텍스 허리보호대 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 템텍스 브랜드만의 허리보호대 제품 특징을 잘 살려 디자인 하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2017. 2",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_28.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#E1DBDD"
    );
    $detailPageItemArray[29] = array(
        "mainImage"=>"../../resources/thumbnail/project_29.jpg",
        "title"=>"템텍스 격자테이프 상세페이지",
        "subTitle"=>"오픈마켓 판매용으로 제작된 상세페이지 입니다. 템텍스만 브랜드만의의 격자테이프 제품 특징을 잘 살려 디자인 하였습니다.",
        "client"=>"온플",
        "releaseDate"=>"2017. 2",
        "type"=>$categoryArray['03'],
        "subImage"=>"../../resources/detailPage/project_29.jpg",
        "imageAlt"=>"상품 상세페이지",
        "mainBackgroundColor"=>"#57AEFE"
    );
    //.... 필요한 만큼 추가



    //SNS 페이지용 데이터 배열
    $snsPageItemArray = array();

    //SNS 페이지 각 아이템 항목들의 내용
    $snsPageItemArray[7] = array(
        "mainImage"=>"../../resources/thumbnail/project_07.jpg",
        "title"=>"손가락별 반지 의미",
        "subTitle"=>"각 손가락별 반지의 의미에 대해 좀더 확실히 전달하고자 sns 카드뉴스 형태로 제작하였습니다.",
        "client"=>"준쥬얼리",
        "releaseDate"=>"2016. 6",
        "type"=>$categoryArray['04'],
        "subImage"=>array("project_07_01.jpg","project_07_02.jpg","project_07_03.jpg","project_07_04.jpg","project_07_05.jpg","project_07_06.jpg"),
        "imageLength"=>6,
        "imageAlt"=>"sns 카드뉴스",
        "mainBackgroundColor"=>"#FFE489"
    );
    // $snsPageItemArray[아이템 번호2] = array(
    //     "img1"=>"이미지1 경로",
    //     "title"=>"아이템 제목",
    //     "subTitle"=>"아이템 부제목",
    //     "client"=>"클라이언트",
    //     "releaseDate"=>"완성일",
    //     "type"=>"타입??",
    //     "subImages"=>array("이미지경로1", "이미지경로2", "이미지경로3" ... 넣고싶은만큼)
    // );
    //.... 필요한 만큼 추가




    $type = $_POST["type"]; //sns인지 상세페이지인지
    $itemIndex = $_POST["idx"]; //기존 아이템 목록용 배열에 idx 추가해주고 겹치지않게 번호 입력해주세용 ㅋㅋ (DB흉내내는중)

    if ($type == 'sns') { //SNS - 카테고리 이름 몰라요 써줘요
        echo json_encode($snsPageItemArray[$itemIndex]);
    } else if ($type == 'detail') { //상품상세 - 카테고리 이름 몰라용 써줘용
        echo json_encode($detailPageItemArray[$itemIndex]);
    } else if($type == 'uiux'){ // uiux 디자인
        echo json_encode($uiuxPageItemArray[$itemIndex]);
    }
    return true;
?>
