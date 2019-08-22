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
                    const data = csv2array(response.data, ',');
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

                    for (var i = 0; i < data.length; i++) {
                        if (!isNaN(data[i][2])) {
                            var marker = new google.maps.Marker({
                                position: {
                                    lat: parseFloat(data[i][2]),
                                    lng: parseFloat(data[i][3])
                                },
                                map: map,
                                icon: {
                                    url: data[i][4],
                                    scaledSize: new google.maps.Size(32,32)
                                }
                            });
                            gMarkers.push(marker);
                        }
                    }

                    var mc = new MarkerClusterer(map, gMarkers, {
                            imagePath: 'https://mkvug.github.io/SlapMap/img/cluster'
                        });
                })
    } catch (error) {
      console.error(error);
    }
  },
}

function csv2array(data, delimeter) {
  // Retrieve the delimeter
  if (delimeter == undefined) 
    delimeter = ',';
  if (delimeter && delimeter.length > 1)
    delimeter = ',';

  // initialize variables
  var newline = '\n';
  var eof = '';
  var i = 0;
  var c = data.charAt(i);
  var row = 0;
  var col = 0;
  var array = new Array();

  while (c != eof) {
    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i); // read next char
    }
    
    // get value
    var value = "";
    if (c == '\"') {
      // value enclosed by double-quotes
      c = data.charAt(++i);
      
      do {
        if (c != '\"') {
          // read a regular character and go to the next character
          value += c;
          c = data.charAt(++i);
        }
        
        if (c == '\"') {
          // check for escaped double-quote
          var cnext = data.charAt(i+1);
          if (cnext == '\"') {
            // this is an escaped double-quote. 
            // Add a double-quote to the value, and move two characters ahead.
            value += '\"';
            i += 2;
            c = data.charAt(i);
          }
        }
      }
      while (c != eof && c != '\"');
      
      if (c == eof) {
        throw "Unexpected end of data, double-quote expected";
      }

      c = data.charAt(++i);
    }
    else {
      // value without quotes
      while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
        value += c;
        c = data.charAt(++i);
      }
    }

    // add the value to the array
    if (array.length <= row) 
      array.push(new Array());
    array[row].push(value);
    
    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i);
    }

    // go to the next row or column
    if (c == delimeter) {
      // to the next column
      col++;
    }
    else if (c == newline) {
      // to the next row
      col = 0;
      row++;
    }
    else if (c != eof) {
      // unexpected character
      throw "Delimiter expected after character " + i;
    }
    
    // go to the next character
    c = data.charAt(++i);
  }  
  
  return array;
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
