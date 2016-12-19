(function(){
    var button = document.querySelectorAll ('.product-image-view');
    
     button = [].slice.call(button);
    
    for (var i=0; i<= button.length; i++ ){
        button[i].addEventListener ('onclick', function(e){
            e.preventDefault;
        })
    }
    
    console.log(button);
})();