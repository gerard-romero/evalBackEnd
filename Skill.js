const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        level: { type: String, required: true },
        // image: {title: String, // Titre de l'image.
        //     description: String, // Description associée à l'image.
        //     public_id: String, // ID public généré par Cloudinary pour l'image.
        //     url: String, // URL sécurisée de l'image hébergée sur Cloudinary.
        //     },

        },

   { timestamps : true }
);


module.exports = mongoose.model("Skill", skillSchema);