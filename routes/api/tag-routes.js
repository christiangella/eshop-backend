const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// establishing route for index (/)
router.get('/', (req, res) => {
  //finds all with the class instance of Tag
  Tag.findAll({
    // queries Product using ProductTag
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  // returns as json
  .then((tags) => res.status(200).json(tags))
  // returns error if needed
  .catch((err) => res.status(500).json(err))
});

// establishing route for specific id
router.get('/:id', (req, res) => {
  // finds first instance of tag...
  Tag.findOne({
    // ... that meets the specific id
    where: {
      id: req.params.id
    },
    // queries Product using ProductTag
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  // returns as json
  .then((tag) => res.status(200).json(tag))
  // returns error if needed
  .catch((err) => res.status(500).json(err))
});

// establishing post route for creating tag
router.post('/', (req, res) => {
  //references request body to create Tag
  Tag.create(req.body)
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err))
});

// establishing put route to update tags
router.put('/:id', (req, res) => {
  // updates tag through contents in request body
  Tag.update(req.body, {
    // references id to ensure same id
    where: {
      id: req.params.id,
    }
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err))
});

// establishing delete route to delete tag based on id
router.delete('/:id', (req, res) => {
  // deletes tag based on matching id
  Tag.destroy({
    where: { id: req.params.id}
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err))
});

module.exports = router;
