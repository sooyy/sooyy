const userId = sessionStorage.getItem("ID");

function check(){
	const tagArr = $("#tag").val().split("#");
	tagArr.shift();
	
	let tagjson = [];
	for(let i =0; i<tagArr.length; i++){
		tagjson.push({"tagContent": tagArr[i]});
	}
	//place 테이블에 데이터 등록
    function createPlace(){
		const obj = {
			userId: userId,
            placeName: $("#placeName").val(),
            area: $("#area").val(),
            district: $("#district").val(),
            detailAddress: $("#detailAddress").val(),
            theme: $("#theme").val(),
            placeIntroduction: $("#introduce").val(),
            placeImg: $("#placeImg").val(),
            tagList: tagjson // 배열 형태로 넣어야함. [ {}, {} ]			
		}
        postData(API_SERVER_URL_PLACE, obj);		
    }
	if($.trim($("#placeName").val()) == ""){
		alert("여행지명 입력하세요.");
		return false;
    }else if($("#area").val() == ""){
        alert("지역을 선택해주세요.")
        return false;
    }else if($("#area").val() !== "Sejong" && $("#district").val() == ""){
        alert("행정구역을 선택해주세요.")
        return false;
    }else if($("#detailAddress").val() == ""){
        alert("상세주소를 입력하세요.")
        return false;
	}else if($("#theme").val() == ""){
        alert("테마를 선택해주세요.")
        return false;
    }else if($.trim($("#introduce").val()) == ""){
        alert("소개글을 입력해주세요.")
        return false;
    }else if(tagArr.length > 3){
		alert("키워드는 3개까지만 입력 가능합니다.")
		return false;
	}else{
        createPlace();
        alert("여행지 등록이 정상적으로 완료되었습니다.");
        location.href = "myplace.html";
    };	
}

