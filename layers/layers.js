var wms_layers = [];


        var lyr_EsriShadedRelief_0 = new ol.layer.Tile({
            'title': 'Esri Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AETR4APastediverseGruppo2_1 = new ol.format.GeoJSON();
var features_AETR4APastediverseGruppo2_1 = format_AETR4APastediverseGruppo2_1.readFeatures(json_AETR4APastediverseGruppo2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR4APastediverseGruppo2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR4APastediverseGruppo2_1.addFeatures(features_AETR4APastediverseGruppo2_1);
var lyr_AETR4APastediverseGruppo2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR4APastediverseGruppo2_1, 
                style: style_AETR4APastediverseGruppo2_1,
                interactive: true,
                title: '<img src="styles/legend/AETR4APastediverseGruppo2_1.png" /> A-ETR 4A (Paste diverse Gruppo 2)'
            });
var format_AltroND_2 = new ol.format.GeoJSON();
var features_AltroND_2 = format_AltroND_2.readFeatures(json_AltroND_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltroND_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltroND_2.addFeatures(features_AltroND_2);
var lyr_AltroND_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AltroND_2, 
                style: style_AltroND_2,
                interactive: true,
                title: '<img src="styles/legend/AltroND_2.png" /> Altro/ND'
            });
var format_AnforepisanePasteGruppo4_3 = new ol.format.GeoJSON();
var features_AnforepisanePasteGruppo4_3 = format_AnforepisanePasteGruppo4_3.readFeatures(json_AnforepisanePasteGruppo4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnforepisanePasteGruppo4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnforepisanePasteGruppo4_3.addFeatures(features_AnforepisanePasteGruppo4_3);
var lyr_AnforepisanePasteGruppo4_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnforepisanePasteGruppo4_3, 
                style: style_AnforepisanePasteGruppo4_3,
                interactive: true,
                title: '<img src="styles/legend/AnforepisanePasteGruppo4_3.png" /> Anfore pisane (Paste Gruppo 4)'
            });
var format_AETR5_4 = new ol.format.GeoJSON();
var features_AETR5_4 = format_AETR5_4.readFeatures(json_AETR5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR5_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR5_4.addFeatures(features_AETR5_4);
var lyr_AETR5_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR5_4, 
                style: style_AETR5_4,
                interactive: true,
                title: '<img src="styles/legend/AETR5_4.png" /> A-ETR 5'
            });
var format_AETR4A_5 = new ol.format.GeoJSON();
var features_AETR4A_5 = format_AETR4A_5.readFeatures(json_AETR4A_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR4A_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR4A_5.addFeatures(features_AETR4A_5);
var lyr_AETR4A_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR4A_5, 
                style: style_AETR4A_5,
                interactive: true,
                title: '<img src="styles/legend/AETR4A_5.png" /> A-ETR 4A'
            });
var format_AETR4PastediverseGruppo2_6 = new ol.format.GeoJSON();
var features_AETR4PastediverseGruppo2_6 = format_AETR4PastediverseGruppo2_6.readFeatures(json_AETR4PastediverseGruppo2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR4PastediverseGruppo2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR4PastediverseGruppo2_6.addFeatures(features_AETR4PastediverseGruppo2_6);
var lyr_AETR4PastediverseGruppo2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR4PastediverseGruppo2_6, 
                style: style_AETR4PastediverseGruppo2_6,
                interactive: true,
                title: '<img src="styles/legend/AETR4PastediverseGruppo2_6.png" /> A-ETR 4 (Paste diverse Gruppo 2)'
            });
var format_AETR4_7 = new ol.format.GeoJSON();
var features_AETR4_7 = format_AETR4_7.readFeatures(json_AETR4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR4_7.addFeatures(features_AETR4_7);
var lyr_AETR4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR4_7, 
                style: style_AETR4_7,
                interactive: true,
                title: '<img src="styles/legend/AETR4_7.png" /> A-ETR 4'
            });
var format_AETR3C_8 = new ol.format.GeoJSON();
var features_AETR3C_8 = format_AETR3C_8.readFeatures(json_AETR3C_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR3C_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR3C_8.addFeatures(features_AETR3C_8);
var lyr_AETR3C_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR3C_8, 
                style: style_AETR3C_8,
                interactive: true,
                title: '<img src="styles/legend/AETR3C_8.png" /> A-ETR 3C'
            });
var format_AETR3ABPasteGruppoND_9 = new ol.format.GeoJSON();
var features_AETR3ABPasteGruppoND_9 = format_AETR3ABPasteGruppoND_9.readFeatures(json_AETR3ABPasteGruppoND_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR3ABPasteGruppoND_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR3ABPasteGruppoND_9.addFeatures(features_AETR3ABPasteGruppoND_9);
var lyr_AETR3ABPasteGruppoND_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR3ABPasteGruppoND_9, 
                style: style_AETR3ABPasteGruppoND_9,
                interactive: true,
                title: '<img src="styles/legend/AETR3ABPasteGruppoND_9.png" /> A-ETR 3AB (Paste Gruppo ND)'
            });
var format_AETR3ABPasteGruppo3_10 = new ol.format.GeoJSON();
var features_AETR3ABPasteGruppo3_10 = format_AETR3ABPasteGruppo3_10.readFeatures(json_AETR3ABPasteGruppo3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR3ABPasteGruppo3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR3ABPasteGruppo3_10.addFeatures(features_AETR3ABPasteGruppo3_10);
var lyr_AETR3ABPasteGruppo3_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR3ABPasteGruppo3_10, 
                style: style_AETR3ABPasteGruppo3_10,
                interactive: true,
                title: '<img src="styles/legend/AETR3ABPasteGruppo3_10.png" /> A-ETR 3AB (Paste Gruppo 3)'
            });
