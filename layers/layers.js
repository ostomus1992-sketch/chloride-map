var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'ลองดูแมพ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ms.longdo.com/mmmap/tile.php?zoom={z}&x={x}&y={y}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'แผนที่GoogleRoad',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_boundary_chonburi_3 = new ol.format.GeoJSON();
var features_boundary_chonburi_3 = format_boundary_chonburi_3.readFeatures(json_boundary_chonburi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_chonburi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_chonburi_3.addFeatures(features_boundary_chonburi_3);
var lyr_boundary_chonburi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_chonburi_3, 
                style: style_boundary_chonburi_3,
                popuplayertitle: 'boundary_chonburi',
                interactive: false,
                title: '<img src="styles/legend/boundary_chonburi_3.png" /> boundary_chonburi'
            });
var format_boundary_trat_4 = new ol.format.GeoJSON();
var features_boundary_trat_4 = format_boundary_trat_4.readFeatures(json_boundary_trat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_trat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_trat_4.addFeatures(features_boundary_trat_4);
var lyr_boundary_trat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_trat_4, 
                style: style_boundary_trat_4,
                popuplayertitle: 'boundary_trat',
                interactive: false,
                title: '<img src="styles/legend/boundary_trat_4.png" /> boundary_trat'
            });
var format_boundary_rayong_5 = new ol.format.GeoJSON();
var features_boundary_rayong_5 = format_boundary_rayong_5.readFeatures(json_boundary_rayong_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_rayong_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_rayong_5.addFeatures(features_boundary_rayong_5);
var lyr_boundary_rayong_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_rayong_5, 
                style: style_boundary_rayong_5,
                popuplayertitle: 'boundary_rayong',
                interactive: false,
                title: '<img src="styles/legend/boundary_rayong_5.png" /> boundary_rayong'
            });
var format_boundary_chanthaburi_6 = new ol.format.GeoJSON();
var features_boundary_chanthaburi_6 = format_boundary_chanthaburi_6.readFeatures(json_boundary_chanthaburi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_chanthaburi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_chanthaburi_6.addFeatures(features_boundary_chanthaburi_6);
var lyr_boundary_chanthaburi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_chanthaburi_6, 
                style: style_boundary_chanthaburi_6,
                popuplayertitle: 'boundary_chanthaburi',
                interactive: false,
                title: '<img src="styles/legend/boundary_chanthaburi_6.png" /> boundary_chanthaburi'
            });
var format_boundary_Map_7 = new ol.format.GeoJSON();
var features_boundary_Map_7 = format_boundary_Map_7.readFeatures(json_boundary_Map_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_Map_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_Map_7.addFeatures(features_boundary_Map_7);
var lyr_boundary_Map_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_Map_7, 
                style: style_boundary_Map_7,
                popuplayertitle: 'boundary_Map',
                interactive: false,
                title: '<img src="styles/legend/boundary_Map_7.png" /> boundary_Map'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: 'ขอบเขตจังหวัด',
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> ขอบเขตจังหวัด'
            });
var format_SALTppm_9 = new ol.format.GeoJSON();
var features_SALTppm_9 = format_SALTppm_9.readFeatures(json_SALTppm_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALTppm_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALTppm_9.addFeatures(features_SALTppm_9);
var lyr_SALTppm_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALTppm_9, 
                style: style_SALTppm_9,
                popuplayertitle: 'SALT(ppm)',
                interactive: true,
    title: 'SALT(ppm)<br />\
    <img src="styles/legend/SALTppm_9_0.png" /> 0 - 100<br />\
    <img src="styles/legend/SALTppm_9_1.png" /> 100 - 200<br />\
    <img src="styles/legend/SALTppm_9_2.png" /> 200 - 300<br />\
    <img src="styles/legend/SALTppm_9_3.png" /> 300 - 500<br />\
    <img src="styles/legend/SALTppm_9_4.png" /> 500 - 800<br />\
    <img src="styles/legend/SALTppm_9_5.png" /> > 800<br />' });
var lyr_IDW_Tmax_w_cmasktrat_mod_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Tmax_w_c (mask)trat_mod<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Tmax_w_cmasktrat_mod_10_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Tmax_w_cmasktrat_mod_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224269.495612, 1350341.287929, 11444218.674982, 1527398.893236]
        })
    });
var lyr_IDW_Tmax_w_cmaskRayong_MOD_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Tmax_w_c (mask)Rayong_MOD<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskRayong_MOD_11_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Tmax_w_cmaskRayong_MOD_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224269.495715, 1350341.288031, 11444218.675085, 1527398.893235]
        })
    });
var lyr_IDW_Tmax_w_cmaskchonburi_mod_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Tmax_w_c (mask)chonburi_mod<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchonburi_mod_12_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Tmax_w_cmaskchonburi_mod_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224269.495715, 1350341.288031, 11444218.675086, 1527398.893338]
        })
    });
var lyr_IDW_Tmax_w_cmaskchanthaburi_mod_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Tmax_w_c (mask)chanthaburi_mod<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskchanthaburi_mod_13_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Tmax_w_cmaskchanthaburi_mod_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224269.495613, 1350341.288031, 11444218.675086, 1527398.893339]
        })
    });
var lyr_IDW_Tmax_w_cmaskTotal_mod_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Tmax_w_c (mask)Total_mod<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Tmax_w_cmaskTotal_mod_14_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Tmax_w_cmaskTotal_mod_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224269.495715, 1350341.287929, 11444218.674983, 1527398.893338]
        })
    });
