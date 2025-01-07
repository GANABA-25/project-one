
"use client"
"eslint-disable"

import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import { setMessageSuccessful } from "@/redux/features/contactSlice/contactSlice";
import { Bars } from 'react-loading-icons';
import emailjs from '@emailjs/browser';



interface message{
  setMessageSuccessful: (success: boolean) => void
}


const ContactForm:React.FC<message> = ({setMessageSuccessful}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [errorFields, setErrorFields] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [contactValues, setContactValues] = useState({

    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',

  })

//   const dispatch:AppDispatch = useDispatch()

  const form:any = useRef()

  const sendMessage = (e:React.FormEvent) => {

    e.preventDefault()

    if (contactValues.firstName === "" || contactValues.lastName === "" ||
      contactValues.email === "" || contactValues.subject === "" || contactValues.message === "") {

         setErrorFields(true)
         setTimeout(()=>{
          setErrorFields(false)
         },1500)

    } else {
      setIsLoading(true)
      emailjs.sendForm('service_lvmzhdw', 'template_dmib91e', form.current, 'BYjExjDBLN7-FFo7b')
                    
      .then(() => {
        
        setMessageSuccessful(true)
          setIsLoading(false)
        setTimeout(() => setMessageSuccessful(false), 1000)

          //clear defaults
          setContactValues((prev) => { return { ...prev, subject: "" } })
          setContactValues((prev) => { return { ...prev, firstName: "" } })
          setContactValues((prev) => { return { ...prev, lastName: "" } })
          setContactValues((prev) => { return { ...prev, email: "" } })
          setContactValues((prev) => { return { ...prev, message: "" } })

      }, (error) => {
          console.log(error.text)
          setMessageError(true)
          setTimeout(() => setMessageError(false), 1500)
      });
    }

  }

  return (
    <>
      <form  ref={form} onSubmit={sendMessage}>
        <div className="pb-5">
          <div className="md:grid md:grid-cols-2 md:gap-4 montserrat-regular">
            <div className="my-4 pb-2 w-full lg:w-[20rem]">
              <motion.input
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-grayDark focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-md w-full p-4 placeholder-gray-500 md:p-6"
                type="text"
                placeholder="First Name"
                name="first_name"
                required
                value={contactValues.firstName}
                onChange={(e) => { setContactValues((prev) => { return { ...prev, firstName: e.target.value } }) }}
              />
            </div>
            <div className="my-4 pb-2 w-full">
              <motion.input
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-grayDark focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-md w-full p-4 placeholder-gray-500 md:p-6"
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
                value={contactValues.lastName}
                onChange={(e) => { setContactValues((prev) => { return { ...prev, lastName: e.target.value } }) }}
              />
            </div>
            <div className="my-4 pb-2 w-full">
              <motion.input
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-grayDark focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-md w-full p-4 placeholder-gray-500 md:p-6"
                type="email"
                placeholder="Email"
                name="user_email"
                required
                value={contactValues.email}
                onChange={(e) => { setContactValues((prev) => { return { ...prev, email: e.target.value } }) }}
              />
            </div>
            <div className="my-4 relative">
              <motion.input
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-grayDark focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-md w-full p-4 placeholder-gray-500 md:p-6"
                placeholder="Subject"
                name="user_subject"
                required
                value={contactValues.subject}
                onChange={(e) => { setContactValues((prev) => { return { ...prev, subject: e.target.value } }) }}
              />
            </div>
            {isLoading && <Bars stroke="black" height={50} fill="black"  className=" absolute left-[45%] top-[70%] max-[700px]:left-[36%]"/>}
          </div>
            
          <div className="my-4 relative">
            <motion.textarea
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-grayDark focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-md w-full p-4 placeholder-gray-500 resize-y h-[15rem]"
              placeholder="Message"
              name="message"
              required
              value={contactValues.message}
              onChange={(e) => { setContactValues((prev) => { return { ...prev, message: e.target.value } }) }}
            />
          </div>
          {errorFields && <p className="text-red-500 text-center pb-2 ">All fields must be filled</p>}
          {messageError && <p className="text-red-500 text-center pb-2 ">could not send message. Try again</p>}
          <span className="md:flex md:justify-center">
            <motion.button
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl p-2 montserrat-semibold uppercase text-green-600 border-2 border-green-600  hover:bg-green-600 hover:text-white rounded-full shadow-md w-full md:w-96"
              type="submit"
            >
              Send
            </motion.button>
          </span>
        </div>
      </form>
    </>
  );
};

export default ContactForm;