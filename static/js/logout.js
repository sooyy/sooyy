function logout(){
	let result = confirm("로그아웃 하시겠습니까?");

	if(result == true){
		sessionStorage.removeItem("ID");
		alert("정상적으로 로그아웃 되었습니다.");
		location.href = "index.html";
	}
}