var format_AETR3ABPasteGruppo2_11 = new ol.format.GeoJSON();
var features_AETR3ABPasteGruppo2_11 = format_AETR3ABPasteGruppo2_11.readFeatures(json_AETR3ABPasteGruppo2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR3ABPasteGruppo2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR3ABPasteGruppo2_11.addFeatures(features_AETR3ABPasteGruppo2_11);
var lyr_AETR3ABPasteGruppo2_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR3ABPasteGruppo2_11, 
                style: style_AETR3ABPasteGruppo2_11,
                interactive: true,
                title: '<img src="styles/legend/AETR3ABPasteGruppo2_11.png" /> A-ETR 3AB (Paste Gruppo 2)'
            });
var format_AETR12_12 = new ol.format.GeoJSON();
var features_AETR12_12 = format_AETR12_12.readFeatures(json_AETR12_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AETR12_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AETR12_12.addFeatures(features_AETR12_12);
var lyr_AETR12_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AETR12_12, 
                style: style_AETR12_12,
                interactive: true,
                title: '<img src="styles/legend/AETR12_12.png" /> A-ETR 1/2'
            });
var format_SITI_13 = new ol.format.GeoJSON();
var features_SITI_13 = format_SITI_13.readFeatures(json_SITI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITI_13.addFeatures(features_SITI_13);
var lyr_SITI_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SITI_13, 
                style: style_SITI_13,
                interactive: true,
                title: '<img src="styles/legend/SITI_13.png" /> SITI'
            });

lyr_EsriShadedRelief_0.setVisible(true);lyr_AETR4APastediverseGruppo2_1.setVisible(false);lyr_AltroND_2.setVisible(false);lyr_AnforepisanePasteGruppo4_3.setVisible(false);lyr_AETR5_4.setVisible(false);lyr_AETR4A_5.setVisible(false);lyr_AETR4PastediverseGruppo2_6.setVisible(false);lyr_AETR4_7.setVisible(false);lyr_AETR3C_8.setVisible(false);lyr_AETR3ABPasteGruppoND_9.setVisible(false);lyr_AETR3ABPasteGruppo3_10.setVisible(false);lyr_AETR3ABPasteGruppo2_11.setVisible(false);lyr_AETR12_12.setVisible(false);lyr_SITI_13.setVisible(true);
var layersList = [lyr_EsriShadedRelief_0,lyr_AETR4APastediverseGruppo2_1,lyr_AltroND_2,lyr_AnforepisanePasteGruppo4_3,lyr_AETR5_4,lyr_AETR4A_5,lyr_AETR4PastediverseGruppo2_6,lyr_AETR4_7,lyr_AETR3C_8,lyr_AETR3ABPasteGruppoND_9,lyr_AETR3ABPasteGruppo3_10,lyr_AETR3ABPasteGruppo2_11,lyr_AETR12_12,lyr_SITI_13];
lyr_AETR4APastediverseGruppo2_1.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AltroND_2.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AnforepisanePasteGruppo4_3.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR5_4.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR4A_5.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR4PastediverseGruppo2_6.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR4_7.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR3C_8.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR3ABPasteGruppoND_9.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR3ABPasteGruppo3_10.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR3ABPasteGruppo2_11.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR12_12.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_SITI_13.set('fieldAliases', {'COOR. Y': 'COOR. Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'ANFORE (tipi)': 'Anfore nello stesso contesto', 'A-ETR 1/2': 'A-ETR 1/2', 'A-ETR 3AB/Gruppo 2': 'A-ETR 3AB/Gruppo 2', 'A-ETR 3AB/Gruppo 3': 'A-ETR 3AB/Gruppo 3', 'A-ETR 3AB/nd': 'A-ETR 3AB/nd', 'A-ETR 3C': 'A-ETR 3C', 'A-ETR 4': 'A-ETR 4', 'A-ETR 4 vulcente': 'A-ETR 4 vulcente', 'A-ETR 4A': 'A-ETR 4A', 'A-ETR 4A impasto vulcente': 'A-ETR 4A impasto vulcente', 'A-ETR 5': 'A-ETR 5', 'Pisa': 'Pisa', 'INDET.': 'INDET.', });
lyr_AETR4APastediverseGruppo2_1.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AltroND_2.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AnforepisanePasteGruppo4_3.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR5_4.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR4A_5.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR4PastediverseGruppo2_6.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR4_7.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR3C_8.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR3ABPasteGruppoND_9.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR3ABPasteGruppo3_10.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR3ABPasteGruppo2_11.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR12_12.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_SITI_13.set('fieldImages', {'COOR. Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'ANFORE (tipi)': 'TextEdit', 'A-ETR 1/2': 'Hidden', 'A-ETR 3AB/Gruppo 2': 'Hidden', 'A-ETR 3AB/Gruppo 3': 'Hidden', 'A-ETR 3AB/nd': 'Hidden', 'A-ETR 3C': 'Hidden', 'A-ETR 4': 'Hidden', 'A-ETR 4 vulcente': 'Hidden', 'A-ETR 4A': 'Hidden', 'A-ETR 4A impasto vulcente': 'Hidden', 'A-ETR 5': 'Hidden', 'Pisa': 'Hidden', 'INDET.': 'Hidden', });
lyr_AETR4APastediverseGruppo2_1.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AltroND_2.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AnforepisanePasteGruppo4_3.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR5_4.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR4A_5.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR4PastediverseGruppo2_6.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR4_7.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR3C_8.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR3ABPasteGruppoND_9.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR3ABPasteGruppo3_10.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR3ABPasteGruppo2_11.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_AETR12_12.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_SITI_13.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'ANFORE (tipi)': 'inline label', });
lyr_SITI_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});