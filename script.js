$(document).ready(function () {
  $("#currentday").text(moment().format('MMMM Do YYYY, h:mm a'))
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
