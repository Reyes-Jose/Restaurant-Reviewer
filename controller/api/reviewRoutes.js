const router = require('express').Router();
const { User, Restaurant, Review } = require('../../models');

// GET all reviews
router.get('/', async (_req, res) => {
  console.log('server /reviews...');
  try {
    const review = await Review.findAll({
      include: [{ model: Restaurant }],
    });
    const reviewData = review.map((rev) => rev.get({ plain: true }));
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id, {
      include: [{ model: Restaurant }],
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

// CREATE a review
router.post('/', async (req, res) => {
  console.log('req.body', req.body);
  try {
    const review = await Review.create({
      restaurant_id: parseInt(req.body.restaurant_id),
      comment: req.body.comment,
      user_id: req.session.user_id,
    });
    console.log('review', review);
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
