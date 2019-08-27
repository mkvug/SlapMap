<template>
    <div id="map-container">
        <div id="map"></div>
    </div>
</template>

<script>
import gmapsInit from '../utils/gmaps';

export default {
    name: 'Map',
    async mounted() {
        try {
            const locations = [];
            var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQr67rOigwpANg9-wzJcD7aBPR7-ezPBMr1MZhBMH0-3wAvjBvqjzRODB1W596lIRZt-we_-eH7T4by/pub?output=csv';
            
            const google = await gmapsInit();
            axios.get(url)
                .then((response) => {
                    const data = Papa.parse(response.data);
                    const map = new google.maps.Map(
                        document.getElementById('map'), {
                            zoom: 5,
                            center: {
                                lat: 38.5341146,
                                lng: -98.0819922
                            },
                            disableDefaultUI: true,
                            styles: [
                                {
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    }
                                    ]
                                },
                                {
                                    "elementType": "labels",
                                    "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                    ]
                                },
                                {
                                    "elementType": "labels.icon",
                                    "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                    ]
                                },
                                {
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#616161"
                                    }
                                    ]
                                },
                                {
                                    "elementType": "labels.text.stroke",
                                    "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "administrative.land_parcel",
                                    "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "administrative.land_parcel",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#bdbdbd"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "administrative.neighborhood",
                                    "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#eeeeee"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#757575"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#e5e5e5"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#9e9e9e"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#757575"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#dadada"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#616161"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "road.local",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#9e9e9e"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "transit.line",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#e5e5e5"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "transit.station",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#eeeeee"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [
                                    {
                                        "color": "#c9c9c9"
                                    }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                    {
                                        "color": "#9e9e9e"
                                    }
                                    ]
                                }
                                ]
                        });
                    
                    var gMarkers = [];

                    var oms = new OverlappingMarkerSpiderfier(map, {
                        markersWontMove: true,
                        markersWontHide: true,
                        basicFormatEvents: true,
                        spiralFootSeparation: 200,
                        spiralLengthStart: 200,
                        spiralLengthFactor: 200
                    });

                    for (var i = 0; i < data.data.length; i++) {
                        if (!isNaN(data.data[i][2])) {
                            var marker = new google.maps.Marker({
                                position: {
                                    lat: parseFloat(data.data[i][3]),
                                    lng: parseFloat(data.data[i][4])
                                },
                                map: map,
                                icon: {
                                    url: data.data[i][5],
                                    scaledSize: new google.maps.Size(32,32)
                                }
                            });
                            google.maps.event.addListener(marker, 'spider_click', function(e) {  // 'spider_click', not plain 'click'
                                // iw.setContent(markerData.text);
                                // iw.open(map, marker);
                            });
                            oms.addMarker(marker);
                            gMarkers.push(marker);
                        }
                    }

                    var options = {
                        // cssClass: 'cluster-img',
                        styles: [{
                            height: 50,
                            width: 50,
                            url: 'https://mkvug.github.io/SlapMap/c1.png',
                        }],
                        imagePath: 'https://mkvug.github.io/SlapMap/c1.png',
                        maxZoom: 8
                    };


                    var mc = new MarkerClusterer(map, gMarkers, options);

                })
    } catch (error) {
      console.error(error);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#map-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    #map {
        width: 100%;
        height: 100%;
    }
}
</style>
