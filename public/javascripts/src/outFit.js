(function () {
    var productView = document.querySelectorAll('.product-image-view');
    productView = [].slice.call(productView);
    productView.forEach(function (ele) {
        ele.addEventListener('onclick', function(event){
            console.log(this);
            });
        });

})();
