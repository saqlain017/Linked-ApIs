import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Travel from '../images/travel.jpg'
import '../Styles/Contact.css'
function Contact(){
    const validation = yup.object().shape({
        fullName : yup.string().required(),
        email : yup.string().email().required(),
        message : yup.string().min(8).required(),
    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(validation),
    })
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${Travel})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id='fullName' placeholder='Enter full name*' {...register("fullName")}/>
                    {errors.fullName?.message}
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='someone@email.com*' id='email' {...register("email")}/>
                    {errors.email?.message}
                    <label htmlFor="message">Message</label>
                    <textarea cols="30" rows="10" placeholder='Enter your message here*' id='message' {...register("message")}></textarea>
                    {errors.message?.message}
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact