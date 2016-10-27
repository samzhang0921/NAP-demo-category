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
      for(var i=0;i<product.colourIds.length; i++){
        if (product.colourIds[i] == colorId) {
          return true;
        }
      }
        return false;
    });
}

function getAllProductsColor(products, colorArray) {
    var colorProducts = [];
    for (var i = 0; i < colorArray.length; i++) {
        colorProducts = colorProducts.concat(getProductsColor(products, colorArray[i]));
    }
    return colorProducts;
}

module.exports = {
  finalPrice: finalPrice,
  sortBy: sortBy,
  getBrandProducts: getBrandProducts,
  getAllBrandsProducts: getAllBrandsProducts,
  getProductsColor: getProductsColor,
  getAllProductsColor: getAllProductsColor
};
