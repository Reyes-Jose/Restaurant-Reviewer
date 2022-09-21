const router = require('express').Router();
const { Restaurant, Review } = require('../../models');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const locationData = await Review.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a review
router.post('/', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a review
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!review) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
