import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema(
    { 
        name: String,
        direction: String,
        phone: Number,
        email: String
    }, 
    { collection: "contactos" }
);

const Contacto = mongoose.model ("Contacto", contactoSchema);


export default Contacto;