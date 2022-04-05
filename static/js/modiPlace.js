const userId = sessionStorage.getItem("ID");
const pnum = sessionStorage.getItem("placeNum");

let tagCombine = [];
//기존 저장된 데이터 출력
$.ajax({
	type:"GET",
	url : API_SERVER_URL_PLACE +"/"+ pnum,
	dataType: "json",
	success: function(data){
		$("#placeName").attr("value",data.placeName);
		$("#detailAddress").attr("value",data.detailAddress);
		$("#introduce").html(data.placeIntroduction);
		$("#placeImg").attr("value",data.placeImg);
		$("#theme").val(data.theme).prop("selected",true);
		
		for(let count=0; count<data.tagList.length; count++){	
			tagCombine.push(`#${data.tagList[count].tagContent}`);
			let alltag = tagCombine.join("");
			$("#tag").attr("value", alltag)
		}		
	}
})

function check(){
	deleteData(API_SERVER_URL_TAG + "/" + pnum);
	
	const tagArr = $("#tag").val().split("#");
	tagArr.shift();
	
	let tagjson = [];
	for(let count =0; count<tagArr.length; count++){
		tagjson.push(
			{"placeNumber": pnum, "userId": userId, "tagContent": tagArr[count]}
		);
	}
	//place 테이블에 데이터 수정(place&tag동시에)
    function updatePlaceInfo(){	
		const obj = {
			placeNumber: pnum,
            placeName: $("#placeName").val(),
            area: $("#area").val(),
            district: $("#district").val(),
            placeImg: $("#placeImg").val(),
            detailAddress: $("#detailAddress").val(),
            theme: $("#theme").val(),
            placeIntroduction: $("#introduce").val(),
            tagList: tagjson
		}
		postData(API_SERVER_URL_PLACE + "/update", obj);		
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
		updatePlaceInfo();
        sessionStorage.setItem("placeArea",area.value);
        sessionStorage.setItem("placeDistrict",district.value);
        alert("여행지 정보 수정이 정상적으로 완료되었습니다.");
		location.href="myplace.html"
	}
};