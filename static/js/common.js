//const API_SERVER_URL = "http://localhost:39294";
const API_SERVER_URL = "http://qiip.quantum-ai.kr:39294";
const API_SERVER_URL_PRIVATE = API_SERVER_URL + "/user/private"
const API_SERVER_URL_PUBLIC = API_SERVER_URL+"/user/public"
const API_SERVER_URL_TAG = API_SERVER_URL+"/tag"
const API_SERVER_URL_PLACE = API_SERVER_URL+"/place"
const API_SERVER_URL_PLACE_SEARCH = API_SERVER_URL+"/place/search"
const API_SERVER_URL_REVIEW = API_SERVER_URL+"/review"
const API_SERVER_URL_FAVORITE = API_SERVER_URL+"/favorite"
 

// (fetch API) POST 호출 함수
function postData(url, obj){
	$.ajax({
		type: "POST",
		url: url,
		contentType: 'application/json',
		data: JSON.stringify(obj),
		dataType: "JSON",
		success: function(res){console.log(res);},
		error: function(){
			console.log("POST/UPDATE ajax 호출 오류");
		}
	})	
}

// (fetch API) DELETE 호출함수
function deleteData(url){
	$.ajax({
		method: "DELETE",
		url: url,
		dataType: "JSON",
		success: function(result){console.log(result);},
	})
}

