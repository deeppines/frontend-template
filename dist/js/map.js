// Custom Google Map style
$(document).ready(function () {
    $(function () {
        if ($('#map').length > 0) { // #map - id conteiner
            jQuery(function ($) {
                var isMobile = {
                    android: function () {
                        return navigator.userAgent.match(/Android/i);
                    },
                    blackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    windows: function () {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    any: function () {
                        return (
                            isMobile.android() ||
                            isMobile.blackBerry() ||
                            isMobile.iOS() ||
                            isMobile.opera() ||
                            isMobile.windows());
                    }
                };

                var styles = [{
                    'featureType': 'all',
                    'stylers': [{
                        'saturation': -100
                    }, {
                        'gamma': 0.5
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'geometry',
                    'stylers': [{
                        'lightness': 100
                    }, {
                        'visibility': 'simplified'
                    }]
                }, {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': [{
                        'visibility': 'on'
                    }, {
                        'color': '#c4c4c4'
                    }]
                }, {
                    'featureType': 'poi',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'color': '#e2e2e2'
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'color': '#ffffff'
                    }]
                }];
                var styledMap = new google.maps.StyledMapType(styles, {
                    name: 'Styled Map'
                });

                var lat = 55.800129; // latitude
                var lng = 37.674181; // longitude
                var position = new google.maps.LatLng(lat, lng);
                var center = new google.maps.LatLng(lat, lng);
                var drag = true;

                var myOptions = {
                    zoom: 18,
                    center: center,
                    scrollwheel: false,
                    draggable: drag,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(
                    document.getElementById('map'), myOptions);
                var image = 'images/marker.png'; // icon map image
                var beachMarker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image
                });
                var marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image,
                    title: 'CasinoForumBatumi' // marker text
                });

                if (isMobile.any()) {
                    drag = false;
                }

                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

                $('.for_ct').click(function (e) {
                    if (e.srcElement === this) {
                        $(this).prev().click();
                    }
                });
            });
        }
    });
});