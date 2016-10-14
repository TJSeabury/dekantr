



var dekantr = {
    
    buffer: null,
    
    html: null, // root DOM element to hold in dekantr object for easy reference, this could really be anything, i.e. the best way to access the document
    
    modules: {}, 
    
    fetch: function(url) { // build the XMLHttprequest handler here. This should take either a string or url ( or build a url based on a string, or know module name)
        
        var r = new XMLHttpRequest();
        
        r.responseType = "document";
        
        r.open("post", url);
        
        r.send();
        
        return r;
        
    },
    
    dekant: function(targetNode) { // this will be the method that "dekants" the retrieved and build modular content into the site's DOM
        
        
        
    }
    
}