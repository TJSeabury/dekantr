
function dekantrPrime() {
    "use strict";
    
    this.path = "/modules/";
    
    this.buffer = null;
    
    this.html = null; // root DOM element to hold in dekantr object for easy reference, this could really be anything, i.e. the best way to access the document
    
    this.modules = {}; 
    
    this.fetch = function(url) { // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
        
        
        
    };
    
    this.dekant = function() { // this will be the method that "dekants" the retrieved and build modular content into the site's DOM
    
        let nodes = document.querySelectorAll("[data-dekantr-module]");
        
        for (let n = 0; n < nodes.length; ++n) {
            
            nodes[n].classList.add("dekantr-loading-iostream");
            
            let url = this.path + nodes[n].getAttribute("data-dekantr-module") + ".html",
        
            r = new XMLHttpRequest(); // where r is request.
            
            r.responseType = "document";
            
            r.overrideMimeType('text/xml');
            
            r.open("get", url);
            
            r.onload = function () {
                
                if (r.readyState === r.DONE) {
                    
                    if (r.status === 200) {
                        
                        var injectable = r.responseXML.getElementsByTagName("body")[0].innerHTML; // where injectable is the desired html content.
                        
                        setTimeout( () => {
                            nodes[n].innerHTML = injectable;
                            nodes[n].classList.remove("dekantr-loading-iostream");
                        }, Math.floor((Math.random() * 1000) * 2 + 1000));
                        
                    }
                    
                }
                
            };
            
            r.send(null);
            
        }

    };
    
}

var dekantr = new dekantrPrime();

//
// http://stackoverflow.com/questions/102605/can-i-perform-a-dns-lookup-hostname-to-ip-address-using-client-side-javascript/25962226#25962226
//
// explore this code later
//

let tachymeter = {
    
    then: Date.now(),
    now: null,
    interval: 1000 / 60,
    delta: null,
    fps: 60,
    frame: 0,
     
    tick: function() {
        
        this.now = Date.now();
        this.delta = this.now - this.then;
        this.fps = this.truncate((1 / this.delta) * 1000, 1);
        this.frame++;
         
        if (this.delta > this.interval) {
            
            this.then = this.now - (this.delta % this.interval);
            
            if ( this.frame >= 10 ) {
                this.updateDisplay();
                this.frame = 0;
            }
            
            // add more code here
            
        }
        
        window.requestAnimationFrame(tachymeter.tick.bind(tachymeter));
        
    },
    
    updateDisplay: function() {
        
        let fpsDisplay = document.getElementById("fps");
        
        fpsDisplay.innerHTML = "FPS: " + this.fps;
        
    },
    
    truncate: function floorFigure(figure, decimals){
        if (!decimals) decimals = 2;
        var d = Math.pow(10,decimals);
        return (parseInt(figure*d)/d).toFixed(decimals);
    }
};

tachymeter.tick();


let el = document.querySelectorAll("#testbed.dekantr-loading-iostream")[0],
content = window.getComputedStyle(el, ":after").getPropertyValue("content");


let groupPixelWidth = (((content.length + 1) * 10) / ((content.length + 1) / 9));
console.log(groupPixelWidth);

let width = 90;
console.log(width);

let visibleGroups = width / groupPixelWidth;
console.log(visibleGroups);

let ppf = (((content.length + 1) * 10) / 90) / 60;
let t = width / ppf;
console.log("v: " + ppf + " t: " + t + "s");