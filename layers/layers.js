var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPendudukKotaYogyakarta_1 = new ol.format.GeoJSON();
var features_KepadatanPendudukKotaYogyakarta_1 = format_KepadatanPendudukKotaYogyakarta_1.readFeatures(json_KepadatanPendudukKotaYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPendudukKotaYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKotaYogyakarta_1.addFeatures(features_KepadatanPendudukKotaYogyakarta_1);
var lyr_KepadatanPendudukKotaYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKotaYogyakarta_1, 
                style: style_KepadatanPendudukKotaYogyakarta_1,
                popuplayertitle: 'Kepadatan Penduduk Kota Yogyakarta',
                interactive: true,
    title: 'Kepadatan Penduduk Kota Yogyakarta<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_0.png" /> Tinggi (14 - 18 per km2)<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_1.png" /> Sedang (12 - 14 per km2)<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_2.png" /> Rendah (8 - 12 per km2)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KepadatanPendudukKotaYogyakarta_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KepadatanPendudukKotaYogyakarta_1];
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'Luas wilayah (Ha)', 'join_Pendu': 'Jumlah Penduduk (Ribu)', 'join_Kepad': 'Kepadatan Penduduk (Ribu/km²)', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'join_No': 'Hidden', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'Hidden', 'join_Cuaca': 'Hidden', 'join_Erups': 'Hidden', 'join_Gelom': 'Hidden', 'join_Gel_1': 'Hidden', 'join_Gempa': 'Hidden', 'join_Kebak': 'Hidden', 'join_Keker': 'Hidden', 'join_Tanah': 'Hidden', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'join_Luas': 'inline label - always visible', 'join_Pendu': 'inline label - always visible', 'join_Kepad': 'inline label - always visible', });
lyr_KepadatanPendudukKotaYogyakarta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});