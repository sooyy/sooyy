function savePlace(id){
    $.ajax({
		type:"GET",
		url : API_SERVER_URL_PLACE +"/"+ id,
		dataType: "json",
		success: function(data){
			sessionStorage.setItem("placeNum",data.placeNumber);
			sessionStorage.setItem("placeArea", data.area);
			sessionStorage.setItem("placeDistrict", data.district);
			location.href = "place.html";
		}
	})
}

function getData(url){
    $.ajax({
		type:"GET",
		url : url,
		dataType: "json",
		success: function(data){
			$("#list").empty();
			if(data.length === 0){
				let span = "<span> 등록된 여행지가 없습니다. </span>";
				$("#list").append(span);
			}else{
				for(let i=0; i<data.length; i++){
					let li = `<li onclick=savePlace(${data[i].placeNumber})>`+ `[${data[i].theme}]` +  "	" + data[i].placeName + "		" + data[i].detailAddress +"</li>";
					$("#list").append(li);
				}
			}
		}
	})
}

function showList(){
	let area = $("#area").val();
	let district = $("#district").val();
	let placeName = $("#placeName").val();

	$("#searchList").html(`> ${area} > ${district} > ${placeName}`);

	if(area == "" && district == "" && $.trim(placeName) == ""){		
		//아무것도 선택안함.
		alert("선택된 항목이 없습니다.");
		return false;
	}else if(area == "" && district == "" && placeName != ""){
		//여행지명만 입력 시
		url = API_SERVER_URL_PLACE_SEARCH + "/name/"+ placeName;
	}else if(area != "" && district == "" && $.trim(placeName)==""){
		// 지역만 입력 시
		url = API_SERVER_URL_PLACE_SEARCH + "/" + area;
	}else if(area != "" && district != "" && $.trim(placeName)==""){
		//지역&행정구역 입력 시
		url = API_SERVER_URL_PLACE_SEARCH + "/" + area +"/"+ district;
	}else if(area != "" && district == "" && placeName != ""){
		//지역&여행지명 입력 시
		url = API_SERVER_URL_PLACE_SEARCH + "/area/name/"+ area +"/"+ placeName;
	}else{
		// 모두 입력 시		
		url = API_SERVER_URL_PLACE_SEARCH + "/"+ area +"/"+ district +"/"+ placeName;
	}
	getData(url);
}