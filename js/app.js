
// to make sure DOM elements are ready/fully loaded,wrap the code in the $(window).on("load", function()){}
$( window ).on( "load", function() {
    console.log( "window loaded" );

    $("#msg").html("Helloooooooo WORLD!");
    $("p").html("paragraph");
    
    $("#colour").css('background-color', 'pink' )
    $("#colour").click( () => {
        $("#colour").animate({left: '100px'}, () =>{
            $("#colour").animate({left: '1px'})
        });
    })
  
    $("#blue").css("background-color", "blue")
    .slideUp(4000)
    .slideDown(4000);

});