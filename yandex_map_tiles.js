import * as ol from "openlayers";
const point1 = ol.proj.fromLonLat([88.210384, 69.343985]);
// Saint Sulpice, Switzerland
const point2 = ol.proj.fromLonLat([88.210384, 69.343985]);

const view = new ol.View({
  center: ol.extent.getCenter(ol.extent.boundingExtent([point1, point2])),
  zoom: 12
});
// Renens, Switzerland

new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url:
          "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.05.07-0-b210423152000&x={x}&y={y}&z={z}&scale=2&lang=ru_RU",
        projection: "EPSG:3395",
        tileGrid: ol.tilegrid.createXYZ({
          extent: [
            -20037508.342789244,
            -19900008.342789244,
            20037499.342789244,
            20077549.342789244
          ]
        })
      })
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        url:
          "https://raw.githubusercontent.com/alphavector/test/main/road_graph.geojson",
        format: new ol.format.GeoJSON(),
        projection: "EPSG:3395"
      })
    })
  ],
  target: "map",
  view
});
