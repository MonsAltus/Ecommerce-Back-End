const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where: {id: req.params.id}}, {
    include: [{model: Product}]
  }).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    res.status(400).json(err)
  });

  // Category.findOne({where: {id: req.params.id}}, {
  //   include: [{model: Product}]
  // }).then(category => res.json(category)).catch(err => res.status(400).json(err))
});

router.post('/', (req, res) => {
  // create a new category
  console.log(req.body);
  Category.create(req.body).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    res.status(400).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
