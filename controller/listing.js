var middleware = require('../middleware/middleware');
var config = require('../config/config');
var utility = require('../utility/utility');

module.exports = {
  render: function(req, res, next){
    // var array1 = allProducts;
    // var array2 = sortBy(allProducts, 'high');
    // var array3 = sortBy(allProducts, 'low');

    var sliceProducts = res.locals.allProducts.slice(res.locals.offset, res.locals.offset + res.locals.limit);

    var total = res.locals.allProducts.length;

    if (res.locals.offset > total) {
        return res.type('json').sendStatus(400);
        //                if the offset more than total return 400 Bad requestw
    }

    res.json({
        //                set what response data will return and it should be Json format
        offset: res.locals.offset,
        limit: res.locals.limit,
        total: total,
        products: sliceProducts.map(function (product) {
            //
            //                    important!
            //                    product
            return {
                sku: product.id,
                name: product.name[res.locals.lanuage],
                price: '£' + utility.finalPrice(product),
                color: product.colourIds,
                brand_name: product.brand.name.en,
                brand_id: product.brand.id,
                caregories:product.categories,
                image: {
                    outfit: '//cache.net-a-porter.com/images/products/' + product.id + '/' + product.id + '_ou_sl.jpg'

                },
                
                
            }
        })
    })

  }
};
