 import React from 'react'
 import { RiMailStarLine } from "react-icons/ri";
 import { BsTelephonePlus } from "react-icons/bs";
 
 const Contact = () => {
   return (
     <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="flip-up">Get in touch</h2>
                <p className='text-grey-600 text[18px] pt-2' data-aos="flip-up">
                    Drop me a line, Give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="flip-up">
                    <RiMailStarLine size={30}/> Nazia@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="flip-up">
                <BsTelephonePlus  size={30}/> (021)123-45678    
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="flip-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-up">
                    <label htmlFor='email'>Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-up">
                    <label htmlFor='message'>Message</label>
                    <textarea       
                    className='bg-transparent border border-accent'
                    id='message' rows={8}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="flip-up">Send</button>
                
                </div>
            </div>
        </div>
     
   )
 }
 
 export default Contact
 