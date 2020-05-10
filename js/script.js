function first(i)
{
    $(".details").removeClass("noshow");
    $(".details").addClass("show");
    var varstring='"'+i+'"';
}

function second(i)
{
    $(".details2").removeClass("notshow");
    $(".details2").addClass("show");
    var varstring = '"' + i + '"';
}

function pbar(i)
{
    $(".pbbar").removeClass("notshow");
    switch(i)
    {
        case 1:
            $(".b1").removeClass("notshow");
            $(".b2").addClass("notshow");            
            $(".b3").addClass("notshow");            
            $(".b4").addClass("notshow");            
            $(".b5").addClass("notshow"); 
            break;           

        case 2:
            $(".b1").addClass("notshow");
            $(".b2").removeClass("notshow");
            $(".b3").addClass("notshow");
            $(".b4").addClass("notshow");
            $(".b5").addClass("notshow");
            break;  

        case 3:
            $(".b1").addClass("notshow");
            $(".b2").addClass("notshow");
            $(".b3").removeClass("notshow");
            $(".b4").addClass("notshow");
            $(".b5").addClass("notshow");
            break;  

        case 4:
            $(".b1").addClass("notshow");
            $(".b2").addClass("notshow");
            $(".b3").addClass("notshow");
            $(".b4").removeClass("notshow");
            $(".b5").addClass("notshow");
            break;  

        case 5:
            $(".b1").addClass("notshow");
            $(".b2").addClass("notshow");
            $(".b3").addClass("notshow");
            $(".b4").addClass("notshow");
            $(".b5").removeClass("notshow");
            break;  
    }
}