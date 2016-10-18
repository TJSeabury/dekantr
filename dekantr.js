
function dekantrPrime() {
    "use strict";
    
    this.buffer = null;
    
    this.html = null; // root DOM element to hold in dekantr object for easy reference, this could really be anything, i.e. the best way to access the document
    
    this.modules = {}; 
    
    this.fetch = function(url) { // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
        
        
        
    };
    
    this.dekant = function(targetNode) { // this will be the method that "dekants" the retrieved and build modular content into the site's DOM
        
        targetNode = document.getElementById(targetNode);
        
        let url = targetNode.getAttribute("data-dekantr-module") + ".html",
        
        r = new XMLHttpRequest();
        
        r.responseType = "document";
        
        r.overrideMimeType('text/xml');
        
        r.open("get", url);
        
        r.onload = function () {
            
            if (r.readyState === r.DONE) {
                
                if (r.status === 200) {
                    
                    console.log(r);
                    
                    var injectable = r.responseXML.getElementsByTagName("body")[0].innerHTML;
                    
                    console.log(injectable);
                    
                    targetNode.innerHTML = injectable;
                    
                }
                
            }
            
        };
        
        r.send(null);

    };
    
}

var dekantr = new dekantrPrime();