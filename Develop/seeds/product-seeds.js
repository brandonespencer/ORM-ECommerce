const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 14.99,
    stock: 1444,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes',
    price: 90.0,
    stock: 2544,
    category_id: 5,
  },
  {
    product_name: 'MLB Baseball Hat',
    price: 19.99,
    stock: 1200,
    category_id: 4,
  },
  {
    product_name: 'Music Compilation Record',
    price: 19.99,
    stock: 500,
    category_id: 3,
  },
  {
    product_name: 'Shorts',
    price: 9.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
