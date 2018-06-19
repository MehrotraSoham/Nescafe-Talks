
function openCity(evt, evtName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(evtName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload=function(){
   
var modal = document.getElementById('myModal');
var button = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];
button.onclick=function(){
    modal.style.display="block";
  
}
window.onclick=function(event){
      if(event.target==modal)
      modal.style.display='none';
}
span.onclick=function(){
    modal.style.display='none';
}

}

    
