const specificArea = sessionStorage.getItem("placeArea");
const specificDistrict = sessionStorage.getItem("placeDistrict");

// if(specificArea != null && specificDistrict != null){
// 	$("#area").val(specificArea).prop("selected",true);
// 	changeDistrict();
// 	$("#district").val(specificDistrict).prop("selected",true); 
// }


// if(specificArea != null && specificDistrict != null){
// 	$("#area").val(specificArea).prop("selected",true);
// 	changeDistrict();
// 	$("#district").val(specificDistrict).prop("selected",true); 
// }


$(function(){
	if(specificArea != null && specificDistrict != null){
		$("#area").val(specificArea).prop("selected",true);
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
		for(let count=0; count < districtArray.length; count++){
			let option = $("<option>" + districtArray[count].dist + "</option>");
			$("#district").append(option);
			$("#district").val(specificDistrict).prop("selected",true); 
		};
	}
})