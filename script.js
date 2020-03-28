$(document).ready(function () {

    $(".resume").on("click", function (event) {
      event.preventDefault();
      window.open(Resume.pdf)
    })
  AOS.init();
  $("#currentday").text(moment().format('MMMM Do YYYY, h:mm a'))
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: new google.maps.LatLng(41.85, -87.71),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});