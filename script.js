$(document).ready(function () {

    $(".resume").on("click", function (event) {
      event.preventDefault();
      window.open(Resume.pdf)
    })
  AOS.init();
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: new google.maps.LatLng(41.87, -87.62),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});