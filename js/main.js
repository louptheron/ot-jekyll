$(document).ready(function() {
  // new Typed(".enterprise-name", {
  //   strings: ["Olivier Théron ^1000 - Traiteur & Evènements"],
  //   typeSpeed: 100,
  //   showCursor: true
  // });

  $("#portfolio-contant-active").mixItUp();

  $("#testimonial-slider").owlCarousel({
    paginationSpeed: 200,
    singleItem: true,
    autoPlay: 3000
  });

  $("#clients-logo").owlCarousel({
    autoPlay: 3000,
    items: 5,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 5]
  });

  $("#works-logo").owlCarousel({
    autoPlay: 3000,
    items: 5,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 5]
  });

  $("#scroll-decouvrir").click(function() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#decouvrir").offset().top
      },
      2000
    );
  });

  // google map
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  // Counter

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  // Instagram slider
  if ($("#instafeed").length) {
    var feed = new Instafeed({
      get: "user",
      userId: "4772115359",
      clientId: "ff26e99e618d40d29dee0fe1b9966062",
      accessToken: "4772115359.1677ed0.403989aa2e764a9e90b7bc0900f2bf88",
      template:
        '<div><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
    });
    feed.run();

    $(window).load(function() {
      $("#instafeed").owlCarousel({
        autoPlay: 3000,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5]
      });
    });
  }
});

// Sticky Header

//Init sticky header
$(window).load(function() {
  $(".showOnScroll").hide();
  $(".hideOnScroll").show();
});
let isSticky = false;

function onScroll() {
  if (document.getElementById("logo")) {
    if (
      document.getElementById("logo").getBoundingClientRect().bottom <= 0 &&
      !isSticky
    ) {
      isSticky = true;
      $(".hideOnScroll").hide();
      $(".showOnScroll").show();
      $("#sticky").addClass("sticky");
      $(".navbar-default").addClass("add-margin");
    } else if (
      document.getElementById("logo").getBoundingClientRect().bottom >= 0 &&
      isSticky
    ) {
      isSticky = false;
      $(".hideOnScroll").show();
      $(".showOnScroll").hide();
      $("#sticky").removeClass("sticky");
      $(".navbar-default").removeClass("add-margin");
    }
  }
}

// Wrap every letter in a span
$(".enterprise-name").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

window.addEventListener("scroll", onScroll, false);
