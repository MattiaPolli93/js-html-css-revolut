$(function() {
    $(".right-nav li").mouseenter(function() {
        $(this).children(".menu").addClass("active");
    });

    $(document).click(function(event){
        $('.menu').removeClass('active');
    });
});
