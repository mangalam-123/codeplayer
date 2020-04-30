function updateOutput() {
    
    $("iframe").contents().find("html").html("<html><head><style type ='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    }

    $('.togglebutton').hover(function () {
       $(this).addClass("highlightedbutton"); 
    }, function () {
        $(this).removeClass("highlightedbutton");
    });
    $('.togglebutton').click(function() {
        $(this).toggleClass("active");
        $(this).removeClass("highlightedbutton");
        var panelId=$(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden");
        var noOfActiveClasses=4 - $('.hidden').length;
       
        $('.Panel').width(($( window ).width()/noOfActiveClasses) - 13);
    });
    $('.Panel').height($( window ).height()-$('#header').height() - 13);
    $('.Panel').width(($( window ).width()/2) - 13);
    updateOutput();
    $("textarea").on('change keyup paste', function() {

        updateOutput();
    });