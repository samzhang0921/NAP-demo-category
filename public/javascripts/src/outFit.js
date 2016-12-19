<<<<<<< HEAD
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
=======
(function () {
    var outFit = document.querySelector('.outfit');
    var product = document.querySelector('.product');
     var product_imgs = document.querySelectorAll('.productsList img');
    var p_i= [].slice.call(product_imgs);
    console.log(p_i);
    console.log(outFit,product);
    outFit.addEventListener('click', function(even){
        even.preventDefault();
        this.classList.remove('selected');
        product.classList.add('selected');

        p_i.forEach (function(ele){
            switch_img(ele,false);
        });
    });
    product.addEventListener('click', function(even){
        even.preventDefault();
        this.classList.remove('selected');
        outFit.classList.add('selected');
         p_i.forEach (function(ele){
            switch_img(ele,true);
        });
    });

    function switch_img (ele, link){

     var src = ele.getAttribute('src');
        var newSrc = link ? src.replace('_in_', '_ou_') : src.replace('_ou_', '_in_');
        ele.setAttribute('src', newSrc);
    }
//    productView = [].slice.call(productView);
//    productView.forEach(function(ele){
////
//        ele.addEventListener('click', function(even){
//            event.preventDefault();
//            this.classList.remove("selected");
//            this.nextSibling.classList.add("selected");
//
//
//        });
//    });

})();
>>>>>>> origin/master
