import { useState } from "react";
import '../styles/ContactForm.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useContext } from "react";
import { listCartContext } from "./components item/ProviderContextCart";

const ContactForm = () => {

    const { listCart } = useContext(listCartContext)
    
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        contact: '',
        email: '',
        order: {listCart},
    });

    const [id, setId] = useState();

    const changeHandler = (ev) => {
        const {name, value} = ev.target;
        setForm({...form, [name]: value});
    }
    
    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const contactFormCollection = collection(db, 'orders');
        addDoc(contactFormCollection, form).then((snapshot) => setId(snapshot.id));
    };
    
    return (
        <div className="contenedor">
           
            {typeof id !== 'undefined' ? (
            <div className="orden">El mensaje se ha enviado correctamente con id: {id}</div>
            ) : (
            <form onSubmit={submitHandler}>
                <h3>FINALIZAR COMPRA</h3>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre"
                value={form.nombre}
                onChange={changeHandler}
                />
                <label htmlFor="apellido">Apellido:</label>
                <input 
                type="text" 
                name="apellido" 
                id="apellido"
                value={form.apellido}
                onChange={changeHandler}
                />
                <label htmlFor="contact">Numero:</label>
                <input 
                type="number" 
                name="contact" 
                id="contact"
                value={form.contact}
                onChange={changeHandler}
                />
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                value={form.email}
                onChange={changeHandler}
                />

                <button className="enviar">Enviar</button>

            </form>
            
            )}
             
        </div>
    )
}

export default ContactForm;