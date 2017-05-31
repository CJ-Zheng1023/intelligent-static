$(function(){
    setScroll(["#mark1", "#mark2", "#mark3", "#mark4", "#mark5"]);
    $("#catalogList>li>a").on("click", function(){
        var me = $(this);
        var $arrow = $(".catalog-scroller .arrow");
        var y = me.parent().position().top;
        $arrow.animate({
            top: y + me.innerHeight()/2
        })
    })
    $(window).on("resize", function(){
        $(".box-content-desc").scrollTop(0);
        setTop(["#mark1", "#mark2", "#mark3", "#mark4", "#mark5"]);
    })
})
var topMapId = {};
var tops = [];
function setTop(ids){
    topMapId = {},tops = [];
    for(var i = 0, len = ids.length;i<len;i++){
        var id = ids[i];
        var top = $(id).position().top;
        topMapId[top] = id;
        tops.push(top);
    }
}

function setScroll(ids){
    setTop(ids);
    $(".box-content-desc").on("scrollstop", function(){
        var me = $(this);
        var scrollTop = me.scrollTop();
        for(var i= 0,len=tops.length;i<len;i++){
            if(i == len-1){
                if(scrollTop>=tops[i]){
                    var id = topMapId[tops[i]];
                    transformArrow(id);
                    break;
                }
            }else if(i == 0){
                if(scrollTop<tops[i+1]){
                    var id = topMapId[tops[i]];
                    transformArrow(id);
                    break;
                }
            }else{
                if(scrollTop>=tops[i]&&scrollTop<tops[i+1]){
                    var id = topMapId[tops[i]];
                    transformArrow(id);
                    break;
                }
            }
        }
    })
}
function transformArrow(menuId){
    var $arrow = $(".catalog-scroller .arrow");
    var $menu = $("a[href='"+menuId+"']");
    $arrow.animate({
        top: $menu.parent().position().top + $menu.innerHeight()/2
    })
}

