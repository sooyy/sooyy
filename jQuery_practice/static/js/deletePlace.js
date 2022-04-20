const userId = sessionStorage.getItem("ID");

$(function(){
	$.ajax({
		method: "GET",
		url: API_SERVER_URL_PLACE + "/enroll/" + userId,
		datatype: "JSON",
		success: function(data){
			if(data.length === 0){
				$("#nullPlace").html("등록한 여행지가 없습니다.");
				return false;
			}else{
				for(let count = 0; count < data.length; count++){
					let div = `<div id=div_${data[count].placeNumber} class="input-group-text" style="margin:10px;">` + `<input type=checkbox value=${data[count].placeNumber}>`+ data[count].placeName + "</input>" +"</div>";
					$("#list").append(div);
				}
			}
	
		}
	})
	// $(document).on("click", "#deletebtn", function(){
	// 	let countSelect = $("input:checkbox:checked").length;
	// 	if(countSelect === 0){
	// 		alert("선택된 여행지가 없습니다.");
	// 		return false;
	// 	}else{
	// 		$("input:checkbox:checked").each(function(){
	// 			deleteData(API_SERVER_URL_PLACE + "/delete/"+ $(this).val());
	// 			$("#div_" + $(this).val()).remove();
	// 		})
	// 	}	
	// })
	$("#deletebtn").click(function(){
		let countSelect = $("input:checkbox:checked").length;
		if(countSelect === 0){
			alert("선택된 여행지가 없습니다.");
			return false;
		}else{
			$("input:checkbox:checked").each(function(){
				deleteData(API_SERVER_URL_PLACE + "/delete/"+ $(this).val());
				$("#div_" + $(this).val()).remove();
			})
		}
	})
	sessionStorage.removeItem("placeArea");
	sessionStorage.removeItem("placeDistrict");	
})



// $.ajax({
// 	method: "GET",
// 	url: API_SERVER_URL_PLACE + "/enroll/" + userId,
// 	datatype: "JSON",
// 	success: function(data){
// 		if(data.length === 0){
// 			$("#nullPlace").html("등록한 여행지가 없습니다.");
// 			return false;
// 		}else{
// 			for(let count = 0; count < data.length; count++){
// 				let div = `<div id=div_${data[count].placeNumber} class="input-group-text" style="margin:10px;">` + `<input type=checkbox value=${data[count].placeNumber}>`+ data[count].placeName + "</input>" +"</div>";
// 				$("#list").append(div);
// 			}
// 		}

// 	}
// })

// function deleteplace(){
// 	let countSelect = $("input:checkbox:checked").length;
// 	if(countSelect === 0){
// 		alert("선택된 여행지가 없습니다.");
// 		return false;
// 	}else{
// 		$("input:checkbox:checked").each(function(){
// 			deleteData(API_SERVER_URL_PLACE + "/delete/"+ $(this).val());
// 			$("#div_" + $(this).val()).remove();
// 		})
// 	}
// }

// sessionStorage.removeItem("placeArea");
// sessionStorage.removeItem("placeDistrict");