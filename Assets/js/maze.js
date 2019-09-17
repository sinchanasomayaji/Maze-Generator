$(document).ready(function () {
    $("#v1")[0].value = $("#v0")[0].value.toString();
    $("#h1")[0].value = $("#h0")[0].value.toString();
    $("#reset").click(function () {
        $("#maze").html("");
        event.preventDefault();
        draw($("#h1")[0].value,$("#v1")[0].value);
    });
$("#v0").on("change", function () {
    $("#v1")[0].value = $("#v0")[0].value.toString();
})
$("#h0").on("change", function () {
    $("#h1")[0].value = $("#h0")[0].value.toString();
})

    draw($("#h1")[0].value,$("#v1")[0].value);
    function draw(numX,numY) {

        for (var i = 1; i <= numY; i++) {
            for (var j = 1; j <= numX; j++) {
                if (i == numY - 1 && j == numX - 1) {
                    $("#maze").html($("#maze").html() + " ");
                }
                else {
                    var printChar = "";
                    switch (parseInt(Math.random() * 10)) {
                        case 0:
                            $(Math.random() < 0.5 ? printChar = "\u2501" : printChar = "\u2503");
                            break;
                        case 1:
                            printChar = "\u250f";
                            break;
                        case 2:
                            printChar = "\u2517";
                            break;
                        case 3:
                            printChar = "\u2523";
                            break;
                        case 4:
                            printChar = "\u2533";
                            break;
                        case 5:
                            printChar = "\u254b";
                            break;
                        case 6:
                            printChar = "\u253b";
                            break;
                        case 7:
                            printChar = "\u252b";
                            break;
                        case 8:
                            printChar = "\u251b";
                            break;
                        case 9:
                            printChar = "\u2513";
                            break;
                    }
                    $("#maze").html($("#maze").html() + printChar);
                }
            }
            $("#maze").html($("#maze").html() + "<br/>");
        }
    }
    window.stop();
});

