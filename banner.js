function initHandler() { //Subsequent loading...

    var _width = 300;   //collapsed banner width
    var _height = 250;  //collapsed banner height
    var isiY = 398;     //change to isiX for horizontal banners

    var slideIn = .8;
    var fadeIn = .5;
    var fadeOut = .3;
    var isiScrollTime = 250;
    
    //Enabler.setExpandingPixelOffsets(0, 0, expW, expH);

    var m = mkr.makeDC(_width, _height, {css:{autoAlpha:1, pointerEvents:"auto"}, attr:{id:"main"}, preload:true});
    //console.log(m);

    m.create("img", {attr:{src:'bg-0.png'}});

    m.create("img", {
        css: { x:-180, y:-140, scale:1, transformOrigin:'0 0'},
        attr: { id:"bg", src:"bg.jpg"} });

    m.create("img", {
        css: { x:0, y:0},
        attr: { id:"logo", src:"logo.png"} });

    m.create("div", {
        css: { x:0, y:0},
        attr: { id:"txt12"} });

    m.create("img", {
        css: { x:0, y:0, autoAlpha:0, transformOrigin:'0 0'},
        attr: { id:"txt1", src:"txt-1.png"} },
        "#txt12");

    m.create("img", {
        css: { x:0, y:0, autoAlpha:0},
        attr: { id:"txt2", src:"txt-2.png"} },
        "#txt12");
    
    m.create("img", {
        css: { x:0, y:0, autoAlpha:0},
        attr: { id:"txt3", src:"txt-3.png"} });
    
    m.create("img", {
        css: { x:0, y:0, autoAlpha:0},
        attr: { id:"requestARep", src:"request-a-rep.png"} });

    m.create("div", {
        css: { x:0, y:_height, width:299, height:201, autoAlpha:0},
        attr: { id:"isi-col", class:"isi-content"},
        text: mkr.query("#isi-content").innerHTML });

    m.create("div", {
        css: { x:0, y:0, width:_width, height:_height, autoAlpha:1, cursor:"pointer", pointerEvents:"auto"},
        attr: { id:"cta"} });

    var isi = document.getElementsByClassName('isi-content');
	
    m.load(loadComplete);

    function loadComplete() {
        activateClickTags();
        if (isiScreenShotHandler(isi))
            return;
        
        initAnims();
    }

    function scrollISI() {
        TweenMax.to(isi, isiScrollTime, {scrollTo: {y:"max"}, ease:Linear.easeNone, delay:0,
            onComplete:
                function() { TweenLite.to(isi, .5, {scrollTo:0, ease:Power2.easeOut})} });
    };
    

    function initAnims() {
        //m.tmln.timeScale(.3);
        m.tmln.addLabel("scn1", .2);
        m.tmln.to(txt1, fadeIn, {autoAlpha:1}, "scn1");
        m.tmln.from(txt1, fadeIn, {x:"+=15"}, "scn1");
        
        m.tmln.addLabel("scn2", "+=1.3");
        m.tmln.to(bg, fadeIn, {x:25, y:-170, scale:.55}, "scn2");
        m.tmln.to(txt1, fadeIn, {scale:.72, x:-14, y:71}, "scn2");
        m.tmln.to(txt2, fadeIn, {autoAlpha:1}, "scn2+=.3");
        
        m.tmln.addLabel("scn3", "+=1.3");
        m.tmln.to(txt12, fadeOut, {autoAlpha:0}, "scn3");
        m.tmln.to(bg, fadeIn, {x:"-=25", y:"-=25"}, "scn3");
        m.tmln.to(txt3, fadeIn, {autoAlpha:1}, "scn3+=.3");
        
        m.tmln.from(isi, fadeIn, {y:isiY}, "scn3+=.3");
        m.tmln.to(isi, fadeIn, {y:isiY, autoAlpha:1}, "scn3+=.3");
        m.tmln.set(cta, {height:isiY}, "scn3+=.3");
        
        m.tmln.to(requestARep, fadeIn, {autoAlpha:1}, "scn3+=.5");
        m.tmln.from(requestARep, fadeIn, {x:"+=15"}, "scn3+=.5");

        m.tmln.call(scrollISI, [], this, "scn3+=1.5");
    }
        
}