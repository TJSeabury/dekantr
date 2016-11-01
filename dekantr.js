
function Dekantr() {
    "use strict";
    this.path = "modules/";
    this.buffer = null;
    this.html = null; // root DOM element to hold in dekantr object for easy reference, this could really be anything, i.e. the best way to access the document
    this.modules = {};
    this.fetch = function(url) { // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
    };
    
    this.dekant = function() { // this will be the method that "dekants" the retrieved and built modular content into the site's DOM
        let nodes = document.querySelectorAll("[data-dekantr-module]");
        for (let n = 0; n < nodes.length; ++n) {
            nodes[n].classList.add("dekantr-loading-iostream");
            let url = this.path + nodes[n].getAttribute("data-dekantr-module") + ".html",
            r = new XMLHttpRequest(); // where r is request.
            r.responseType = "document";
            r.overrideMimeType('text/xml');
            r.open("get", url);
            r.onload = function () {
                if (r.readyState === r.DONE && (r.status >= 200 && r.status <= 300)) {
                    nodes[n].innerHTML = r.responseXML.getElementsByTagName("body")[0].innerHTML;
                    setTimeout( () => {
                        nodes[n].classList.remove("dekantr-loading-iostream");
                    }, Math.floor((Math.random() * 1000) * 2 + 1000));
                }
            };
            r.send(null);
        }
    };

    this.classr = function(element, rules) {
        let styleElement = document.createElement('style'),
            styleSheet;
        document.head.appendChild(styleElement);
        styleSheet = styleElement.sheet;
        for (let i = 0, rl = rules.length; i < rl; i++) {
            let j = 1,
                rule = rules[i],
                selector = rules[i][0],
                propStr = '';
            // If the second argument of a rule is an array of arrays, correct our variables.
            if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
                rule = rule[1];
                j = 0;
            }

            for (let pl = rule.length; j < pl; j++) {
                let prop = rule[j];
                propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
            }

            // Insert CSS Rule
            styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
        }
    };

    function Tachymeter(fu) {
        let functions = fu;
        this.then = Date.now();
        this.now = null;
        this.interval = 1000 / 60;
        this.delta = null;
        this.fps = 60;
        this.frame = 0;
        this.tick = function(fu) {
            this.now = Date.now();
            this.delta = this.now - this.then;
            this.fps = Dekantr.truncate((1 / this.delta) * 1000, 1);
            this.frame++;
            if (this.delta > this.interval) {
                this.then = this.now - (this.delta % this.interval);
                if ( this.frame >= 10 ) {
                    this.updateDisplay();
                    this.frame = 0;
                }
                while(fu.length){
                    fu.shift().call();
                }
            }
            window.requestAnimationFrame(this.tick.bind(Dekantr));
        };
        this.updateDisplay = function() {
            let fpsDisplay = document.getElementById("fps");
            fpsDisplay.innerHTML = "FPS: " + this.fps;
        };
    }
    this.tachymeter = new Tachymeter();

    this.truncate = function(figure, decimals){
        if (!decimals) decimals = 2;
        var d = Math.pow(10,decimals);
        return (parseInt(figure*d)/d).toFixed(decimals);
    };

    this.load = function(fu) {
        if (window.addEventListener)  // W3C DOM
            window.addEventListener('load', fu, false);
        else if (window.attachEvent) { // IE DOM
            return window.attachEvent('onload', fu);
        }
        else console.log('I\'m sorry Dave, I\'m afraid I can\'t do that.');
    }
}
var dekantr = new Dekantr();

//
// http://stackoverflow.com/questions/102605/can-i-perform-a-dns-lookup-hostname-to-ip-address-using-client-side-javascript/25962226#25962226
//
// explore this code later

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