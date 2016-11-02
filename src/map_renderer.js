import './css/leaflet.css!';
import WorldMap from './worldmap';

export default function link(scope, elem, attrs, ctrl) {
  const mapContainer = elem.find('.mapcontainer');

  ctrl.events.on('render', () => {
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    if (!ctrl.data) return;

    if (!ctrl.map) {
      ctrl.map = new WorldMap(ctrl, mapContainer[0]);
    }

    ctrl.map.resize();

    if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

<<<<<<< HEAD
    //if (!ctrl.map.marker) ctrl.map.addMarker();
=======
    //ctrl.map.updateMarker();

>>>>>>> 13ebca92d827cb58c61299bfcf5a12f8f39710be
    ctrl.map.drawCircles();
  }
}
