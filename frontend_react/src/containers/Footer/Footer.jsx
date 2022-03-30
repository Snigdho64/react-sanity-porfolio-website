import React, { useState } from 'react'
import { AppWrap, MotionWrap } from '../../components'
import { motion } from 'framer-motion'
import { client } from '../../client'
import FooterStyled from './Footer.styled'
import { images } from '../../constants'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        emaiL: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { name, email, message } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        setLoading(true)
        const contact = { _type: 'contact', name, email, message }
        client.create(contact).then((data) => {
            setIsFormSubmitted(true)
            setLoading(false)
        })
    }

    return (
        <FooterStyled>
            <h2 className="head-text">Take a Coffee & Chat With Me</h2>
            <div>
                <motion.div
                    className="app__footer-cards"
                    whileInView={{ x: [-200, 0] }}
                >
                    <div className="app__footer-card">
                        <img src={images.email} alt="email" />
                        <a
                            href="mailto:aexseusidparker64@gmail.com"
                            className="p-text"
                        >
                            aexseusidparker64@gmail.com
                        </a>
                    </div>
                    <div className="app__footer-card">
                        <img src={images.mobile} alt="mobile" />
                        <a href="tel:+917002891171" className="p-text">
                            7002891171
                        </a>
                    </div>
                </motion.div>
                {!isFormSubmitted ? (
                    <motion.div
                        whileInView={{ x: [200, 0] }}
                        className="app__footer-form app__flex"
                    >
                        <input
                            type="text"
                            className="p-text"
                            placeholder="Your Name"
                            value={name}
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            className="p-text"
                            placeholder="Your Email"
                            value={email}
                            name="email"
                            onChange={handleChange}
                        />

                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChange}
                        />

                        <button onClick={handleSubmit}>
                            {loading ? 'Sending' : 'Send Message'}
                        </button>
                    </motion.div>
                ) : (
                    <div>
                        <h3 className="head-text">
                            Thank You For Getting in Touch!
                        </h3>
                    </div>
                )}
            </div>
        </FooterStyled>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
