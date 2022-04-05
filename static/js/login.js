const loginId = $("#loginId");
const loginPw = $("#loginPw");

function confirmUser(){
	if(loginId.val()===""){
		alert("아이디를 입력해주세요.");
		return false;
	}else{
	// 아이디 확인
	   $.ajax({
			type:"GET",
			url : API_SERVER_URL_PRIVATE + "/" + loginId.val(),
			dataType: "json",
			success: function(data){
				//비밀번호 확인
				if(loginPw.val() === ""){
					alert("비밀번호를 입력해주세요.");
				}else if(data.userPw !== loginPw.val()){
					alert("비밀번호가 틀렸습니다.");
				}else{
					sessionStorage.setItem("ID", loginId.val());
					alert("정상적으로 로그인 되었습니다.");
					location.href="main2.html";
				}
			},
			error: function(){
				alert("아이디가 존재하지 않습니다.");
			}
		})
	}
}



