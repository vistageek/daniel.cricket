function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var amPM;
   
    m = check(m);
    s = check(s);
   
    amPM = (h >= 12)? 'pm' : 'am';
   
    if(h > 12) {
        h -= 12;
    } else if (h == 0) {
        h = 12; 
    }
   
    document.getElementById('t').innerHTML = h + ":" + m + ":" + s + " " + amPM;
    var t = setTimeout(time, 500);
}

function check(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
