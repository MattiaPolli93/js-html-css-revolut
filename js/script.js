$(function() {
    var rightNav = $(".right-nav li"); 

    // Cursor hovering
    rightNav.mouseenter(function() {
        $(this).children(".menu").addClass("active");
    });

    /* // Cursor leaving (optional)
    rightNav.mouseout(function(){
        $(this).children(".menu").removeClass("active");
    }); */

    // Click event
    $(document).click(function() {
        $('.menu').removeClass('active');
    });
});
