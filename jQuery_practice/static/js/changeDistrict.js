let seoulList = [
    {dist:'강남구'},{dist:'강동구'},{dist:'강북구'},{dist:'강서구'},{dist:'관악구'},{dist:'광진구'},{dist:'구로구'},{dist:'금천구'},{dist:'노원구'},{dist:'도봉구'},
    {dist:'동대문구'},{dist:'동작구'},{dist:'마포구'},{dist:'서대문구'},{dist:'서초구'},{dist:'성동구'},{dist:'성북구'},{dist:'송파구'},{dist:'양천구'},{dist:'영등포구'},
    {dist:'용산구'},{dist:'은평구'},{dist:'종로구'},{dist:'중구'},{dist:'중랑구'}
];
let gyeonggiList = [
    {dist:'가평군'},{dist:'고양시 덕양군'},{dist:'고양시 일산동구'},{dist:'고양시 일산서구'},{dist:'과천시'},{dist:'광명시'},{dist:'광주시'},{dist:'구리시'},{dist:'군포시'},{dist:'김포시'},
    {dist:'남양주시'},{dist:'동두천시'},{dist:'부천시'},{dist:'성남시 분당구'},{dist:'성남시 수정구'},{dist:'성남시 중원구'},{dist:'수원시 권선구'},{dist:'수원시 영동구'},{dist:'수원시 장안구'},{dist:'수원시 팔달구'},
    {dist:'시흥시'},{dist:'안산시 단원구'},{dist:'안산시 상록구'},{dist:'안성시'},{dist:'안양시 동안구'},{dist:'안양시 만안구'},{dist:'양주시'},{dist:'양평군'},{dist:'여주시'},{dist:'연천군'},
    {dist:'오산시'},{dist:'용인시 기흥구'},{dist:'용인시 수지구'},{dist:'용인시 처인구'},{dist:'의왕시'},{dist:'의정부시'},{dist:'이천시'},{dist:'파주시'},{dist:'평택시'},{dist:'포천시'},{dist:'하남시'},{dist:'화성시'}
];
let busanList = [
    {dist:'강서구'},{dist:'금정구'},{dist:'기장군'},{dist:'남구'},{dist:'동구'},{dist:'동래구'},
    {dist:'부산진구'},{dist:'북구'},{dist:'사상구'},{dist:'사하구'},{dist:'서구'},{dist:'수영구'},
    {dist:'연제구'},{dist:'영도구'},{dist:'중구'},{dist:'해운대구'}
];
let daeguList = [
    {dist:'남구'},{dist:'달서구'},{dist:'달성군'},{dist:'동구'},{dist:'북구'},{dist:'서구'},{dist:'수성구'},{dist:'중구'}
];
let incheonList = [
    {dist:'강화군'},{dist:'계양구'},{dist:'남동구'},{dist:'동구'},{dist:'미추홀구'},{dist:'부평구'},{dist:'서구'},{dist:'연수구'},{dist:'옹진군'},{dist:'중구'}
];
let gwangjuList = [
    {dist:'서구'},{dist:'북구'},{dist:'동구'},{dist:'남구'},{dist:'광산구'}
];
let daejeonList = [
    {dist:'대덕구'},{dist:'동구'},{dist:'서구'},{dist:'유성구'},{dist:'중구'}
];
let ulsanList = [
    {dist:'남구'},{dist:'동구'},{dist:'북구'},{dist:'울주군'},{dist:'중구'}
];
let gangwonList = [
    {dist:'강릉시'},{dist:'고성군'},{dist:'동해시'},{dist:'삼척시'},{dist:'속초시'},{dist:'양구군'},{dist:'양양군'},{dist:'영원군'},{dist:'원주시'},{dist:'인제군'},
    {dist:'정선군'},{dist:'철원군'},{dist:'춘천시'},{dist:'태백시'},{dist:'평창군'},{dist:'홍천군'},{dist:'화천군'},{dist:'횡성군'}
];
let ChungcheongNorthList = [
    {dist:'괴산군'},{dist:'단양군'},{dist:'보은군'},{dist:'영동군'},{dist:'옥천군'},{dist:'제천시'},{dist:'증평군'},{dist:'진천군'},{dist:'청주시 상당구'},{dist:'청주시 서원구'},
    {dist:'청주시 청원구'},{dist:'청주시 흥덕구'},{dist:'충주시'}
];
let ChungcheongSouthList = [
    {dist:'계룡시'},{dist:'공주시'},{dist:'금산군'},{dist:'논산시'},{dist:'당진시'},{dist:'보령시'},{dist:'부여군'},{dist:'서산시'},{dist:'서천군'},{dist:'아산시'},
    {dist:'천안시 동남구'},{dist:'천안시 서북구'},{dist:'청양군'},{dist:'태안군'},{dist:'홍성군'}
];
let jeollaNorthList = [
    {dist:'고창군'},{dist:'군산시'},{dist:'김제시'},{dist:'남원시'},{dist:'무주군'},{dist:'부안군'},{dist:'순창군'},{dist:'완주군'},{dist:'익산시'},{dist:'임실군'},
    {dist:'장수군'},{dist:'전주시 덕진구'},{dist:'전주시 완산구'},{dist:'정읍시'},{dist:'진안군'}
];
let jeollaSouthList = [
    {dist:'강진군'},{dist:'고흥군'},{dist:'곡성군'},{dist:'광양시'},{dist:'구례군'},{dist:'나주시'},{dist:'담양군'},{dist:'목표시'},{dist:'무안군'},{dist:'보성군'},
    {dist:'순천시'},{dist:'신안군'},{dist:'여수시'},{dist:'영광군'},{dist:'영얌군'},{dist:'완도군'},{dist:'장성군'},{dist:'장흥군'},{dist:'진도군'},{dist:'함평군'},
    {dist:'해남군'},{dist:'화순군'}
];
let gyeongNorthList = [
    {dist:'경산시'},{dist:'경주시'},{dist:'고령군'},{dist:'구미시'},{dist:'군위군'},{dist:'김천시'},{dist:'문경시'},{dist:'봉화군'},{dist:'상주시'},{dist:'성주군'},
    {dist:'안동시'},{dist:'영덕군'},{dist:'영양군'},{dist:'영주시'},{dist:'영천시'},{dist:'예천군'},{dist:'울릉군'},{dist:'울진군'},{dist:'의성군'},{dist:'청도군'},
    {dist:'청송군'},{dist:'칠곡군'},{dist:'포항시 남구'},{dist:'포항시 북구'}
];
let gyeongSouthList = [
    {dist:'거제시'},{dist:'거창군'},{dist:'고성군'},{dist:'김해시'},{dist:'남해군'},{dist:'밀향시'},{dist:'사천시'},{dist:'산청군'},{dist:'양산시'},{dist:'의령군'},
    {dist:'진주시'},{dist:'창녕군'},{dist:'창원시 마산합포구'},{dist:'창원시 마산회원구'},{dist:'창원시 성산구'},{dist:'창원시 의창구'},{dist:'창원시 진해구'},{dist:'통영시'},{dist:'하동군'},{dist:'함안군'},
    {dist:'함양군'},{dist:'합천군'}
];
let jejuList = [
    {dist:'서귀포시'},{dist:'제주시'}
];


