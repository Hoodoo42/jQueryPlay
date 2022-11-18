// to make sure DOM elements are ready/fully loaded,wrap the code in the $(window).on("load", function()){}
$(window).on("load", function () {
  console.log("window loaded");

  $("#msg").html("Helloooooooo WORLD!");
  $("p").html("paragraph");

  $("#colour").css("background-color", "pink");
  $("#colour").click(() => {
    $("#colour").animate({ left: "100px" }, () => {
      $("#colour").animate({ left: "1px" });
    });
  });

  $("#blue").css("background-color", "blue").slideUp(4000).slideDown(4000);

  $("#green").css("background-color", "green");

//   renaming the div
  var $green = $("#green");
//   window listens for the keydown call
  $(document).keydown(function (e) {
    // which is related to the keydown function, in determining which key is being pressed down. 
    // The e is known to be short for event object, and that is being passed along.

    // these case/breaks are matching the which. I will be doing more switch statements to further explore and get a better
    // understanding, but for now its time to shut down. 
    switch (e.which) {
      case 37:
        $green.css("left", $green.offset().left - 10);
        break;
      case 38:
        $green.css("top", $green.offset().top - 10);
        break;
      case 39:
        $green.css("left", $green.offset().left + 10);
        break;
      case 40:
        $green.css("top", $green.offset().top + 10);
        break;
    }
  });
});
