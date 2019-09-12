$( document ).ready(function() {
    var numX = 20, numY = 20;
    var x = screen.width / numX ;
    var y = screen.height / numY;
    var cnt1 = 0, cnt2 = 0;
    $("canvas").attr("width", ($(document).width() * 0.9 ).toString());
    $("canvas").attr("height", ($(document).height() * 0.9).toString());
    $("body").css({"text-align": "center", "position": "absolute", "top": "4%", "left": "4%"});
    var ctx = $("canvas").get(0).getContext('2d');
    for (var i = 0; i < numY; i++) {
         for (var j = 0; j < numX; j++) {   
            if (Math.random() < 0.5) {
                ctx.beginPath();
                ctx.moveTo(x * (i + 1), y * j);
                ctx.lineTo(x * i, y * (j + 1));
                ctx.stroke();
                cnt1++;
            }
            else {
                ctx.beginPath();
                ctx.moveTo(x * i, y * (j));
                ctx.lineTo(x * (i + 1), y * (j + 1));
                ctx.stroke();
                cnt2++;
            }
        }
    }
    console.log(cnt1);    
    console.log(cnt2);    
    
});