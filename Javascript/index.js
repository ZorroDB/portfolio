document.getElementById("navbarText").addEventListener("click", function () {
  var offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasDarkNavbar")
  );
  offcanvas.toggle();
});
//text langzaam binnen laten komen

document.addEventListener("DOMContentLoaded", function () {
  var introPara = document.getElementById("introPara");
  if (introPara) {
    setTimeout(function () {
      introPara.classList.remove("hidden");
    }, 3000);
  }
});

//scroll pijl verandering
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
    $(".arrow-down").hide();
    $(".arrow-up").show();
  } else {
    $(".arrow-down").show();
    $(".arrow-up").hide();
  }
});

//Dark mode
var darkModeButton = document.getElementById("darkMode");
var lightModeButton = document.getElementById("lightMode");

darkModeButton.addEventListener("click", function () {
  document.body.classList.add("dark-mode");
  lightModeButton.classList.remove("_hidden");
  darkModeButton.classList.add("_hidden");
});

lightModeButton.addEventListener("click", function () {
  document.body.classList.remove("dark-mode");
  darkModeButton.classList.remove("_hidden");
  lightModeButton.classList.add("_hidden");
});
