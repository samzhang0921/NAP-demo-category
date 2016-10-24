var config= require ("../config/config");
//define the this project source rootpath

var productImageRoot = '//cache.net-a-porter.com/images/products/';
//define the productimage root


function finalPrice(product) {
    return product.price.gross / product.price.divisor;
    
};

var routes = {
    init: function(app) {
        app.get("/test/zhproducts", function (req, res, next){
            var allProducts = require (config.ROOT + "/data/products.json").data;
//            find the products.json file and get the data
            var total = allProducts.length;
//            find how many product
            var offset = parseInt(req.query.offset) || 0;
            
            var limit = parseInt(req.query.limit) || 60;
            
             
            if (offset > total) {
                return res.type('json').sendStatus(400);
//                if the offset more than total return 400 Bad requestw
            }
            
            res.json( {
                
//                set what response data will return and it should be Json format 
                offset: offset,
                limit: limit,
                total: total,
                products: allProducts.slice(offset, offset+limit).map(function(product){
//                    lidan please talk about more slice and map 
//                    important!
//                    product
                    
                    return {
                        sku: product.id,
                        name: product.name.zh,
                        price: '£' + finalPrice(product),
                        color: product.colourIds,
                        brand_name: product.brand.name.en,
                        brand_id: product.brand.id,
                        image: {
                            outfit:'//cache.net-a-porter.com/images/products/'+product.id+'/'+product.id+'_ou_sl.jpg'
                        
                        }
                    }
                })
            })
            
        })
        
    }
};

module.exports = {
    routes: routes
}