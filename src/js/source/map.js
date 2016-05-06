//Custom Google Map style

$(function () {
	if ($("#map").length > 0) { //#map - id conteiner

		jQuery(function ($) {
			var isMobile = {
				Android: function () {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function () {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function () {
					return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};

			var styles = [{
				"featureType": "all",
				"stylers": [{
					"saturation": -100
					}, {
					"gamma": 0.5
					}]
				}];
			var styles = [{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"lightness": 100
					}, {
					"visibility": "simplified"
					}]
            }, {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"visibility": "on"
					}, {
					"color": "#c4c4c4"
					}]
            }, {
				"featureType": "poi",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#e2e2e2"
					}]
            }, {
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
					}]
				}];
			var styledMap = new google.maps.StyledMapType(styles, {
				name: "Styled Map"
			});

			var lat = 55.800129; //latitude
			var lng = 37.674181; //longitude
			var position = new google.maps.LatLng(lat, lng);
			var center = new google.maps.LatLng(lat, lng);
			var drag = true;
			if (isMobile.any()) {
				drag = false;
			}
			var myOptions = {
				zoom: 18,
				center: center,
				scrollwheel: false,
				draggable: drag,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(
				document.getElementById("map"),
				myOptions);

			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');

			var image = 'images/marker.png'; //icon map image

			var beachMarker = new google.maps.Marker({
				position: position,
				map: map,
				icon: image
			});

			var marker = new google.maps.Marker({
				position: position,
				map: map,
				icon: image,
				title: "CasinoForumBatumi" //marker text
			});

			$('.for_ct').click(function (e) {
				if (e.srcElement == this)
					$(this).prev().click();
			});
		});
	}
})