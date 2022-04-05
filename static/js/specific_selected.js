const specificArea = sessionStorage.getItem("placeArea");
const specificDistrict = sessionStorage.getItem("placeDistrict");

if(specificArea != null && specificDistrict != null){
	$("#area").val(specificArea).prop("selected",true);
	changeDistrict();
	$("#district").val(specificDistrict).prop("selected",true); 
}