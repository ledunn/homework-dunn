//Create a google map of Somerville, MA



function init(){
	var mapOptions={ 
		center: new google.mps.LatLng(42.387597, -71.099497),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom:13,
	};
	

	var SomervilleMap;
	SomervilleMap = new google.maps.Map(document.getElementById('map'), mapOptions);

}

function loadScript(){

var script=document.createElement('script');
script.src="http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";

document.body.appendChild(script);



}

window.onload=loadScript;


//create a marker for the map. (will eventually lead to many more markers )

var pinLocation= new google.maps.LatLng(42.402391, -71.124863);

var SomervilleMap;
	SomervilleMap = new google.maps.Map(document.getElementById('map'), mapOptions);

var startPosition= new google.maps.Marker({
	
	position: pinLocation,
	map: SomervilleMap,
	icon: "Images/map-pointer7.png"
});