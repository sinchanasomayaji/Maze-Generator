$( document ).ready(function() {
    var cnt,p;
    for(cnt=0; cnt<1280; cnt++) {
        for(p=0;p<720;p++){
            if(p==300){
                $("body").html($("body").html()+ ('<br />'));
            }
            else{
                $("body").html($("body").html()+ (Boolean(parseInt(Math.random() * 10) % 2) ? "\\" : "/"));
            }
        }
        
    }
});