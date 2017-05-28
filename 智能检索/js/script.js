$(function(){
    $("#catalogList>li>a").on("click", function(){
        var me = $(this);
        var $arrow = $(".catalog-scroller .arrow");
        var y = me.parent().position().top;
        $arrow.animate({
            top: y + me.innerHeight()/2
        })
    })
})