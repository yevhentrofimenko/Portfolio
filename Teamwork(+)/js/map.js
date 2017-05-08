  function initMap() {
        var london = {lat: 51.512566, lng: -0.139962};
        var ny = {lat: 40.767947, lng: -73.982357};
        var paris = {lat: 48.863720, lng: 2.334442};
        

        var infoWindowText = $('.info-window').html();
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 50, lng: -35},
          mapTypeId: google.maps.MapTypeId.HYBRIDE,

        });
        var marker = new google.maps.Marker({
          position: london,
          map: map,
          icon: "img/Stores.png",
          animation: google.maps.Animation.DROP,
        });


        var marker2 = new google.maps.Marker({
          position: ny,
          map: map,
          icon: "img/Stores.png",
          animation: google.maps.Animation.DROP,
        });

       
       var marker3 = new google.maps.Marker({
        position: paris,
        map: map,
         icon: "img/Stores.png",
        animation: google.maps.Animation.DROP,




       });

     }

     
    