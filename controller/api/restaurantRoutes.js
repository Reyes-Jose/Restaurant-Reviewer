const router = require("express").Router();
const { User, Restaurant, Review } = require("../../models");

// GET all restaurants and their reviews
router.get("/", async (_req, res) => {
  try {
    const restaurant = await Restaurant.findAll({
      include: [{ model: Review }],
    });
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single restaurant by ID
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id, {
      include: [{ model: Review }],
    });

    if (!restaurant) {
      res.status(404).json({ message: "No restaurant found with this id!" });
      return;
    }

    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a restaurant
router.post("/", async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a restaurant based on the restaurant ID
router.delete("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!restaurant) {
      res.status(404).json({ message: "No restaurant found with this id!" });
      return;
    }

    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