var format_C_0_chloride_by_weight_cement_Tidal_Zone_15 = new ol.format.GeoJSON();
var features_C_0_chloride_by_weight_cement_Tidal_Zone_15 = format_C_0_chloride_by_weight_cement_Tidal_Zone_15.readFeatures(json_C_0_chloride_by_weight_cement_Tidal_Zone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_chloride_by_weight_cement_Tidal_Zone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_chloride_by_weight_cement_Tidal_Zone_15.addFeatures(features_C_0_chloride_by_weight_cement_Tidal_Zone_15);
var lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_chloride_by_weight_cement_Tidal_Zone_15, 
                style: style_C_0_chloride_by_weight_cement_Tidal_Zone_15,
                popuplayertitle: 'C_0_(%chloride_by_weight_cement)_Tidal_Zone',
                interactive: true,
    title: 'C_0_(%chloride_by_weight_cement)_Tidal_Zone<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_0.png" /> 0 - 0.68<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_1.png" /> 0.68 - 1.36<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_2.png" /> 1.36 - 2.04<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_3.png" /> 2.04 - 3.4<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_4.png" /> 3.4 - 5.44<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Tidal_Zone_15_5.png" /> > 5.44<br />' });
var format_C_0_ppm_TidalZone_16 = new ol.format.GeoJSON();
var features_C_0_ppm_TidalZone_16 = format_C_0_ppm_TidalZone_16.readFeatures(json_C_0_ppm_TidalZone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_ppm_TidalZone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_ppm_TidalZone_16.addFeatures(features_C_0_ppm_TidalZone_16);
var lyr_C_0_ppm_TidalZone_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_ppm_TidalZone_16, 
                style: style_C_0_ppm_TidalZone_16,
                popuplayertitle: 'C_0_(ppm)_Tidal Zone',
                interactive: true,
    title: 'C_0_(ppm)_Tidal Zone<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_0.png" /> 0 - 100<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_1.png" /> 100 - 200<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_2.png" /> 200 - 300<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_3.png" /> 300 - 500<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_4.png" /> 500 - 800<br />\
    <img src="styles/legend/C_0_ppm_TidalZone_16_5.png" /> > 800<br />' });
var lyr_IDW_Smax_w_cmasktrat_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Smax_w_c (mask)trat<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Smax_w_cmasktrat_17_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Smax_w_cmasktrat_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461732, 1350341.536774, 11444218.204047, 1527419.431197]
        })
    });
var lyr_IDW_Smax_w_cmaskchonburi_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Smax_w_c (mask)chonburi<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchonburi_18_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Smax_w_cmaskchonburi_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461833, 1350341.536673, 11444218.203944, 1527419.431197]
        })
    });
var lyr_IDW_Smax_w_cmaskRayong_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Smax_w_c (mask)Rayong<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskRayong_19_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Smax_w_cmaskRayong_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461834, 1350341.536774, 11444218.204045, 1527419.431093]
        })
    });
var lyr_IDW_Smax_w_cmaskchanthaburi_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Smax_w_c (mask)chanthaburi<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskchanthaburi_20_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Smax_w_cmaskchanthaburi_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461937, 1350341.536878, 11444218.203942, 1527419.431092]
        })
    });
var lyr_IDW_Smax_w_cmaskTotal_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Smax_w_c (mask)Total<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Smax_w_cmaskTotal_21_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Smax_w_cmaskTotal_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461834, 1350341.536774, 11444218.204047, 1527419.431197]
        })
    });
var format_C_0_chloride_by_weight_cement_Splash_Zone_22 = new ol.format.GeoJSON();
var features_C_0_chloride_by_weight_cement_Splash_Zone_22 = format_C_0_chloride_by_weight_cement_Splash_Zone_22.readFeatures(json_C_0_chloride_by_weight_cement_Splash_Zone_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_chloride_by_weight_cement_Splash_Zone_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_chloride_by_weight_cement_Splash_Zone_22.addFeatures(features_C_0_chloride_by_weight_cement_Splash_Zone_22);
var lyr_C_0_chloride_by_weight_cement_Splash_Zone_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_chloride_by_weight_cement_Splash_Zone_22, 
                style: style_C_0_chloride_by_weight_cement_Splash_Zone_22,
                popuplayertitle: 'C_0_(%chloride_by_weight_cement)_Splash_Zone',
                interactive: true,
    title: 'C_0_(%chloride_by_weight_cement)_Splash_Zone<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_0.png" /> 0 - 0.68<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_1.png" /> 0.68 - 1.36<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_2.png" /> 1.36 - 2.04<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_3.png" /> 2.04 - 3.4<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_4.png" /> 3.4 - 5.44<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Splash_Zone_22_5.png" /> > 5.44<br />' });
var format_C_0_ppm_SplashZone_23 = new ol.format.GeoJSON();
var features_C_0_ppm_SplashZone_23 = format_C_0_ppm_SplashZone_23.readFeatures(json_C_0_ppm_SplashZone_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_ppm_SplashZone_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_ppm_SplashZone_23.addFeatures(features_C_0_ppm_SplashZone_23);
var lyr_C_0_ppm_SplashZone_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_ppm_SplashZone_23, 
                style: style_C_0_ppm_SplashZone_23,
                popuplayertitle: 'C_0_(ppm)_Splash Zone',
                interactive: true,
    title: 'C_0_(ppm)_Splash Zone<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_0.png" /> 0 - 100<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_1.png" /> 100 - 200<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_2.png" /> 200 - 300<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_3.png" /> 300 - 500<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_4.png" /> 500 - 800<br />\
    <img src="styles/legend/C_0_ppm_SplashZone_23_5.png" /> > 800<br />' });
