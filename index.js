function opencity(evt,cityName){
    var i,tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }


    tablinks=document.getElementsByClassName("tablinks");
    for(i=0; i< tablinks.length;i++){
        tablinks[i].className=tablinks[i].className.replace("active","");
    }
1  


    document.getElementById(cityName).style.display="block";
    evt.currentTarget.className +="active";
}


function page(evt,status){
    var i,white,courselinks;
    
    white=document.getElementsByClassName("white");
    for(i=0; i< white.length;i++){
        white[i].style.display="none";
    }


    courselinks=document.getElementsByClassName("courselinks");
    for(i=0; i< courselinks.length;i++){
        courselinks[i].className=courselinks[i].className.replace("active","");
    }


    document.getElementById(status).style.display="block";
    evt.currentTarget.className +="active";
}