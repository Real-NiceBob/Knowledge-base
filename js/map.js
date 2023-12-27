ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872208414779784, 2.354213067864817],
    zoom: 16
  });
  var myPlacemark = new ymaps.Placemark([48.872208414779784, 2.354213067864817], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/Subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });


  myMap.geoObjects.add(myPlacemark);
}

