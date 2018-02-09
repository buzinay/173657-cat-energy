var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var myMap;
var myPlacemark;
ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map-id', {
    center: [59.938631,30.323055],
    zoom: 15,
    controls: ["zoomControl", "fullscreenControl"]
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055],{
    balloonContentBody: '',
  },{
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [55, 53],
      iconImageOffset: [-27, -26]
    });

    myMap.geoObjects.add(myPlacemark);
}
