import Contacto from '../models/contactoModels.js';
export const agregarContacto = async (req, res) => {
    try {
        const contacto = new Contacto ({
            name: req.body.name,
            direction: req.body.direction,
            phone: Number(req.body.phone),
            email: req.body.email
        });
        await contacto.save();
        //res.status(201).json({ message: 'Contacto agregado exitosamente' });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un problema al agregar el contacto' });
    }
};

export const getAllContactos = async (modelo, res) => {
    try {
        const contactos = await modelo.find({}).exec();
        return contactos;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un problema al obtener los contactos' });
        throw error;
    }
};



