var xhttp = createXHTTPObject();
function loadContent() {
    
    if(xhttp.readyState==0||xhttp.readyState==4) {
        food = encodeURIComponent(document.getElementById("food").value)
        food = food.toString();
        xhttp.open('GET','http://localhost:2000/first.txt?food='+food,true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            //alert(this.status); 
            if(this.readyState==4 && this.status==200) {
                document.getElementById('content').innerHTML = 
                    xhttp.responseText;
            }
        }
    }
    else {
        setTimeout('loadContent()',1000);
    }
}
function createXHTTPObject() {
    if(window.ActiveXObject) {
        try {
            xhttp = new ActiveXObject();
        }
        catch(e) {
            xhttp = false;
        }
    }
    else {
        try {
            xhttp = new XMLHttpRequest();
        }
        catch(e){
            xhttp = false;
        }
    }
    if(!xhttp) {
        alert("can't create xhttp object");
    }
    else {
        return xhttp;
    }
}