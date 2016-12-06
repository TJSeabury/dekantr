
function Shatter() {
    "use strict";

    /**************************************
     ------------- Properties -------------
    ***************************************/
    this.path = "modules/";

    this.buffer = null;

    // root DOM element to hold in Shatter object for easy reference, this could really be anything, i.e. the best way to access the document
    this.shatterDOM = null;

    this.modules = {};

    this.tachymeter = new Tachymeter();

    this.elements = {
        comment: {
            name: 'comment',
            tag: '<!--',
            end: '-->',
            wrap: true
        },
        doctype: {
            name: 'doctype',
            tag: '<!DOCTYPE>',
            end: null,
            wrap: false
        },
        a: {
            name: 'a',
            tag: '<a>',
            end: '</a>',
            wrap: true
        },
        abbr: {
            name: 'abbr',
            tag: '<abbr>',
            end: '</abbr>',
            wrap: true
        },
        address: {
            name: 'address',
            tag: '<address>',
            end: '</address>',
            wrap: true
        },
        area: {
            name: 'area',
            tag: '<area>',
            end: 'null',
            wrap: false
        },
        article: {
            name: 'article',
            tag: '<article>',
            end: '</article>',
            wrap: true
        },
        aside: {
            name: 'aside',
            tag: '<aside>',
            end: '</aside>',
            wrap: true
        },
        audio: {
            name: 'audio',
            tag: '<audio>',
            end: '</audio>',
            wrap: true
        },
        b: {
            name: 'b',
            tag: '<b>',
            end: '</b>',
            wrap: true
        },
        base: {
            name: 'base',
            tag: '<base>',
            end: 'null',
            wrap: false
        },
        bdi: {
            name: 'bdi',
            tag: '<bdi>',
            end: '</bdi>',
            wrap: true
        },
        bdo: {
            name: 'bdo',
            tag: '<bdo>',
            end: '</bdo>',
            wrap: true
        },
        blockquote: {
            name: 'blockquote',
            tag: '<blockquote>',
            end: '</blockquote>',
            wrap: true
        },
        body: {
            name: 'body',
            tag: '<body>',
            end: '</body>',
            wrap: true
        },
        br: {
            name: 'br',
            tag: '<br>',
            end: 'null',
            wrap: false
        },
        button: {
            name: 'button',
            tag: '<button>',
            end: '</button>',
            wrap: true
        },
        canvas: {
            name: 'canvas',
            tag: '<canvas>',
            end: '</canvas>',
            wrap: true
        },
        caption: {
            name: 'caption',
            tag: '<caption>',
            end: '</caption>',
            wrap: true
        },
        cite: {
            name: 'cite',
            tag: '<cite>',
            end: '</cite>',
            wrap: true
        },
        code: {
            name: 'code',
            tag: '<code>',
            end: '</code>',
            wrap: true
        },
        col: {
            name: 'col',
            tag: '<col>',
            end: 'null',
            wrap: false
        },
        colgroup: {
            name: 'colgroup',
            tag: '<colgroup>',
            end: '</colgroup>',
            wrap: true
        },
        datalist: {
            name: 'datalist',
            tag: '<datalist>',
            end: '</datalist>',
            wrap: true
        },
        dd: {
            name: 'dd',
            tag: '<dd>',
            end: '</dd>',
            wrap: true
        },
        del: {
            name: 'del',
            tag: '<del>',
            end: '</del>',
            wrap: true
        },
        details: {
            name: 'details',
            tag: '<details>',
            end: '</details>',
            wrap: true
        },
        dfn: {
            name: 'dfn',
            tag: '<dfn>',
            end: '</dfn>',
            wrap: true
        },
        dialog: {
            name: 'dialog',
            tag: '<dialog>',
            end: '</dialog>',
            wrap: true
        },
        div: {
            name: 'div',
            tag: '<div>',
            end: '</div>',
            wrap: true
        },
        dl: {
            name: 'dl',
            tag: '<dl>',
            end: '</dl>',
            wrap: true
        },
        dt: {
            name: 'dt',
            tag: '<dt>',
            end: '</dt>',
            wrap: true
        },
        em: {
            name: 'em',
            tag: '<em>',
            end: '</em>',
            wrap: true
        },
        embed: {
            name: 'embed',
            tag: '<embed>',
            end: '</embed>',
            wrap: true
        },
        fieldset: {
            name: 'fieldset',
            tag: '<fieldset>',
            end: '</fieldset>',
            wrap: true
        },
        figcaption: {
            name: 'figcaption',
            tag: '<figcaption>',
            end: '</figcaption>',
            wrap: true
        },
        figure: {
            name: 'figure',
            tag: '<figcaption>',
            end: '</figcaption>',
            wrap: true
        },
        footer: {
            name: 'footer',
            tag: '<footer>',
            end: '</footer>',
            wrap: true
        },
        form: {
            name: 'form',
            tag: '<form>',
            end: '</form>',
            wrap: true
        },
        h1: {
            name: 'h1',
            tag: '<h1>',
            end: '</h1>',
            wrap: true
        },
        h2: {
            name: 'h2',
            tag: '<h2>',
            end: '</h2>',
            wrap: true
        },
        h3: {
            name: 'h3',
            tag: '<h3>',
            end: '</h3>',
            wrap: true
        },
        h4: {
            name: 'h4',
            tag: '<h4>',
            end: '</h4>',
            wrap: true
        },
        h5: {
            name: 'h5',
            tag: '<h5>',
            end: '</h5>',
            wrap: true
        },
        h6: {
            name: 'h6',
            tag: '<h6>',
            end: '</h6>',
            wrap: true
        },
        head: {
            name: 'head',
            tag: '<head>',
            end: '</head>',
            wrap: true
        },
        header: {
            name: 'header',
            tag: '<header>',
            end: '</header>',
            wrap: true
        },
        hr: {
            name: 'hr',
            tag: '<hr>',
            end: 'null',
            wrap: false
        },
        html: {
            name: 'html',
            tag: '<html>',
            end: '</html>',
            wrap: true
        },
        i: {
            name: 'i',
            tag: '<i>',
            end: '</i>',
            wrap: true
        },
        iframe: {
            name: 'iframe',
            tag: '<iframe>',
            end: '</iframe>',
            wrap: true
        },
        img: {
            name: 'img',
            tag: '<img>',
            end: 'null',
            wrap: false
        },
        input: {
            name: 'input',
            tag: '<input>',
            end: 'null',
            wrap: false
        },
        ins: {
            name: 'ins',
            tag: '<ins>',
            end: '</ins>',
            wrap: true
        },
        kbd: {
            name: 'kbd',
            tag: '<kbd>',
            end: '</kbd>',
            wrap: true
        },
        keygen: {
            name: 'keygen',
            tag: '<keygen>',
            end: 'null',
            wrap: false
        },
        label: {
            name: 'label',
            tag: '<label>',
            end: '</label>',
            wrap: true
        },
        legend: {
            name: 'legend',
            tag: '<legend>',
            end: '</legend>',
            wrap: true
        },
        li: {
            name: 'li',
            tag: '<li>',
            end: '</li>',
            wrap: true
        },
        link: {
            name: 'link',
            tag: '<link>',
            end: null,
            wrap: false
        },
        main: {
            name: 'main',
            tag: '<main>',
            end: '</main>',
            wrap: true
        },
        map: {
            name: 'map',
            tag: '<map>',
            end: '</map>',
            wrap: true
        },
        mark: {
            name: 'mark',
            tag: '<mark>',
            end: '</mark>',
            wrap: true
        },
        menu: {
            name: 'menu',
            tag: '<menu>',
            end: '</menu>',
            wrap: true
        },
        menuitem: {
            name: 'menuitem',
            tag: '<menuitem>',
            end: '</menuitem>',
            wrap: true
        },
        meta: {
            name: 'meta',
            tag: '<meta>',
            end: null,
            wrap: false
        },
        meter: {
            name: 'meter',
            tag: '<meter>',
            end: '</meter>',
            wrap: true
        },
        nav: {
            name: 'nav',
            tag: '<nav>',
            end: '</nav>',
            wrap: true
        },
        noscript: {
            name: 'noscript',
            tag: '<noscript>',
            end: '</noscript>',
            wrap: true
        },
        object: {
            name: 'object',
            tag: '<object>',
            end: '</object>',
            wrap: true
        },
        ol: {
            name: 'ol',
            tag: '<ol>',
            end: '</ol>',
            wrap: true
        },
        optgroup: {
            name: 'optgroup',
            tag: '<optgroup>',
            end: '</optgroup>',
            wrap: true
        },
        option: {
            name: 'option',
            tag: '<option>',
            end: '</option>',
            wrap: true
        },
        output: {
            name: 'output',
            tag: '<output>',
            end: '</output>',
            wrap: true
        },
        p: {
            name: 'p',
            tag: '<p>',
            end: '</p>',
            wrap: true
        },
        param: {
            name: 'param',
            tag: '<param>',
            end: null,
            wrap: false
        },
        pre: {
            name: 'pre',
            tag: '<pre>',
            end: '</pre>',
            wrap: true
        },
        progress: {
            name: 'progress',
            tag: '<progress>',
            end: '</progress>',
            wrap: true
        },
        q: {
            name: 'q',
            tag: '<q>',
            end: '</q>',
            wrap: true
        },
        rp: {
            name: 'rp',
            tag: '<rp>',
            end: '</rp>',
            wrap: true
        },
        rt: {
            name: 'rt',
            tag: '<rt>',
            end: '</rt>',
            wrap: true
        },
        ruby: {
            name: 'ruby',
            tag: '<ruby>',
            end: '</ruby>',
            wrap: true
        },
        s: {
            name: 's',
            tag: '<s>',
            end: '</s>',
            wrap: true
        },
        samp: {
            name: 'samp',
            tag: '<samp>',
            end: '</samp>',
            wrap: true
        },
        script: {
            name: 'script',
            tag: '<script>',
            end: '</script>',
            wrap: true
        },
        section: {
            name: 'section',
            tag: '<section>',
            end: '</section>',
            wrap: true
        },
        select: {
            name: 'select',
            tag: '<select>',
            end: '</select>',
            wrap: true
        },
        small: {
            name: 'small',
            tag: '<small>',
            end: '</small>',
            wrap: true
        },
        source: {
            name: 'source',
            tag: '<source>',
            end: null,
            wrap: false
        },
        span: {
            name: 'span',
            tag: '<span>',
            end: '</span>',
            wrap: true
        },
        strong: {
            name: 'strong',
            tag: '<strong>',
            end: '</strong>',
            wrap: true
        },
        style: {
            name: 'style',
            tag: '<style>',
            end: '</style>',
            wrap: true
        },
        sub: {
            name: 'sub',
            tag: '<sub>',
            end: '</sub>',
            wrap: true
        },
        summary: {
            name: 'summary',
            tag: '<summary>',
            end: '</summary>',
            wrap: true
        },
        sup: {
            name: 'sup',
            tag: '<sup>',
            end: '</sup>',
            wrap: true
        },
        table: {
            name: 'table',
            tag: '<table>',
            end: '</table>',
            wrap: true
        },
        tbody: {
            name: 'tbody',
            tag: '<tbody>',
            end: '</tbody>',
            wrap: true
        },
        td: {
            name: 'td',
            tag: '<td>',
            end: '<td>',
            wrap: true
        },
        textarea: {
            name: 'textarea',
            tag: '<textarea>',
            end: '</textarea>',
            wrap: true
        },
        tfoot: {
            name: 'tfoot',
            tag: '<tfoot>',
            end: '</tfoot>',
            wrap: true
        },
        th: {
            name: 'th',
            tag: '<th>',
            end: '</th>',
            wrap: true
        },
        thead: {
            name: 'thead',
            tag: '<thead>',
            end: '</thead>',
            wrap: true
        },
        time: {
            name: 'time',
            tag: '<time>',
            end: '</time>',
            wrap: true
        },
        title: {
            name: 'title',
            tag: '<title>',
            end: '</title>',
            wrap: true
        },
        tr: {
            name: 'tr',
            tag: '<tr>',
            end: '</tr>',
            wrap: true
        },
        track: {
            name: 'track',
            tag: '<track>',
            end: null,
            wrap: false
        },
        u: {
            name: 'u',
            tag: '<u>',
            end: '</u>',
            wrap: true
        },
        ul: {
            name: 'ul',
            tag: '<ul>',
            end: '</ul>',
            wrap: true
        },
        var: {
            name: 'var',
            tag: '<var>',
            end: '</var>',
            wrap: true
        },
        video: {
            name: 'video',
            tag: '<video>',
            end: '</video>',
            wrap: true
        },
        wbr: {
            name: 'wbr',
            tag: '<wbr>',
            end: null,
            wrap: false
        }
    };


    /**************************************
     ---------------- INIT ----------------
    ***************************************/

    function buildDOM(DOM) {
        let newDOM = {};

        function Element(el) {
            this.node = el;
            this.tag = el.tagName;
            this.id = el.id;
            this.class = el.classList;
            this.attributes = el.attributes;
            this.content = '';
        }
    }


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
        if (Array.isArray(target)) {
            target.forEach(()=>{
                switch (target) {
                    case target.charAt(0) === '#':
                        break;
                    case target.charAt(0) === '.':
                        break;
                }
            });
        } else {
            switch (target) {
                case target.charAt(0) === '#':

            }
        }
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
        for equality at the end of the algorithm, resulting in a faster comparison loop but costing one more iteration on average
        */
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