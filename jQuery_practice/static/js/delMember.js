// function deleteuser(){	
// 	let result = confirm("정말 탈퇴하시겠습니까?");
// 	if(result == true){
// 		const userId = sessionStorage.getItem("ID");
// 		deleteData(API_SERVER_URL_PRIVATE + "/" + userId);
// 		sessionStorage.removeItem("ID");
// 		alert("정상적으로 탈퇴되었습니다.");
// 		location.href = "index.html";	
// 	}
// }

$(function(){
	$("#outMemberBtn").click(function(){
		let result = confirm("정말 탈퇴하시겠습니까?");
		if(result == true){
			const userId = sessionStorage.getItem("ID");
			deleteData(API_SERVER_URL_PRIVATE + "/" + userId);
			sessionStorage.removeItem("ID");
			alert("정상적으로 탈퇴되었습니다.");
			location.href = "index.html";	
		}
	})
})