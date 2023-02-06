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

// establish get route to search by id
router.get('/:id', (req, res) => {
  // searches for first category that matches id
  Category.findOne({
    where: {
      id: req.params.id
    },
    // ensure catgories return products
    include: [Product],
  })
  // return as json
  .then((category) => res.json(category))
  // otherwise return error
  .catch((err) => res.status(400).json(err))
});

// establish post routes to post new categoies
router.post('/', (req, res) => {
  // creates category based on request body
  Category.create(req.body)
  // adds category to json
  .then((category) => res.json(category))
  // otherwise returns error
  .catch((err) => res.status(400).json(err))
});

// establish put route to update category based on id
router.put('/:id', (req, res) => {
  // updates category from request body, uses id as reference
  Category.update(req.body, { where: { id: req.params.id }})
  // then publishes category to json
  .then((category) => res.json(category))
  // otherwise returns error
  .catch((err) => res.status(400).json(err))
});

// establishes delete route assigned to id
router.delete('/:id', (req, res) => {
  // deletes category associated to an id
  Category.destroy({ where: { id: req.params.id }})
  // updates json file
  .then((category) => res.json(category))
  // otherwise returns error
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
