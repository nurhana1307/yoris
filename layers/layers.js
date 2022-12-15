ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([115.418291, -0.962117, 117.386383, 0.318942]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_pantaidikalimantantimur_1 = new ol.format.GeoJSON();
var features_pantaidikalimantantimur_1 = format_pantaidikalimantantimur_1.readFeatures(json_pantaidikalimantantimur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pantaidikalimantantimur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pantaidikalimantantimur_1.addFeatures(features_pantaidikalimantantimur_1);
var lyr_pantaidikalimantantimur_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pantaidikalimantantimur_1, 
                style: style_pantaidikalimantantimur_1,
                interactive: true,
                title: 'pantai di kalimantan timur'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_pantaidikalimantantimur_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_pantaidikalimantantimur_1];
lyr_pantaidikalimantantimur_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'placepageUri': 'placepageUri', });
lyr_pantaidikalimantantimur_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'placepageUri': '', });
lyr_pantaidikalimantantimur_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'placepageUri': 'no label', });
lyr_pantaidikalimantantimur_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});