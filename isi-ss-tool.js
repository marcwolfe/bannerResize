
var isiFlag = window.location.href.indexOf("?isi") > -1;

function isiScreenShotHandler(isi) {

    if (isiFlag) {
        
        var _isi = document.getElementById("isi-col");

        TweenLite.to(document.getElementsByTagName('div'), 0, {opacity:0});
        TweenLite.to(_isi.getElementsByTagName('div'), .5, {opacity:1});
        TweenLite.to(_isi, .5, {height:"auto"});

        var isiStyles = {
            x: 0,
            y: 0,
            autoAlpha: 1,
            height: "auto",
            overflow:"visible"
        }
        TweenLite.set(_isi, isiStyles);
        mkr.add(_isi, document.body);
        //_isi.querySelector(".isi-content").style.height = "auto";
        return true;
    }
    else
        return false;
}