var lyr_IDW_Amax_w_cmasktrat_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Amax_w_c (mask)trat<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Amax_w_cmasktrat_24_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Amax_w_cmasktrat_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461732, 1350341.536774, 11444218.204047, 1527419.431197]
        })
    });
var lyr_IDW_Amax_w_cmaskchonburi_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Amax_w_c (mask)chonburi<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchonburi_25_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Amax_w_cmaskchonburi_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461833, 1350341.536673, 11444218.203944, 1527419.431197]
        })
    });
var lyr_IDW_Amax_w_cmaskchanthaburi_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Amax_w_c (mask)chanthaburi<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskchanthaburi_26_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Amax_w_cmaskchanthaburi_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461937, 1350341.536878, 11444218.203942, 1527419.431092]
        })
    });
var lyr_IDW_Amax_w_cmaskRayong_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Amax_w_c (mask)Rayong<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskRayong_27_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Amax_w_cmaskRayong_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461834, 1350341.536774, 11444218.204045, 1527419.431093]
        })
    });
var lyr_IDW_Amax_w_cmaskTotal_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW_Amax_w_c (mask)Total<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_0.png" /> 0.01<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_1.png" /> 0.3<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_2.png" /> 0.6<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_3.png" /> 0.9<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_4.png" /> 1.2<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_5.png" /> 1.5<br />\
    <img src="styles/legend/IDW_Amax_w_cmaskTotal_28_6.png" /> >30<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_Amax_w_cmaskTotal_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11224259.461834, 1350341.536774, 11444218.204047, 1527419.431197]
        })
    });
var format_C_0_chloride_by_weight_cement_Air_Zone_29 = new ol.format.GeoJSON();
var features_C_0_chloride_by_weight_cement_Air_Zone_29 = format_C_0_chloride_by_weight_cement_Air_Zone_29.readFeatures(json_C_0_chloride_by_weight_cement_Air_Zone_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_chloride_by_weight_cement_Air_Zone_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_chloride_by_weight_cement_Air_Zone_29.addFeatures(features_C_0_chloride_by_weight_cement_Air_Zone_29);
var lyr_C_0_chloride_by_weight_cement_Air_Zone_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_chloride_by_weight_cement_Air_Zone_29, 
                style: style_C_0_chloride_by_weight_cement_Air_Zone_29,
                popuplayertitle: 'C_0_(%chloride_by_weight_cement)_Air_Zone',
                interactive: true,
    title: 'C_0_(%chloride_by_weight_cement)_Air_Zone<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_0.png" /> 0 - 0.68<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_1.png" /> 0.68 - 1.36<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_2.png" /> 1.36 - 2.04<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_3.png" /> 2.04 - 3.4<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_4.png" /> 3.4 - 5.44<br />\
    <img src="styles/legend/C_0_chloride_by_weight_cement_Air_Zone_29_5.png" /> > 5.44<br />' });
var format_C_0_ppm_Air_Zone_30 = new ol.format.GeoJSON();
var features_C_0_ppm_Air_Zone_30 = format_C_0_ppm_Air_Zone_30.readFeatures(json_C_0_ppm_Air_Zone_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_0_ppm_Air_Zone_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_0_ppm_Air_Zone_30.addFeatures(features_C_0_ppm_Air_Zone_30);
var lyr_C_0_ppm_Air_Zone_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_0_ppm_Air_Zone_30, 
                style: style_C_0_ppm_Air_Zone_30,
                popuplayertitle: 'C_0_(ppm)_Air_Zone',
                interactive: true,
    title: 'C_0_(ppm)_Air_Zone<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_0.png" /> 0 - 100<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_1.png" /> 100 - 200<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_2.png" /> 200 - 300<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_3.png" /> 300 - 500<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_4.png" /> 500 - 800<br />\
    <img src="styles/legend/C_0_ppm_Air_Zone_30_5.png" /> > 800<br />' });
var format_shade2_31 = new ol.format.GeoJSON();
var features_shade2_31 = format_shade2_31.readFeatures(json_shade2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shade2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shade2_31.addFeatures(features_shade2_31);
var lyr_shade2_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shade2_31, 
                style: style_shade2_31,
                popuplayertitle: 'shade 2',
                interactive: false,
                title: '<img src="styles/legend/shade2_31.png" /> shade 2'
            });
var format_shade2_32 = new ol.format.GeoJSON();
var features_shade2_32 = format_shade2_32.readFeatures(json_shade2_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shade2_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shade2_32.addFeatures(features_shade2_32);
var lyr_shade2_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shade2_32, 
                style: style_shade2_32,
                popuplayertitle: 'shade 2',
                interactive: false,
                title: '<img src="styles/legend/shade2_32.png" /> shade 2'
            });
