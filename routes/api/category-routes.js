const router = require('express').Router();
const { Category, Product } = require('../../models');

// establishes get routes to get categories
router.get('/', (req, res) => {
  // queries all categories and includes product
  Category.findAll({ include: [Product] })
  // publishes categories as json
  .then((categories) => res.json(categories))
  // returns error status if needed
  .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
