var numX = 15, numY = 15;
$( document ).ready(function() {
    /*$(".reset").click(function(){
        numX=$("#myRange1").val();
        numY=$("#myRange2").val();
        $("#maze").empty();
        draw(numX,numY);
    })*/
    function draw(numX,numY) {
        for (var i = 0; i < numY; i++) {
            for (var j = 0; j < numX; j++) {
                if(i==0 && j==0) {
                    $("#maze").html($("#maze").html() + "&nbsp &nbsp ");
                }
                else if(i==numY-1 && j==numX-1) {
                    $("#maze").html($("#maze").html() + " ");
                }
                else{
                    var printChar = "";
                    switch(parseInt(Math.random() * 10)) {
                        case 0: 
                            $(Math.random() < 0.5 ? printChar  = "\u2501" : printChar  = "\u2503");
                            break;
                        case 1:  
                            printChar  =  "\u250f";
                            break;
                        case 2:  
                            printChar  =  "\u2517" ;
                            break;
                        case 3:  
                            printChar  =  "\u2523" ;
                            break;
                        case 4:  
                            printChar  =  "\u2533" ;
                            break;
                        case 5:  
                            printChar  =  "\u254b";
                            break;
                        case 6:  
                            printChar  =  "\u253b";
                            break;
                        case 7:  
                            printChar  =  "\u252b";
                            break;
                        case 8:  
                            printChar  =  "\u251b";
                            break;
                        case 9:  
                            printChar  =  "\u2513";
                            break;
                    }
                    $("#maze").html($("#maze").html() + printChar);
                }
            }    
            $("#maze").html($("#maze").html() + "<br/>");
        }
    }
    draw(numX,numY);
});