(function() {

	window.onload = function() {

		// Creating a new map
		var map = new google.maps.Map(document.getElementById("map"), {
          center: new google.maps.LatLng(39.733649, -104.992426),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });


		// Creating the JSON data
		var json = [
		    {
		        "title": "Aaron",
		        "lat": 39.734017,
		        "lng": -104.996601,
		        "description": "<strong>Aaron</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    },
		    {
          "title": "Kyle",
          "lat": 39.734129,
          "lng": -104.997419,
          "description": "<strong>Kyle</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    },
		    {
          "title": "Danny",
          "lat": 39.734700,
          "lng": -104.995971,
          "description": "<strong>Danny</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    },
        {
          "title": "Chad",
          "lat": 39.735470,
          "lng": -104.992210,
          "description": "<strong>Chad</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    },
        {
          "title": "Peter",
          "lat": 39.732136,
          "lng": -104.990728,
          "description": "<strong>Peter</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    },
        {
          "title": "Kim",
          "lat": 39.730320,
          "lng": -104.994593,
          "description": "<strong>Kim</strong> has a open spot for you if you want it. <strong>$1.00/HR</strong> "
		    }
		]

		// Creating a global infoWindow object that will be reused by all markers
		var infoWindow = new google.maps.InfoWindow();

		// Looping through the JSON data
		for (var i = 0, length = json.length; i < length; i++) {
			var data = json[i],
				latLng = new google.maps.LatLng(data.lat, data.lng);

			// Creating a marker and putting it on the map
			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: data.title
			});

			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					infoWindow.setContent(data.description);
					infoWindow.open(map, marker);
				});


			})(marker, data);

		}

	}

})();
