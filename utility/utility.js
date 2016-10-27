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


module.exports = {
  finalPrice: finalPrice,
  sortBy: sortBy,
  getBrandProducts: getBrandProducts,
  getAllBrandsProducts: getAllBrandsProducts,
  getProductsColor: getProductsColor,
  getAllProductsColor: getAllProductsColor
};
