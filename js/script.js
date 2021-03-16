$(function() {
    var rightNav = $(".right-nav li"); 

    // Cursor hovering
    rightNav.mouseenter(function() {
        $(this).siblings("li").children(".dropdown-menu").removeClass("active");
        $(this).children(".dropdown-menu").addClass("active");
    });

    // Click event
    rightNav.click(function() {
        $(this).children('.dropdown-menu').toggleClass('active');
    });
});
