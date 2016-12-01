
function Shatter() {
    "use strict";

    /**************************************
     ------------- Properties -------------
    ***************************************/
    this.path = "modules/";

    this.buffer = null;

    // root DOM element to hold in Shatter object for easy reference, this could really be anything, i.e. the best way to access the document
    this.html = null;

    this.modules = {};

    this.tachymeter = new Tachymeter();

    this.elements = {
        comment: {
            name: 'comment',
            tag: '<!--...-->',
            open: '<!--',
            close: '-->',
            wrap: true
        },
        doctype: {
            name: 'doctype',
            tag: '<!DOCTYPE>',
            open: null,
            close: null,
            wrap: false
        },
        a: {
            name: 'a',
            tag: '<a>',
            open: '<a>',
            close: '</a>',
            wrap: true
        },
        abbr: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        address: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        area: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        article: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        aside: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        audio: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        b: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        base: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        bdi: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        bdo: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        blockquote: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        body: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        br: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        button: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        canvas: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        caption: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        cite: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        code: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        col: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        colgroup: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        datalist: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        dd: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        del: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        details: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        dfn: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        dialog: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        div: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        dl: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        dt: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        em: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        embed: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        fieldset: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        figcaption: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        figure: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        footer: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        form: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h1: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h2: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h3: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h4: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h5: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        h6: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        head: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        header: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        hr: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        html: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        i: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        iframe: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        img: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        input: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        ins: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        kbd: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        keygen: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        label: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        legend: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        li: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        link: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        main: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        map: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        mark: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        menu: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        menuitem: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        meta: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        meter: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        nav: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        noscript: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        object: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        ol: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        optgroup: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        option: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        output: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        p: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        param: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        pre: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        progress: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        q: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        rp: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        rt: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        ruby: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        s: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        samp: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        script: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        section: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        select: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        small: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        source: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        span: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        strong: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        style: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        sub: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        summary: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        sup: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        table: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        tbody: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        td: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        textarea: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        tfoot: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        th: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        thead: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        time: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        title: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        tr: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        track: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        u: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        ul: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        var: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        video: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        },
        wbr: {
            name: '',
            tag: '',
            open: '',
            close: '',
            wrap: true
        }
    };


    /**************************************
    --------------- Methods ---------------
    ***************************************/

    this.windowAt = function() {
        return pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    };

    // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
    this.fetch = function(url) {
    };

    // this will be the method that "dekants" the retrieved and built modular content into the site's DOM
    this.dekant = function() {
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
        let type;
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

    this.truncate = function(figure, decimals = 2) {
        let d = Math.pow(10, decimals);
        return (parseInt(figure * d) / d).toFixed(decimals);
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

    this.ui = {
        overlay: '',
        data: null,
        update: function() {},
        render: function() {}
    };

    /**************************************
     ------------- Functions --------------
    ***************************************/

    function binarySearch(A, T) {
        /*
        Given an array A of n elements with values or records A0 ... An−1, sorted such that A0 ≤ ... ≤ An−1,
        and target value T, the following subroutine uses binary search to find the index of T in A.
        */

        /*Set L to 0 and R to n − 1.*/
        let L = 0, R = A.length - 1, tFound = false;

        /*Set m (the position of the middle element) to the floor of (L + R) / 2.*/
        let m = Math.floor((L + R) / 2);
        while (!tFound && L < R) {
            if (A[m] === T) {
                return A[m];
            } else if (null) {
                /*If Am < T, set L to m + 1 and go to step 2.*/

            } else if (null) {
                /*If Am > T, set R to m – 1 and go to step 2.*/

            }
            /*Now Am = T, the search is done; return m.*/

        /*If L > R, the search terminates as unsuccessful.*/
        }







        /*
        This iterative procedure keeps track of the search boundaries via two variables. Some implementations may place the comparison
        for equality at the end of the algorithm, resulting in a faster comparison loop but costing one more iteration on average*/
    }

    /* REVIEW THIS AND BENCHMARK LATER */
    let shell_sort = function(array){
        let length = array.length;
        let h = 1;
        while( h < length / 3){
            h = 3 * h + 1;
        }

        while( h > 0 ){
            for ( let i = h; i < length; i++){

                for ( let j = i; j > 0 && array[j] < array[j-h]; j-=h){
                    array.swap(j, j-h);
                }
            }
            //decreasing h
            h = --h / 3

        }
        return array;
    };

    /* REVIEW THIS AND BENCHMARK LATER */
    let merge_sort = function(array){
        function merge(a, aux, lo, mid, hi ){

            for (let k = lo; k <= hi; k++){
                aux[k] = a[k];
            }
            debugger;
            let i = lo;
            let j = mid + 1;
            for (let k = lo; k <= hi; k++){
                if ( i > mid) a[k] = aux[j++];
                else if ( j > hi ) a[k] = aux[i++];
                else if ( aux[j] < aux[i]) a[k] = aux[j++];
                else a[k] = aux[i++];
            }
        }

        function sort(array, aux, lo, hi){
            if (hi <= lo) return;
            let mid = Math.floor(lo + (hi - lo) / 2);

            sort(array, aux, lo, mid);
            sort(array, aux, mid + 1, hi);

            merge(array, aux, lo, mid, hi);
        }

        function merge_sort(array){
            let aux = array.slice(0);
            sort(array, aux, 0, array.length - 1);
            return array;
        }

        return merge_sort(array);

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
}
let s = new Shatter();