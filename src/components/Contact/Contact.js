import './Contact.css'
import { useForm } from "react-hook-form";




const Contact=()=> {

    const {register, formState: { errors },handleSubmit} = useForm();

    const onSubmit=(data) =>{
        console.log(data);
    }

    return(
        <header>
        <div className="FormularioContacto">
            <h2>Contacto</h2><div/>
            <div>
                <form className='Formulario' onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/xlekalep" method="post">
                <div>
                    <label>Your Name</label>
                    <input type='text' {...register('Nombre', {required:true , maxLength: 10} )} name='nombre'/>
                    {errors.nombre?.type === 'required' && <p>El nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El nombre debe tener menos de 10 caracteres</p>}
                </div>
                <div>
                    <label>Your Email address</label>
                    <input type='text' {...register('Email', {pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i})} name='Email'/>
                    {errors.Email?.type === 'pattern' && <p>El formato del email es requerido</p>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type='text' {...register('Phone')} name='Phone'/>
                </div>
                <div>
                    <label>how we can help you?</label>
                    <input type='text' {...register('Coment')} name='Comentario'/>
                </div>
                <input type="submit" value="Enviar"/>
                </form>
        </div>
        </div>
        </header>
    );
}

export default Contact;