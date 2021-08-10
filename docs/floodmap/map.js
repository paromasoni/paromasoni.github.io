mapboxgl.accessToken = 'pk.eyJ1IjoicHNzMjE1OCIsImEiOiJja2lnbXY3emcyZXM2MnJudjVmdnJ4a3Z0In0.gFuomjqGAuItvUGdJQGc4Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pss2158/cks3imcfx6kyf17p2eegoznly',
    zoom: 12.3,
    center: [-66.120, 18.441]
});




map.on('load', function() {
    map.addSource("floodmap", {  
          "type": "image", // specify type
          "url": "Raster_RGB_small.png", // URL
          "coordinates": [
            [-67.325623733, 18.570197894],
            [-64.511291792, 18.570197894],
            [-64.511291792, 17.619780328],
            [-67.325623733, 17.619780328] 
            ]
         });
    
    map.addLayer({
                id: 'radar-layer',
                'type': 'raster',
                'source': 'floodmap',
                'paint': {
                'raster-fade-duration': 0
                }
                });
});
         
 