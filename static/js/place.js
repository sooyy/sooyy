const pnum = sessionStorage.getItem("placeNum");
const userId = sessionStorage.getItem("ID");

if(userId == null){
	$("#gomain").attr("href","index.html");
}else{
	$("#gomain").attr("href","main2.html");
}

// 해당 지역에 새로운 여행지 등록 버튼 눌렀을 경우
function goenroll(){
	if(userId == null){
		alert("로그인 후 이용 가능합니다. 로그인을 해주세요.");
		return false;
	}else{
		location.href="enroll_place.html"
	}	
};

//리뷰등록
function enrollReview(){
	if(userId == null){
		alert("로그인 후 이용 가능합니다. 로그인을 해주세요.");
		return false;
	}else{
		if($.trim($("#writeReview").val()) === ""){
			alert("리뷰를 작성해 주세요.");
			return false;
		}else{
			let url = API_SERVER_URL_REVIEW;
			let obj = {
				userId: userId,
	            placeNumber: pnum,
	            reviewContent: $("#writeReview").val()
			}
			//postData(url,obj);
			//$("#writeReview").val("");
			//window.location.reload();	
			$.ajax({
				type: "POST",
				url: url,
				contentType: 'application/json',
				data: JSON.stringify(obj),
				dataType: "JSON",
				success: function(res){
					console.log(res);
					$("#writeReview").val("");
					window.location.reload();
				},
				error: function(){
					console.log("POST/UPDATE ajax 호출 오류");
				}
			})	

		}	
	}
}

// 등록된 여행지 정보 출력
$.ajax({
	type:"GET",
	url : API_SERVER_URL_PLACE + "/"+ pnum,
	dataType: "json",
	success: function(data){
		$("#pname").html(data.placeName +  `[${data.theme}]` + data.detailAddress);
		$("#pintro").html(data.placeIntroduction);
		if(data.placeImg === ""){
			$("#confirmImg").html("등록된 사진이 없습니다.");
		}else{
			$("#pimg").attr("src", data.placeImg);
		}

		if(data.tagList.length==0){
			$("#confirmTag").html("등록된 태그가 없습니다.");
		}else{
			for(let i=0; i<data.tagList.length; i++){					
				let span = "<span>"+ `#${data.tagList[i].tagContent} ` +"</span>";
				$("#ptag").append(span);
			}			
		}
		////// 리뷰
		//등록된 리뷰 출력
		if(data.reviewList.length !== 0){
			for(let count=0; count<data.reviewList.length; count++){
				let reviewId = data.reviewList[count].reviewId;
				let div = `<div id=div_${reviewId}>`+ `[${data.reviewList[count].userId}] ` + `<span id=content_${reviewId}>` + data.reviewList[count].reviewContent +"</span>" + "</div>";
				let div_modify = `<div id=div_modify_${reviewId}>`+ `[${data.reviewList[count].userId}] `+ "</div>";
				$("#reviewList").append(div, div_modify);
				//수정버튼 클릭 시 show
				let input = `<input type=text id=modifytext_${reviewId}>`;
				let okBtn = `<button type=button id=okBtn value=${reviewId}>` + "확인" + "</button>";
				let cancleBtn = `<button type=button id=cancleBtn value=${reviewId}>` + "취소" + "</button>";
				//수정버튼 클릭 시 hide				
				let modifyBtn = `<button type=button id=modifyBtn value=${reviewId}>` + "수정" + "</button>";
				let deleteBtn = `<button type=button id=deleteBtn value=${reviewId}>` + "삭제" + "</button>";
				$(`#div_${reviewId}`).append(modifyBtn, deleteBtn);
				$(`#div_modify_${reviewId}`).append(input, okBtn, cancleBtn).hide();
			}
			//리뷰삭제
			$(document).on("click","#deleteBtn",function(){
				$.ajax({
					type:"GET",
					url : API_SERVER_URL_REVIEW + "/" + $(this).val(),
					dataType: "json",
					success: function(data){
						if(data.userId !== userId){
							alert("삭제할 수 없습니다.");
							return false;
						}else{
							let url = API_SERVER_URL_REVIEW + "/" + data.reviewId;
							deleteData(url);
							$("#div_"+data.reviewId).remove();					
						}
					}
			
				})
			})
			
			//리뷰수정
			$(document).on("click","#modifyBtn",function(){
				//리뷰에 등록된 아이디와 현재 로그인된 아이디 비교
				$.ajax({
					type:"GET",
					url : API_SERVER_URL_REVIEW + "/" + $(this).val(),
					dataType: "json",
					success: function(data){
						if(data.userId !== userId){
							alert("수정할 수 없습니다.");
							return false;
						}else{
							$(`#div_${data.reviewId}`).hide();
							$(`#div_modify_${data.reviewId}`).show();
						}
					}
				})					
			})
			$(document).on("click","#okBtn",function(){
				if($.trim($(`#modifytext_${$(this).val()}`).val()) === ""){
					alert("수정할 내용을 입력해주세요.");
					return false;
				}else{
					//db에 수정한 리뷰 post
					let url = API_SERVER_URL_REVIEW + "/update";
					let obj = {
						reviewId: $(this).val(),
						reviewContent: $(`#modifytext_${$(this).val()}`).val()
					}				
					postData(url,obj);
					//content변경 후 다시 보여줌
					$("#content_"+$(this).val()).html($(`#modifytext_${$(this).val()}`).val());
					$(`#modifytext_${$(this).val()}`).val("");
					$(`#div_${$(this).val()}`).show();
					$(`#div_modify_${$(this).val()}`).hide();
		
				}
			
			})
			$(document).on("click","#cancleBtn",function(){
				$(`#modifytext_${$(this).val()}`).val("");
				$(`#div_${$(this).val()}`).show();
				$(`#div_modify_${$(this).val()}`).hide();				
				
			})
		}	
		///// 즐겨찾기
		//faovrite 여부 확인하여 출력
		for(let i=0; i < data.favoriteList.length; i++){
			if(data.favoriteList[i].userId === userId){
				$("#favoritebtn").attr("src","../img/star-full.png");
			}else{
				$("#favoritebtn").attr("src","../img/star-null.png");
			}
		}		

		// 여행지 수정 페이지로 이동
		$("#modiPlaceBtn").click(function(){
			if(data.userId == userId){
				location.href = "modiPlace.html";
			}else{
				alert("여행지 정보를 수정할 수 없습니다.");
				return false;
			}				
		})	
	},
	error: function(){
		alert("여행지 정보를 불러올 수 없습니다.")
	}
})
//즐겨찾기 등록
function onFavorite(){
	//post
	let url = API_SERVER_URL_FAVORITE;
	let obj = {
		userId: userId,
		placeNumber: pnum
	}
	postData(url,obj);	
   	$("#favoritebtn").attr("src","../img/star-full.png");
}
function offFavorite(){
	//delete
	let url = API_SERVER_URL_FAVORITE + "/" + userId +"&"+ pnum;
	deleteData(url);
    $("#favoritebtn").attr("src","../img/star-null.png");
}

function clickFavorite(){
	if(userId == null){
		alert("로그인 후 이용 가능합니다. 로그인을 해주세요.");
		return false;
	}else{
		$.ajax({
			type:"GET",
			url : API_SERVER_URL_FAVORITE,
			dataType: "json",
			success: function(data){
				for(let i=0; i<data.length; i++){
					if(data[i].userId == userId && data[i].placeNumber == pnum){
						offFavorite();
						return false;
					}
				}
				onFavorite();				
			}
		})			
	}
}

