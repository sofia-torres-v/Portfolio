import  { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from '@emailjs/browser';
import './form.css'

const FormContainer = styled('form')({});

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_vu4w89h';
        const templateId = 'template_t7l825i';
        const publicKey = '1V3QsO3bTUVPUoZ2F'
        const templatesParams = {
            from_name : name,
            from_email : email,
            to_name:'Sofia',
            message: message,
        };
        console.log(templatesParams);

        //enviar el email usando email.js
        emailjs.send(serviceId, templateId, templatesParams, publicKey)
        .then((response) =>{
            console.log('email enviado correctamente', response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error)=>{
            console.log('error al enviar', error);

        })
        
    }

  

    return (
        <FormContainer onSubmit={handleSubmit} className='formContainer'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Mensaje"
                        name="message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                     <Button type="submit" className='submitButton'>Enviar</Button> 
                </Grid>
            </Grid>
        </FormContainer>
    );
};

export default ContactForm;