var format_shade_TRAT_1_33 = new ol.format.GeoJSON();
var features_shade_TRAT_1_33 = format_shade_TRAT_1_33.readFeatures(json_shade_TRAT_1_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shade_TRAT_1_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shade_TRAT_1_33.addFeatures(features_shade_TRAT_1_33);
var lyr_shade_TRAT_1_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shade_TRAT_1_33, 
                style: style_shade_TRAT_1_33,
                popuplayertitle: 'shade_TRAT_1',
                interactive: false,
                title: '<img src="styles/legend/shade_TRAT_1_33.png" /> shade_TRAT_1'
            });
var format_shade_TRAT_1_34 = new ol.format.GeoJSON();
var features_shade_TRAT_1_34 = format_shade_TRAT_1_34.readFeatures(json_shade_TRAT_1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shade_TRAT_1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shade_TRAT_1_34.addFeatures(features_shade_TRAT_1_34);
var lyr_shade_TRAT_1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shade_TRAT_1_34, 
                style: style_shade_TRAT_1_34,
                popuplayertitle: 'shade_TRAT_1',
                interactive: false,
                title: '<img src="styles/legend/shade_TRAT_1_34.png" /> shade_TRAT_1'
            });
var format_RoadROAD_4_35 = new ol.format.GeoJSON();
var features_RoadROAD_4_35 = format_RoadROAD_4_35.readFeatures(json_RoadROAD_4_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadROAD_4_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadROAD_4_35.addFeatures(features_RoadROAD_4_35);
var lyr_RoadROAD_4_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadROAD_4_35, 
                style: style_RoadROAD_4_35,
                popuplayertitle: 'Road — ROAD_4',
                interactive: false,
                title: '<img src="styles/legend/RoadROAD_4_35.png" /> Road — ROAD_4'
            });
var format_ROADTOTAL_36 = new ol.format.GeoJSON();
var features_ROADTOTAL_36 = format_ROADTOTAL_36.readFeatures(json_ROADTOTAL_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADTOTAL_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADTOTAL_36.addFeatures(features_ROADTOTAL_36);
var lyr_ROADTOTAL_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADTOTAL_36, 
                style: style_ROADTOTAL_36,
                popuplayertitle: 'ROAD TOTAL',
                interactive: false,
                title: '<img src="styles/legend/ROADTOTAL_36.png" /> ROAD TOTAL'
            });
var group_ROADTOTAL = new ol.layer.Group({
                                layers: [lyr_RoadROAD_4_35,lyr_ROADTOTAL_36,],
                                fold: 'close',
                                title: 'ROADTOTAL'});
var group_SHADE = new ol.layer.Group({
                                layers: [lyr_shade2_31,lyr_shade2_32,lyr_shade_TRAT_1_33,lyr_shade_TRAT_1_34,],
                                fold: 'close',
                                title: 'SHADE'});
var group_Air_Zone_DATA_ppm = new ol.layer.Group({
                                layers: [lyr_C_0_ppm_Air_Zone_30,],
                                fold: 'close',
                                title: 'Air_Zone_DATA_ppm'});
var group_Air_Zone_chloride_by_weight_cement = new ol.layer.Group({
                                layers: [lyr_C_0_chloride_by_weight_cement_Air_Zone_29,],
                                fold: 'close',
                                title: 'Air_Zone_chloride_by_weight_cement'});
var group_MAP_AIRZONE = new ol.layer.Group({
                                layers: [lyr_IDW_Amax_w_cmasktrat_24,lyr_IDW_Amax_w_cmaskchonburi_25,lyr_IDW_Amax_w_cmaskchanthaburi_26,lyr_IDW_Amax_w_cmaskRayong_27,lyr_IDW_Amax_w_cmaskTotal_28,],
                                fold: 'close',
                                title: 'MAP_AIRZONE'});
var group_Splash_Zone_DATA_ppm = new ol.layer.Group({
                                layers: [lyr_C_0_ppm_SplashZone_23,],
                                fold: 'close',
                                title: 'Splash_Zone_DATA_ppm'});
var group_Splash_Zone_chloride_by_weight_cement = new ol.layer.Group({
                                layers: [lyr_C_0_chloride_by_weight_cement_Splash_Zone_22,],
                                fold: 'close',
                                title: 'Splash_Zone_chloride_by_weight_cement'});
var group_MAP_SplashZone = new ol.layer.Group({
                                layers: [lyr_IDW_Smax_w_cmasktrat_17,lyr_IDW_Smax_w_cmaskchonburi_18,lyr_IDW_Smax_w_cmaskRayong_19,lyr_IDW_Smax_w_cmaskchanthaburi_20,lyr_IDW_Smax_w_cmaskTotal_21,],
                                fold: 'close',
                                title: 'MAP_SplashZone'});
var group_Tidal_Zone_DATA_ppm = new ol.layer.Group({
                                layers: [lyr_C_0_ppm_TidalZone_16,],
                                fold: 'close',
                                title: 'Tidal_Zone_DATA_ppm'});
var group_Tidal_Zone_chloride_by_weight_cement = new ol.layer.Group({
                                layers: [lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15,],
                                fold: 'close',
                                title: 'Tidal_Zone_chloride_by_weight_cement'});
var group_MAP_TidalZone = new ol.layer.Group({
                                layers: [lyr_IDW_Tmax_w_cmasktrat_mod_10,lyr_IDW_Tmax_w_cmaskRayong_MOD_11,lyr_IDW_Tmax_w_cmaskchonburi_mod_12,lyr_IDW_Tmax_w_cmaskchanthaburi_mod_13,lyr_IDW_Tmax_w_cmaskTotal_mod_14,],
                                fold: 'close',
                                title: 'MAP_TidalZone'});
