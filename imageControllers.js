const Skill = require('../models/Skill');
const mongoose = require('mongoose');
require('dotenv').config();

  exports.postImage = async (req, res) => {
    const { title, description } = req.body; 
    // Extraction des champs title et description du corps de la requête.
  
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Image file is required" });
      }
      // Vérification que le fichier image a bien été envoyé.
  
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "images",
      });
      // Téléchargement de l'image sur Cloudinary dans le dossier "images".
  
      fs.unlinkSync(req.file.path); 
      // Suppression du fichier local après son envoi à Cloudinary.
  
      const image = new Image({
        title, 
        description,
        public_id: uploadResult.public_id, 
        url: uploadResult.secure_url,
      });
      // Création d'un document Image à partir des données reçues.
  
      await image.save(); 
      // Sauvegarde du document Image dans la base de données MongoDB.
  
      res.status(201).json(image); 
       
  
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "An error occurred while uploading the image." });
      // Gestion des erreurs lors de l'upload ou de la sauvegarde.
    }
  };

  exports.getImage = async (req, res) => {
    try{
        const image= await Image.find();
        res.json(image);

    }catch(error){
        console.error("Error fetching images:", error);
        res.status(500).json({error: "An error occurred while fetching the images."});
    }

};

//mettre à jour une donnée

exports.putImage = async (req, res) => {

    const {id} = req.params;
    const {title, description} = req.body;

    try {
        const image = await Image.findByIdAndUpdate(
            id,
            {title, description},
            {new: true}
        ); 

        if(!image){
            return res.status(404).json({error: "Image not found"});
        }
       
    }catch(error){
        console.error("Error updating image:", error);
        res.status(500).json({error: "An error occurred while updating the image."});
    }

};

exports.deleteImage = async (req, res) => {
    const {id} = req.params;
    try {
        const image = await Image.findByIdAndDelete(
            id
        ); 

        if(!image){
            return res.status(404).json({error: "Image not found"});
            
        }
        await cloudinary.uploader.destroy(image.public_id);
        res.json({message: "Image deleted successfully"});
       
    }catch(error){
        console.error("Error updating image:", error);
        res.status(500).json({error: "An error occurred while updating the image."});
    }
};

exports.getImage = (req, res) => {
    res.render('form')
};
