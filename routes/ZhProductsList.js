var config = require("../config/config");
//define the this project source rootpath

var productImageRoot = '//cache.net-a-porter.com/images/products/';
//define the productimage root


function finalPrice(product) {
    return product.price.gross / product.price.divisor;
};

function sortBy(products, sortOrder) {
    switch (sortOrder) {
    case 'high':
        products.sort(function (productA, productB) {
            return productA.price.gross < productB.price.gross ? 1 : -1;
        });
        return products;
        break;
    case 'low':
        products.sort(function (productA, productB) {
            return productA.price.gross > productB.price.gross ? 1 : -1;
        });
        return products;
        break;
    default:
        return;
    }
}

function getBrandProducts(products, brandID) {
    return products.filter(function (product) {
        return product.brand.id == brandID;
    });
}


function getAllBrandsProducts(products, brandArray) {
    var brandProducts = [];
    for (var i = 0; i < brandArray.length; i++) {
        brandProducts = brandProducts.concat(getBrandProducts(products, brandArray[i]));
    }

    return brandProducts;
}


function getProductsColor(products, colorId) {
    return products.filter(function (product) {
        return product.colourIds == colorId;
    });
}

function getAllProductsColor(products, colorArray) {
    var colorProducts = [];
    for (var k = 0; k < colorArray.length; k++) {
        colorProducts = colorProducts.concat(getProductsColor(products, colorArray[k]));
    }
}

var routes = {
    init: function (app) {
        app.get("/:language/test/zhproducts", function (req, res, next) {

            // var array1 = allProducts;
            // var array2 = sortBy(allProducts, 'high');
            // var array3 = sortBy(allProducts, 'low');

            var allProducts = require(config.ROOT + "/data/products.json").data;
            //            find the products.json file and get the data

            //            find how many product
            var offset = parseInt(req.query.offset) || 0;

            var limit = parseInt(req.query.limit) || 60;


            if (offset > total) {
                return res.type('json').sendStatus(400);
                //                if the offset more than total return 400 Bad requestw
            }

            var lanuage = req.params.language;
            var sort = req.query.sort;

            //12,32,23
            var brandId = req.query.brand;

            //            var brandProducts = allProducts;

            if (brandId) {
                var brandArray = brandId.split(',');
                //get brand
                var brandProducts = getAllBrandsProducts(allProducts, brandArray);
                allProducts = brandProducts;

            }

            var colorId = req.query.color;
            if (colorId) {
                var colorArray = colorId.split(',');
                var colorProducts = getAllProductsColor(allProducts, colorArray);
                allProducts = colorProducts;
                console.log(allProducts);
            }
            console.log(allProducts);
            //make sure if there no sort query,  it still can get data
            
            if (sort) {
                var sortedProducts = sortBy(allProducts, sort);
                allProducts = sortedProducts;

            }


            var sliceProducts = allProducts.slice(offset, offset + limit);
            var total = allProducts.length;
            //            console.log(sortedProducts);
            //
            //            var slice = sortedProducts.slice(offset, offset+limit);

            res.json({

                //                set what response data will return and it should be Json format
                offset: offset,
                limit: limit,
                total: total,
                products: sliceProducts.map(function (product) {
                    //
                    //                    important!
                    //                    product

                    return {
                        sku: product.id,
                        name: product.name[lanuage],
                        price: '£' + finalPrice(product),
                        color: product.colourIds,
                        brand_name: product.brand.name.en,
                        brand_id: product.brand.id,
                        image: {
                            outfit: '//cache.net-a-porter.com/images/products/' + product.id + '/' + product.id + '_ou_sl.jpg'

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
