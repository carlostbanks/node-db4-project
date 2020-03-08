const express = require('express');

const recipes = require('./recipes-model.js');

const router = express.Router();


// GET REQUESTS
router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json({ message: 'Get Recipes Failed' });
    });
  });

  router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    recipes.getShoppingList(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Shopping List' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    recipes.getInstructions(id)
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });

  module.exports = router;