//'세종특별자치시'는 행정구역이 없으므로 제외
// function changeDistrict(){
//     switch($("#area").val()){
// 		case 'Seoul':
// 			districtArray = seoulList;
// 			break;
// 		case 'Busan':
// 			districtArray = busanList;
// 			break;		
// 		case 'Daegu':
// 			districtArray = daeguList;
// 			break;
// 		case 'Incheon':
// 			districtArray = incheonList;
// 			break;	
// 		case 'Gwangju':
// 			districtArray = gwangjuList;
// 			break;
// 		case 'Daejeon':
// 			districtArray = daejeonList;
// 			break;
// 		case 'Ulsan':
// 			districtArray = ulsanList;
// 			break;
// 		case 'Gyeonggi-do':
// 			districtArray = gyeonggiList;
// 			break;
// 		case 'Gangwon-do':
// 			districtArray = gangwonList;
// 			break;
// 		case 'Chungcheongbuk-do':
// 			districtArray = ChungcheongNorthList;
// 			break;
// 		case 'Chungcheongnam-do':
// 			districtArray = ChungcheongSouthList;
// 			break;
// 		case 'Jeollabuk-do':
// 			districtArray = jeollaNorthList;
// 			break;
// 		case 'Jeollanam-do':
// 			districtArray = jeollaSouthList;
// 			break;
// 		case 'Gyeongsangbuk-do':
// 			districtArray = gyeongNorthList;
// 			break;
// 		case 'Gyeongsangnam-do':
// 			districtArray = gyeongSouthList;
// 			break;
// 		case 'Jeju-do':
// 			districtArray = jejuList;
// 			break;
// 		default:
// 			districtArray = [];
// 	}
// 	//첫번째 '행정구역'option만 제외하고 아래 option들은 모두 제거
// 	$("#district").children("option:not(:first)").remove();
// 	for(let count=0; count < districtArray.length; count++){
// 		let option = $("<option>" + districtArray[count].dist + "</option>");
// 		$("#district").append(option);
// 	};

// };	

$(function(){
	$("#area").change(function(){
		switch($("#area").val()){
			case 'Seoul':
				districtArray = seoulList;
				break;
			case 'Busan':
				districtArray = busanList;
				break;		
			case 'Daegu':
				districtArray = daeguList;
				break;
			case 'Incheon':
				districtArray = incheonList;
				break;	
			case 'Gwangju':
				districtArray = gwangjuList;
				break;
			case 'Daejeon':
				districtArray = daejeonList;
				break;
			case 'Ulsan':
				districtArray = ulsanList;
				break;
			case 'Gyeonggi-do':
				districtArray = gyeonggiList;
				break;
			case 'Gangwon-do':
				districtArray = gangwonList;
				break;
			case 'Chungcheongbuk-do':
				districtArray = ChungcheongNorthList;
				break;
			case 'Chungcheongnam-do':
				districtArray = ChungcheongSouthList;
				break;
			case 'Jeollabuk-do':
				districtArray = jeollaNorthList;
				break;
			case 'Jeollanam-do':
				districtArray = jeollaSouthList;
				break;
			case 'Gyeongsangbuk-do':
				districtArray = gyeongNorthList;
				break;
			case 'Gyeongsangnam-do':
				districtArray = gyeongSouthList;
				break;
			case 'Jeju-do':
				districtArray = jejuList;
				break;
			default:
				districtArray = [];
		}
		//첫번째 '행정구역'option만 제외하고 아래 option들은 모두 제거
		$("#district").children("option:not(:first)").remove();
		for(let count=0; count < districtArray.length; count++){
			let option = $("<option>" + districtArray[count].dist + "</option>");
			$("#district").append(option);
		};
	})

})