const dotenv =require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require ('./config/db.js');
const JWT = require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes.js');
const cookieParser = require('cookie-parser');
const skillRoutes = require('./routes/skillRoutes.js');
const settingsRoutes = require('./routes/settingsRoutes.js');
const errorHandler = require("./middleware/errorHandler.js");
const app = express();
const {v2: cloudinary} = require('cloudinary');
const multer = require('multer');
const fs = require('fs');
const helmet = require('helmet');
const {title} = require('process');



tarteaucitron.user.abtastyID = 'id';
(tarteaucitron.job = tarteaucitron.job || []).push('abtasty');


app.use(express.json());
app.use(cookieParser());
app.use('api/users',userRoutes);
app.use(errorHandler);
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));

app.use(express.json());
app.use('api/skills',skillRoutes);

app.use(express.json());
app.use('api/settings',settingsRoutes);

app.use(express.json());
app.use('api/images',imageRoutes);

app.set('view engine', 'ejs');
app.set('views','./views');

cloudinary.config({ 
    cloud_name: 'duca2mjpm', 
    api_key: '632563349422154', 
    api_secret: 'lniPToKWEcETRbWK5zgl0Wi8C3A'
    });

    const upload = multer({ dest: 'uploads/' });

    mongoose
    .connect('mongodb+srv://gerard:gerard@clustertoday.ax26b.mongodb.net/')
    
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error:' ,err);
    });

    const Image = mongoose.model("Image", ImageSchema); 
    // Création d'un modèle basé sur le schéma Image.
    

const PORT = process.env.PORT || 3006;


connectDB();

app.listen(PORT, () => {
    console.log('Serveur opérationnel');
    
});