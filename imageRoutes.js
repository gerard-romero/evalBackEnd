// Importation des modules

const express = require('express');
const router = express.Router();

// Importation des controllers

const {postImage,getImage,putImage,deleteImage } = require('../controllers/imageControllers.js');


// Création des routes

router.post('/register',postImage);
router.get('/:id',getImage);
router.put('/:id',putImage);
router.delete('/:id',deleteImage);

module.exports = router;