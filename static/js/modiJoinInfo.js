let userId = sessionStorage.getItem("ID");
let memPw = $("#memPw");
let reMemPw = $("#reMemPw");
let memName = $("#memName");
let newYear = $("#year");
let newMonth = $("#month");
let newDay = $("#day");
let phoneNumber = $("#phoneNumber");

// 아이디 출력
$("#memId").html(userId);

$.ajax({
	type:"GET",
	url : API_SERVER_URL_PRIVATE + '/' + userId,
	dataType: "json",
	success: function(data){
		$("#memName").html(data.userName);
		let birth = new Date(data.birth);
		let year = birth.getFullYear();
		let month = birth.getMonth();
		let date = birth.getDate();
		newYear.attr("value", year);
		newMonth.attr("value", month+1);
		newDay.attr("value", date);
		phoneNumber.attr("value", data.phoneNumber);
	}
})

function check(){	
	
	let newBirth = new Date(newYear.val(), newMonth.val() - 1, newDay.val());
    const pwCheck = /^[a-zA-z0-9]{6,16}$/;
	const numberCheck = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
	
	function updateInfo(){
		const obj = {		
			userId: userId,
            userPw: memPw.val(),
            birth: newBirth,
            phoneNumber: phoneNumber.val(),
        };
		postData(API_SERVER_URL_PRIVATE + "/update", obj);
	}
	
	if(memPw.val() === ""){
		alert("비밀번호를 입력하세요.");
		return false;
	}else if(!pwCheck.test(memPw.val())){
		alert("비밀번호는 영문 대/소문자와 숫자 조합 6~16자리 이내로 입력가능합니다.");
		return false;		
	}else if(memId.value === memPw.val()){
		//아이디와 비밀번호가 같을 경우
		alert("아이디와 비밀번호는 같을 수 없습니다.");
		return false;
	}else if(memPw.val() !== reMemPw.val()){
		alert("비밀번호가 일치하지 않습니다.");
		return false;		
	}else if(newYear.val() === "" || newMonth.val() === "" || newDay.val() === ""){
		alert("생년월일을 입력하세요.");
		return false;	
	}else if(newYear.val() < 1930 || newYear.val() > 2022 || newMonth.val() < 1 || newMonth.val() > 12 || newDay.val() < 1 || newDay.val() > 31){
		alert("생년월일을 확인해주세요.");
		return false;
	}else if(phoneNumber.val() === ""){
		alert("전화번호를 입력하세요.");
		return false;	
	}else if(!numberCheck.test(phoneNumber.val())){
		alert("전화번호를 확인해주세요.")
		return false;
	}else{
		updateInfo();
		alert("회원정보가 정상적으로 수정되었습니다.");
		location.href = "mypage.html";
	};
}


