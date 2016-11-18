(function () {
    var pl = document.querySelectorAll('#productList img');
//    console.log(typeof pl);
//    console.log(pl[0]);
    pl = [].slice.call(pl); 
    pl.forEach(function (ele) {
        ele.addEventListener('mouseenter', function (event) {
            swapSrc(this, false);

        });
        ele.addEventListener('mouseleave', function (event) {
            swapSrc(this, true);

        });
    });

    function swapSrc(ele, hover) {
        var src = ele.getAttribute('src');
        var newSrc = hover ? src.replace('_in_', '_ou_') : src.replace('_ou_', '_in_');
        ele.setAttribute('src', newSrc);
    }
})();;(function(){
  console.log('hello');
    
})();
