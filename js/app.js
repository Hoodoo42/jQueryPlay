// to make sure DOM elements are ready/fully loaded,wrap the code in the $(window).on("load", function()){}
$(window).on("load", function () {
  console.log("window loaded");

  $("#msg").html("Helloooooooo WORLD!");

  $("#colour").css("background-color", "pink");
  $("#colour").click(() => {
    $("#colour").animate({ left: "100px" }, () => {
      $("#colour").animate({ left: "1px" });
    });
  });

  $("#blue").css("background-color", "blue");

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
      case 37: // left arrow keycode is 37
        // offset() will set the coordinates of the css "left" property of green to move -10px when left arrow key is down
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

  //   goal is when green interacts with blue, lightbox will open.
  // step one I think would be to determin the location of each div. and then set logic when they overlap.

  // I found .getBoundingClientRect which seems to be in the right direction

  let green = document.getElementById("green");
  // value is the value that is retrieved from the getBounding function
  let value = green.getBoundingClientRect();
  //let place = $("#green").getBoundingClientRect(); find out why doesnt this work.
  for (const key in value) {
    if (typeof value[key] !== undefined) {
      console.log(`${key} : ${value[key]}`);
    }
  }

  // console.log() prints this 

//  x : 0
//  y : 72.5
//  width : 25
//  height : 25
//  top : 72.5
//  right : 25
//  bottom : 97.5
//  left : 0

// which is promising. Next to use this data in comparing it to blues output. And as green is moving, I think I need to 
// figure out how to update this ^ data with updated x,y,t,r,b,l data as it moves around the browser
});
