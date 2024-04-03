import  { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('form')({
    maxWidth: 600, // Establece el ancho máximo del contenedor del formulario
    margin: '0 auto', // Centra el formulario en la página
});

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar el formulario, como enviar los datos a un servidor
        console.log(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Mensaje"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                     <Button style={{ backgroundColor: '#151616', color: '#ffffff', border: 'none' }} type="submit">Enviar</Button> 
                </Grid>
            </Grid>
        </FormContainer>
    );
};

export default ContactForm;
