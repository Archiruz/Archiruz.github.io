import React, {useState} from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.email) {
        errors.email = 'Email is required';
        valid = false;
    }

    if (!formData.message) {
        errors.message = 'Message is required';
        valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        document.getElementById('form').submit();
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        I am an <b>Informatics Engineering fresh-graduate</b> with a strong
                        passion for applying AI, machine learning and data science to solve real-world challenges. <br /> <br />
                        I have intermediate proficiency in Python, JavaScript, and web development frameworks
                        such as Laravel and PHP. I also have a clear understanding of machine learning concept,
                        especially with the TensorFlow framework. 
                    </p>
                </div>

                {/* <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div>

                </div> */}

            </div>

            <form
                action="https://getform.io/f/apjmqgla"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
                onSubmit={handleSubmit}
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-rose-600 py-2 pl-2 pr-4"
                onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-rose-600 py-2 pl-2 pr-4"
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <textarea
              name="textarea"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-rose-600 py-2 pl-2 pr-4"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact