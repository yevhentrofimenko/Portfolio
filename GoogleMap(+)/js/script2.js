function initMap() {
	var map = new google.maps.Map(document.getElementById('map2'), {
   		center: {lat: 49.6020233, lng: 34.4871986},
   		zoom: 7
	});

	var marker1 = new google.maps.Marker({
   		position: {lat: 49.8326678, lng: 23.9420244},
   		map: map,
   		title: 'Львов',
   		icon: 'img/lviv.png'
	});

  var infowindow1 = new google.maps.InfoWindow({
      content: '<div class=infwin>Львов</div>'
  });

  marker1.addListener('click', function(e) {
      map.setZoom(6);
      map.setCenter(marker1.getPosition());
      infowindow1.open(map, marker1);
  });

	var marker2 = new google.maps.Marker({
   		position: {lat: 50.4016974, lng: 30.2518267,},
   		map: map,
   		title: 'Киев',
   		icon: 'img/kyiv.png'
	});

  var infowindow2 = new google.maps.InfoWindow({
    content: '<div class=infwin>Киев</div>'
  });

  marker2.addListener('click', function(e) {
      map.setZoom(6);
      map.setCenter(marker2.getPosition());
      infowindow2.open(map, marker2);
  });

	var marker3 = new google.maps.Marker({
   		position: {lat: 48.9117677, lng: 24.6820238},
   		map: map,
   		title: 'Ивано-Франковск',
   		icon: 'img/ivano-frank.png'
	});

  var infowindow3 = new google.maps.InfoWindow({
    content: '<div class=infwin>Ивано-Франковск</div>'
  });

  marker3.addListener('click', function(e) {
      map.setZoom(6);
      map.setCenter(marker3.getPosition());
      infowindow3.open(map, marker3);
  });

	var marker4 = new google.maps.Marker({
   		position: {lat: 47.855672, lng: 35.0349276},
   		map: map,
   		title: 'Запорожье',
   		icon: 'img/zaporizzya.png'
	});
  
  var infowindow4 = new google.maps.InfoWindow({
    content: '<div class=infwin>Запорожье</div>',
  });

  marker4.addListener('click', function(e) {
      map.setZoom(6);
      map.setCenter(marker4.getPosition());
      infowindow4.open(map, marker4);
  });

};
