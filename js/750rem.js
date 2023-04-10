function init_rem(){
    var irate=625;
    var iw=750;
    var win = window;
    var w= document.documentElement.clientWidth;
    var doc = document;
    var irate= 625/(iw/w);
    irate = Math.min(irate,625);
    doc.documentElement.style.fontSize = irate + "%";
}
init_rem();
