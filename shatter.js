
function Shatter() {
    "use strict";
    this.path = "modules/";
    this.buffer = null;
    this.html = null; // root DOM element to hold in Shatter object for easy reference, this could really be anything, i.e. the best way to access the document
    this.modules = {};
    this.fetch = function(url) { // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
    };
    
    this.dekant = function() { // this will be the method that "dekants" the retrieved and built modular content into the site's DOM
        let nodes = document.querySelectorAll("[data-dekantr-module]");
        for (let n = 0; n < nodes.length; ++n) {
            nodes[n].classList.add("shatter-loading");
            let url = this.path + nodes[n].getAttribute("data-dekantr-module") + ".html",
            r = new XMLHttpRequest(); // where r is request.
            r.responseType = "document";
            r.overrideMimeType('text/xml');
            r.open("get", url);
            r.onload = function () {
                if (r.readyState === r.DONE && (r.status >= 200 && r.status <= 300)) {
                    setTimeout( () => {
                        nodes[n].innerHTML = r.responseXML.getElementsByTagName("body")[0].innerHTML;
                        nodes[n].classList.remove("shatter-loading");
                    }, Math.floor((Math.random() * 1000) * 2 + 1000));
                }
            };
            r.send(null);
        }
    };

    this.get = function(target = [document]) {
        let type,
            elements = [
                '<!--...-->',
                '<!DOCTYPE>',
                '<a>',
                '<abbr>',
                '<address>',
                '<area>',
                '<article>',
                '<aside>',
                '<audio>',
                '<b>',
                '<base>',
                '<bdi>',
                '<bdo>',
                '<blockquote>',
                '<body>',
                '<br>',
                '<button>',
                '<canvas>',
                '<caption>',
                '<cite>',
                '<code>',
                '<col>',
                '<colgroup>',
                '<datalist>',
                '<dd>',
                '<del>',
                '<details>',
                '<dfn>',
                '<dialog>',
                '<div>',
                '<dl>',
                '<dt>',
                '<em>',
                '<embed>',
                '<fieldset>',
                '<figcaption>',
                '<figure>',
                '<footer>',
                '<form>',
                '<h1>',
                '<h2>',
                '<h3>',
                '<h4>',
                '<h5>',
                '<h6>',
                '<head>',
                '<header>',
                '<hr>',
                '<html>',
                '<i>',
                '<iframe>',
                '<img>',
                '<input>',
                '<ins>',
                '<kbd>',
                '<keygen>',
                '<label>',
                '<legend>',
                '<li>',
                '<link>',
                '<main>',
                '<map>',
                '<mark>',
                '<menu>',
                '<menuitem>',
                '<meta>',
                '<meter>',
                '<nav>',
                '<noscript>',
                '<object>',
                '<ol>',
                '<optgroup>',
                '<option>',
                '<output>',
                '<p>',
                '<param>',
                '<pre>',
                '<progress>',
                '<q>',
                '<rp>',
                '<rt>',
                '<ruby>',
                '<s>',
                '<samp>',
                '<script>',
                '<section>',
                '<select>',
                '<small>',
                '<source>',
                '<span>',
                '<strong>',
                '<style>',
                '<sub>',
                '<summary>',
                '<sup>',
                '<table>',
                '<tbody>',
                '<td>',
                '<textarea>',
                '<tfoot>',
                '<th>',
                '<thead>',
                '<time>',
                '<title>',
                '<tr>',
                '<track>',
                '<u>',
                '<ul>',
                '<var>',
                '<video>',
                '<wbr>'
            ];
        if (target.charAt(0) === '#') {}
    };

    this.mutate = function(element, rules) {
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
            this.fps = Shatter.truncate((1 / this.delta) * 1000, 1);
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
            window.requestAnimationFrame(this.tick.bind(Shatter));
        };
        this.updateDisplay = function() {
            let fpsDisplay = document.getElementById("fps");
            fpsDisplay.innerHTML = "FPS: " + this.fps;
        };
    }
    this.tachymeter = new Tachymeter();

    this.truncate = function(figure, decimals) {
        if (!decimals) decimals = 2;
        var d = Math.pow(10,decimals);
        return (parseInt(figure*d)/d).toFixed(decimals);
    };

    this.listen = function(fu, target = 'window', event = 'load') {
        switch (target) {
            case 'window':
                let listeners = new Promise((resolve, reject)=>{
                    let validFunctions = [],
                        invalidFunctions = [];
                    if (Array.isArray(fu)) {
                        for (let i = 0; i < fu.length; ++i) {
                            if (typeof fu[i] === 'function') {
                                validFunctions.push(fu[i]);
                            } else {
                                invalidFunctions.push(fu[i]);
                            }
                        }
                    } else if (typeof fu === 'function') {
                        validFunctions.push(fu);
                    }
                    else {
                        invalidFunctions.push(fu);
                    }
                    resolve(validFunctions);
                    reject(invalidFunctions);
                });

                listeners.then((valid)=>{
                    for (let i = 0; i < valid.length; ++i) {
                        if (window.addEventListener) { // W3C DOM
                            window.addEventListener(event, valid[i], false);
                        } else if (window.attachEvent) { // IE DOM
                            window.attachEvent('onload', valid[i]);
                        }
                    }
                }).catch((rejected)=>{
                    for (let i = 0; i < rejected; ++i) {
                        console.log(rejected[i] + " is not a function!");
                    }
                });
        }

    };

    this.keyboardController = function() {

    };

    this.mouseController = function() {

    };

    this.siteMap = function() {

    };

    this.ui = function() {

    };
}
let sh = new Shatter();

// useful snippet; integrate it
// var scrollTop = pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);

//
// http://stackoverflow.com/questions/102605/can-i-perform-a-dns-lookup-hostname-to-ip-address-using-client-side-javascript/25962226#25962226
//
// explore this code later

/*
let el = document.querySelectorAll("#testbed.shatter-loading-iostream")[0],
content = window.getComputedStyle(el, ":after").getPropertyValue("content");

let groupPixelWidth = (((content.length + 1) * 10) / ((content.length + 1) / 9));
console.log(groupPixelWidth);

let width = 90;
console.log(width);

let visibleGroups = width / groupPixelWidth;
console.log(visibleGroups);

let ppf = (((content.length + 1) * 10) / 90) / 60;
let t = width / ppf;
console.log("v: " + ppf + " t: " + t + "s");*/