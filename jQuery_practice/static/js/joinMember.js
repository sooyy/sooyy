let memId = $("#memId");
let memPw = $("#memPw");
let reMemPw = $("#reMemPw");
let memName = $("#memName");
let year = $("#year");
let month = $("#month");
let day = $("#day");
let phoneNumber = $("#phoneNumber");


function checkDupId(){
	// 아이디 유효성 검사
	const idCheck = /^[a-zA-z0-9]{4,12}$/;
	if(!idCheck.test($("#memId").val())){
		alert("아아디는 영문 대/소문자와 숫자 조합 4~12자리 이내로 입력가능합니다.");
		return false;		
	}
    // 아이디 중복 확인
   $.ajax({
		type:"GET",
		url : API_SERVER_URL_PUBLIC,
		dataType: "json",
		success: function(data){
			for(let count=0; count<data.length; count++){
				if(memId.val() === data[count].userId){
					//alert toggle 하기. $("#notAvailable").show();
					$("#notAvailable").show();
					$("#available").hide();
					//$("#dupInfo").html("사용 불가능한 아이디 입니다.").css("color","red");
					return false;
				}
			}
			//alert toggle 하기. $("#available").show();
			$("#available").show();
			$("#notAvailable").hide();
			//$("#dupInfo").html("사용가능한 아이디 입니다.").css("color","blue");
			sessionStorage.setItem("confirmId", memId.val());
		}
	})
}

//회원정보 등록
function check(){
	let birth = new Date(year.val(), month.val() - 1, day.val());
	const confirmId = sessionStorage.getItem("confirmId");
	//비밀번호&이름&생년월일&전화번호 유효성 검사
	const pwCheck = /^[a-zA-z0-9]{6,16}$/;
	//영문 or 한글만 입력 가능
	const nameCheck = /^[a-zA-Z가-힣]+$/;
	//전화번호 체크
	const numberCheck = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
	
	function joinMember(){
		const obj = {
		   userId: memId.val(),
		   memPrivate: {
				"userPw": memPw.val(),
				"userName": memName.val(),
				"birth": birth,
				"phoneNumber": phoneNumber.val()
			}			
		}
		postData(API_SERVER_URL_PUBLIC + "/join", obj);
	}

	if(memId.val() === ""){
		alert("아이디를 입력하세요.");
		return false;		
	}else if(confirmId === null || confirmId != memId.val()){
		//$("#dupInfo").html("");
		$("#notAvailable").hide();
		$("#available").hide();
		//$("#available, #notAvailable").hide();
		
		alert("아이디 중복확인 버튼을 눌러주세요.");
		return false;
	}else if(memPw.val() === ""){
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
	}else if(memName.val() === ""){
		alert("이름을 입력하세요.");
		return false;		
	}else if(!nameCheck.test(memName.val())){
		alert("이름을 확인해주세요.");
		return false;	
	}else if(year.val() === "" || month.val() === "" || day.val() === ""){
		alert("생년월일을 입력하세요.");
		return false;	
	}else if(year.val() < 1930 || year.val() > 2022 || month.val() < 1 || month.val() > 12 || day.val() < 1 || day.val() > 31){
		alert("생년월일을 확인해주세요.");
		return false;
	}else if(phoneNumber.val() === ""){
		alert("전화번호를 입력하세요.");
		return false;	
	}else if(!numberCheck.test(phoneNumber.val())){
		alert("전화번호를 확인해주세요.")
		return false;
	}else{
		joinMember();
		sessionStorage.removeItem("confirmId");
		alert("회원가입이 정상적으로 완료되었습니다.");
		location.href="login.html"	
	};
}
