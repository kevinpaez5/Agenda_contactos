import express from 'express';
import mongoose from 'mongoose';
import { agregarContacto, getAllContactos } from './controllers/contactoController.js';
import Contacto from './models/contactoModels.js';
const app = express();
app.use(express.json())

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});



app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./styles'));

app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('Server is running http://localhost:3000');
})

app.get( '/', async (req, res) => {
    const contactos = await getAllContactos(Contacto, res);
    res.render('index', { contactos });
})

app.post('/agregar', (req, res) => {
    agregarContacto(req, res);
})