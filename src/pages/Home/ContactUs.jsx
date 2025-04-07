import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {


  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ym2he7j";
    const templateId = "template_b3o5wp8";
    const publicKey = "xup3EPAtF7_TjPTDb";


    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      });

  }


  return (

    <form ref={refForm} action="" onSubmit={handleSubmit} className="w-[28rem] mx-auto p-6 bg-white shadow-xl rounded-xl space-y-6 mt-20">
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-800'>Contact Us</h2>
        <p className='text-sm text-gray-500'>Please Fill This Form</p>
      </div>

      <fieldset className='flex flex-col gap-2'>
        <label htmlFor="name" className='text-sm font-medium text-gray-700'>Name</label>
        <input name='name' type="text" placeholder='EJEMPLO Santiago Aguirre' required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400'/>
      </fieldset>

      <fieldset className='flex flex-col gap-2'>
        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
        <input name='email' type="email" placeholder='Ejemplo santiagoaguirrecastano8@gmail.com' required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400'/>
      </fieldset>

      <fieldset className='flex flex-col gap-2'>
        <label htmlFor="message" className='text-sm font-medium text-gray-700'>Message</label>
        <textarea name='message' placeholder='Ejemplo Bienvenido' required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none' rows={4}/>
      </fieldset>

      <button className='w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors duration-300'>Send</button>
    </form>
  )
}