var group_DATA_ppm_Map_Salt = new ol.layer.Group({
                                layers: [lyr_SALTppm_9,],
                                fold: 'close',
                                title: 'DATA_ppm_Map_Salt'});
var group_BASE_MAP = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_2,lyr_boundary_chonburi_3,lyr_boundary_trat_4,lyr_boundary_rayong_5,lyr_boundary_chanthaburi_6,lyr_boundary_Map_7,lyr__8,],
                                fold: 'close',
                                title: 'BASE_MAP'});
var group_BACKUP = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr__1,],
                                fold: 'close',
                                title: 'BACKUP'});

lyr_GoogleSatellite_0.setVisible(false);lyr__1.setVisible(false);lyr_GoogleRoad_2.setVisible(true);lyr_boundary_chonburi_3.setVisible(false);lyr_boundary_trat_4.setVisible(false);lyr_boundary_rayong_5.setVisible(false);lyr_boundary_chanthaburi_6.setVisible(false);lyr_boundary_Map_7.setVisible(true);lyr__8.setVisible(false);lyr_SALTppm_9.setVisible(false);lyr_IDW_Tmax_w_cmasktrat_mod_10.setVisible(false);lyr_IDW_Tmax_w_cmaskRayong_MOD_11.setVisible(false);lyr_IDW_Tmax_w_cmaskchonburi_mod_12.setVisible(false);lyr_IDW_Tmax_w_cmaskchanthaburi_mod_13.setVisible(false);lyr_IDW_Tmax_w_cmaskTotal_mod_14.setVisible(false);lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15.setVisible(false);lyr_C_0_ppm_TidalZone_16.setVisible(false);lyr_IDW_Smax_w_cmasktrat_17.setVisible(false);lyr_IDW_Smax_w_cmaskchonburi_18.setVisible(false);lyr_IDW_Smax_w_cmaskRayong_19.setVisible(true);lyr_IDW_Smax_w_cmaskchanthaburi_20.setVisible(false);lyr_IDW_Smax_w_cmaskTotal_21.setVisible(false);lyr_C_0_chloride_by_weight_cement_Splash_Zone_22.setVisible(false);lyr_C_0_ppm_SplashZone_23.setVisible(false);lyr_IDW_Amax_w_cmasktrat_24.setVisible(false);lyr_IDW_Amax_w_cmaskchonburi_25.setVisible(false);lyr_IDW_Amax_w_cmaskchanthaburi_26.setVisible(false);lyr_IDW_Amax_w_cmaskRayong_27.setVisible(false);lyr_IDW_Amax_w_cmaskTotal_28.setVisible(false);lyr_C_0_chloride_by_weight_cement_Air_Zone_29.setVisible(false);lyr_C_0_ppm_Air_Zone_30.setVisible(true);lyr_shade2_31.setVisible(true);lyr_shade2_32.setVisible(true);lyr_shade_TRAT_1_33.setVisible(true);lyr_shade_TRAT_1_34.setVisible(true);lyr_RoadROAD_4_35.setVisible(true);lyr_ROADTOTAL_36.setVisible(false);
var layersList = [group_BACKUP,group_BASE_MAP,group_DATA_ppm_Map_Salt,group_MAP_TidalZone,group_Tidal_Zone_chloride_by_weight_cement,group_Tidal_Zone_DATA_ppm,group_MAP_SplashZone,group_Splash_Zone_chloride_by_weight_cement,group_Splash_Zone_DATA_ppm,group_MAP_AIRZONE,group_Air_Zone_chloride_by_weight_cement,group_Air_Zone_DATA_ppm,group_SHADE,group_ROADTOTAL];
lyr_boundary_chonburi_3.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_boundary_trat_4.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_boundary_rayong_5.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_boundary_chanthaburi_6.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_boundary_Map_7.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SALTppm_9.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_ppm_TidalZone_16.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_chloride_by_weight_cement_Splash_Zone_22.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_ppm_SplashZone_23.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_chloride_by_weight_cement_Air_Zone_29.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_C_0_ppm_Air_Zone_30.set('fieldAliases', {'fid': 'fid', 'รหัสสะพาน': 'รหัสสะพาน', 'ลำดับ': 'ลำดับ', 'ชื่อสะพาน': 'ชื่อสะพาน', 'กลุ่มสำรวจ': 'กลุ่มสำรวจ', 'แขวงทางหลวง': 'แขวงทางหลวง', 'หมายเลข': 'หมายเลข', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ปีที่สร้างเสร็จ (BMMS)': 'ปีที่สร้างเสร็จ (BMMS)', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'ปีที่สร้างเสร็จ (ราวสะพาน)', 'อายุตาม BMMS (ปี)': 'อายุตาม BMMS (ปี)', 'อายุตามราวสะพาน(ปี)': 'อายุตามราวสะพาน(ปี)', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'อายุสะพานคาดการ์ณการ์ณ(ปี)', 'ระยะห่างจากทะเล(km)': 'ระยะห่างจากทะเล(km)', 'ประเภทของสะพาน': 'ประเภทของสะพาน', 'วันที่เจาะตัวอย่าง': 'วันที่เจาะตัวอย่าง', 'Rebound Hammer Test (เสา)': 'Rebound Hammer Test (เสา)', 'Rebound Hammer Test (พื้น/คาน)': 'Rebound Hammer Test (พื้น/คาน)', 'ความเค็ม': 'ความเค็ม', 'CR': 'CR', 'ประเภทการเจาะAir Zone': 'ประเภทการเจาะAir Zone', 'A1max (ppm)': 'A1max (ppm)', 'A2max (ppm)': 'A2max (ppm)', 'A3max (ppm)': 'A3max (ppm)', 'Amaxavg': 'Amaxavg', 'AmaxC': 'AmaxC', 'S1max (ppm)': 'S1max (ppm)', 'S2max (ppm)': 'S2max (ppm)', 'S3max (ppm)': 'S3max (ppm)', 'Smaxavg': 'Smaxavg', 'SmaxC': 'SmaxC', 'T1max (ppm)': 'T1max (ppm)', 'T2max (ppm)': 'T2max (ppm)', 'T3max (ppm)': 'T3max (ppm)', 'Tmaxavg': 'Tmaxavg', 'TmaxC': 'TmaxC', 'Log_Cal_Amax': 'Log_Cal_Amax', 'Log_Cal_Smax': 'Log_Cal_Smax', 'Log_Cal_Tmax': 'Log_Cal_Tmax', 'Amax_water_Cement': 'Amax_water_Cement', 'Tmax_water_Cement': 'Tmax_water_Cement', 'Smax_water_Cement': 'Smax_water_Cement', });
lyr_shade2_31.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_shade2_32.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_shade_TRAT_1_33.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_shade_TRAT_1_34.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_RoadROAD_4_35.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'unique_id': 'unique_id', 'road_id': 'road_id', 'section_id': 'section_id', 'road_cl_id': 'road_cl_id', 'highway_co': 'highway_co', 'highway_na': 'highway_na', 'road_code': 'road_code', 'road_name': 'road_name', 'km_start_r': 'km_start_r', 'km_end_roa': 'km_end_roa', 'length_roa': 'length_roa', 'fnode': 'fnode', 'tnode': 'tnode', 'km_start_s': 'km_start_s', 'km_end_sec': 'km_end_sec', 'length': 'length', 'road_class': 'road_class', 'road_clas0': 'road_clas0', 'hierarchy_': 'hierarchy_', 'hierarchy0': 'hierarchy0', 'no_lane': 'no_lane', 'road_sf_ty': 'road_sf_ty', 'road_sf_t0': 'road_sf_t0', 'road_direc': 'road_direc', 'road_dire0': 'road_dire0', 'depot_code': 'depot_code', 'depot_name': 'depot_name', 'district_c': 'district_c', 'district_n': 'district_n', 'division_c': 'division_c', 'division_n': 'division_n', 'owner_org': 'owner_org', 'owner_org_': 'owner_org_', 'proclaim_d': 'proclaim_d', 'updated_da': 'updated_da', 'validfrom': 'validfrom', 'validto': 'validto', });
lyr_ROADTOTAL_36.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'unique_id': 'unique_id', 'road_id': 'road_id', 'section_id': 'section_id', 'road_cl_id': 'road_cl_id', 'highway_co': 'highway_co', 'highway_na': 'highway_na', 'road_code': 'road_code', 'road_name': 'road_name', 'km_start_r': 'km_start_r', 'km_end_roa': 'km_end_roa', 'length_roa': 'length_roa', 'fnode': 'fnode', 'tnode': 'tnode', 'km_start_s': 'km_start_s', 'km_end_sec': 'km_end_sec', 'length': 'length', 'road_class': 'road_class', 'road_clas0': 'road_clas0', 'hierarchy_': 'hierarchy_', 'hierarchy0': 'hierarchy0', 'no_lane': 'no_lane', 'road_sf_ty': 'road_sf_ty', 'road_sf_t0': 'road_sf_t0', 'road_direc': 'road_direc', 'road_dire0': 'road_dire0', 'depot_code': 'depot_code', 'depot_name': 'depot_name', 'district_c': 'district_c', 'district_n': 'district_n', 'division_c': 'division_c', 'division_n': 'division_n', 'owner_org': 'owner_org', 'owner_org_': 'owner_org_', 'proclaim_d': 'proclaim_d', 'updated_da': 'updated_da', 'validfrom': 'validfrom', 'validto': 'validto', });
lyr_boundary_chonburi_3.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_boundary_trat_4.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_boundary_rayong_5.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_boundary_chanthaburi_6.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_boundary_Map_7.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr__8.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SALTppm_9.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': 'TextEdit', 'Tmax_water_Cement': 'TextEdit', 'Smax_water_Cement': 'TextEdit', });
lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': 'TextEdit', 'Tmax_water_Cement': 'TextEdit', 'Smax_water_Cement': 'TextEdit', });
lyr_C_0_ppm_TidalZone_16.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': '', 'Tmax_water_Cement': '', 'Smax_water_Cement': '', });
lyr_C_0_chloride_by_weight_cement_Splash_Zone_22.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': 'TextEdit', 'Tmax_water_Cement': 'TextEdit', 'Smax_water_Cement': 'TextEdit', });
lyr_C_0_ppm_SplashZone_23.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': '', 'Tmax_water_Cement': '', 'Smax_water_Cement': '', });
lyr_C_0_chloride_by_weight_cement_Air_Zone_29.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': 'TextEdit', 'Tmax_water_Cement': 'TextEdit', 'Smax_water_Cement': 'TextEdit', });
lyr_C_0_ppm_Air_Zone_30.set('fieldImages', {'fid': 'TextEdit', 'รหัสสะพาน': 'TextEdit', 'ลำดับ': 'Range', 'ชื่อสะพาน': 'TextEdit', 'กลุ่มสำรวจ': 'TextEdit', 'แขวงทางหลวง': 'TextEdit', 'หมายเลข': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ปีที่สร้างเสร็จ (BMMS)': 'Range', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'TextEdit', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'TextEdit', 'อายุตาม BMMS (ปี)': 'Range', 'อายุตามราวสะพาน(ปี)': 'TextEdit', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'Range', 'ระยะห่างจากทะเล(km)': 'TextEdit', 'ประเภทของสะพาน': 'TextEdit', 'วันที่เจาะตัวอย่าง': 'TextEdit', 'Rebound Hammer Test (เสา)': 'TextEdit', 'Rebound Hammer Test (พื้น/คาน)': 'TextEdit', 'ความเค็ม': 'Range', 'CR': 'TextEdit', 'ประเภทการเจาะAir Zone': 'TextEdit', 'A1max (ppm)': 'TextEdit', 'A2max (ppm)': 'TextEdit', 'A3max (ppm)': 'TextEdit', 'Amaxavg': 'TextEdit', 'AmaxC': 'TextEdit', 'S1max (ppm)': 'TextEdit', 'S2max (ppm)': 'TextEdit', 'S3max (ppm)': 'TextEdit', 'Smaxavg': 'TextEdit', 'SmaxC': 'TextEdit', 'T1max (ppm)': 'TextEdit', 'T2max (ppm)': 'TextEdit', 'T3max (ppm)': 'TextEdit', 'Tmaxavg': 'TextEdit', 'TmaxC': 'TextEdit', 'Log_Cal_Amax': 'TextEdit', 'Log_Cal_Smax': 'TextEdit', 'Log_Cal_Tmax': 'TextEdit', 'Amax_water_Cement': '', 'Tmax_water_Cement': '', 'Smax_water_Cement': '', });
lyr_shade2_31.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_shade2_32.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_shade_TRAT_1_33.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_shade_TRAT_1_34.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_RoadROAD_4_35.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'unique_id': 'Range', 'road_id': 'Range', 'section_id': 'Range', 'road_cl_id': 'TextEdit', 'highway_co': 'TextEdit', 'highway_na': 'TextEdit', 'road_code': 'TextEdit', 'road_name': 'TextEdit', 'km_start_r': 'TextEdit', 'km_end_roa': 'TextEdit', 'length_roa': 'TextEdit', 'fnode': 'Range', 'tnode': 'Range', 'km_start_s': 'TextEdit', 'km_end_sec': 'TextEdit', 'length': 'TextEdit', 'road_class': 'Range', 'road_clas0': 'TextEdit', 'hierarchy_': 'Range', 'hierarchy0': 'TextEdit', 'no_lane': 'Range', 'road_sf_ty': 'Range', 'road_sf_t0': 'TextEdit', 'road_direc': 'Range', 'road_dire0': 'TextEdit', 'depot_code': 'TextEdit', 'depot_name': 'TextEdit', 'district_c': 'TextEdit', 'district_n': 'TextEdit', 'division_c': 'TextEdit', 'division_n': 'TextEdit', 'owner_org': 'Range', 'owner_org_': 'TextEdit', 'proclaim_d': 'DateTime', 'updated_da': 'DateTime', 'validfrom': 'DateTime', 'validto': 'DateTime', });
lyr_ROADTOTAL_36.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'unique_id': 'Range', 'road_id': 'Range', 'section_id': 'Range', 'road_cl_id': 'TextEdit', 'highway_co': 'TextEdit', 'highway_na': 'TextEdit', 'road_code': 'TextEdit', 'road_name': 'TextEdit', 'km_start_r': 'TextEdit', 'km_end_roa': 'TextEdit', 'length_roa': 'TextEdit', 'fnode': 'Range', 'tnode': 'Range', 'km_start_s': 'TextEdit', 'km_end_sec': 'TextEdit', 'length': 'TextEdit', 'road_class': 'Range', 'road_clas0': 'TextEdit', 'hierarchy_': 'Range', 'hierarchy0': 'TextEdit', 'no_lane': 'Range', 'road_sf_ty': 'Range', 'road_sf_t0': 'TextEdit', 'road_direc': 'Range', 'road_dire0': 'TextEdit', 'depot_code': 'TextEdit', 'depot_name': 'TextEdit', 'district_c': 'TextEdit', 'district_n': 'TextEdit', 'division_c': 'TextEdit', 'division_n': 'TextEdit', 'owner_org': 'Range', 'owner_org_': 'TextEdit', 'proclaim_d': 'DateTime', 'updated_da': 'DateTime', 'validfrom': 'DateTime', 'validto': 'DateTime', });
lyr_boundary_chonburi_3.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_boundary_trat_4.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_boundary_rayong_5.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_boundary_chanthaburi_6.set('fieldLabels', {'fid': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_boundary_Map_7.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr__8.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_SALTppm_9.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - visible with data', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'inline label - always visible', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'hidden field', });
lyr_C_0_chloride_by_weight_cement_Tidal_Zone_15.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'inline label - always visible', 'Smax_water_Cement': 'hidden field', });
lyr_C_0_ppm_TidalZone_16.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - visible with data', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'inline label - always visible', 'TmaxC': 'inline label - always visible', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'hidden field', });
lyr_C_0_chloride_by_weight_cement_Splash_Zone_22.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'inline label - visible with data', });
lyr_C_0_ppm_SplashZone_23.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'inline label - visible with data', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'inline label - always visible', 'SmaxC': 'inline label - always visible', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'hidden field', });
lyr_C_0_chloride_by_weight_cement_Air_Zone_29.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'hidden field', 'AmaxC': 'hidden field', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'inline label - always visible', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'hidden field', });
lyr_C_0_ppm_Air_Zone_30.set('fieldLabels', {'fid': 'hidden field', 'รหัสสะพาน': 'hidden field', 'ลำดับ': 'inline label - always visible', 'ชื่อสะพาน': 'inline label - always visible', 'กลุ่มสำรวจ': 'hidden field', 'แขวงทางหลวง': 'inline label - always visible', 'หมายเลข': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ปีที่สร้างเสร็จ (BMMS)': 'hidden field', 'ช่วงปีที่ก่อสร้าง(ราวสะพาน)': 'hidden field', 'ปีที่สร้างเสร็จ (ราวสะพาน)': 'hidden field', 'อายุตาม BMMS (ปี)': 'hidden field', 'อายุตามราวสะพาน(ปี)': 'hidden field', 'อายุสะพานคาดการ์ณการ์ณ(ปี)': 'hidden field', 'ระยะห่างจากทะเล(km)': 'hidden field', 'ประเภทของสะพาน': 'hidden field', 'วันที่เจาะตัวอย่าง': 'hidden field', 'Rebound Hammer Test (เสา)': 'hidden field', 'Rebound Hammer Test (พื้น/คาน)': 'hidden field', 'ความเค็ม': 'hidden field', 'CR': 'hidden field', 'ประเภทการเจาะAir Zone': 'hidden field', 'A1max (ppm)': 'hidden field', 'A2max (ppm)': 'hidden field', 'A3max (ppm)': 'hidden field', 'Amaxavg': 'inline label - always visible', 'AmaxC': 'inline label - visible with data', 'S1max (ppm)': 'hidden field', 'S2max (ppm)': 'hidden field', 'S3max (ppm)': 'hidden field', 'Smaxavg': 'hidden field', 'SmaxC': 'hidden field', 'T1max (ppm)': 'hidden field', 'T2max (ppm)': 'hidden field', 'T3max (ppm)': 'hidden field', 'Tmaxavg': 'hidden field', 'TmaxC': 'hidden field', 'Log_Cal_Amax': 'hidden field', 'Log_Cal_Smax': 'hidden field', 'Log_Cal_Tmax': 'hidden field', 'Amax_water_Cement': 'hidden field', 'Tmax_water_Cement': 'hidden field', 'Smax_water_Cement': 'hidden field', });
lyr_shade2_31.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_shade2_32.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_shade_TRAT_1_33.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_shade_TRAT_1_34.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_RoadROAD_4_35.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'unique_id': 'no label', 'road_id': 'no label', 'section_id': 'no label', 'road_cl_id': 'no label', 'highway_co': 'inline label - always visible', 'highway_na': 'no label', 'road_code': 'no label', 'road_name': 'inline label - always visible', 'km_start_r': 'no label', 'km_end_roa': 'no label', 'length_roa': 'no label', 'fnode': 'no label', 'tnode': 'no label', 'km_start_s': 'inline label - always visible', 'km_end_sec': 'inline label - always visible', 'length': 'no label', 'road_class': 'no label', 'road_clas0': 'no label', 'hierarchy_': 'no label', 'hierarchy0': 'no label', 'no_lane': 'no label', 'road_sf_ty': 'no label', 'road_sf_t0': 'no label', 'road_direc': 'no label', 'road_dire0': 'no label', 'depot_code': 'no label', 'depot_name': 'no label', 'district_c': 'no label', 'district_n': 'no label', 'division_c': 'no label', 'division_n': 'no label', 'owner_org': 'no label', 'owner_org_': 'no label', 'proclaim_d': 'no label', 'updated_da': 'no label', 'validfrom': 'no label', 'validto': 'no label', });
lyr_ROADTOTAL_36.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'unique_id': 'no label', 'road_id': 'no label', 'section_id': 'no label', 'road_cl_id': 'no label', 'highway_co': 'no label', 'highway_na': 'no label', 'road_code': 'no label', 'road_name': 'no label', 'km_start_r': 'no label', 'km_end_roa': 'no label', 'length_roa': 'no label', 'fnode': 'no label', 'tnode': 'no label', 'km_start_s': 'no label', 'km_end_sec': 'no label', 'length': 'no label', 'road_class': 'no label', 'road_clas0': 'no label', 'hierarchy_': 'no label', 'hierarchy0': 'no label', 'no_lane': 'no label', 'road_sf_ty': 'no label', 'road_sf_t0': 'no label', 'road_direc': 'no label', 'road_dire0': 'no label', 'depot_code': 'no label', 'depot_name': 'no label', 'district_c': 'no label', 'district_n': 'no label', 'division_c': 'no label', 'division_n': 'no label', 'owner_org': 'no label', 'owner_org_': 'no label', 'proclaim_d': 'no label', 'updated_da': 'no label', 'validfrom': 'no label', 'validto': 'no label', });
lyr_ROADTOTAL_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});