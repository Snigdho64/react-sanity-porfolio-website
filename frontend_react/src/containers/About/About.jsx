import React, { useEffect, useState } from 'react'
import AboutStyled from './About.styled'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../components'

const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'
        client.fetch(query).then((data) => setAbouts(data))
    }, [])

    return (
        <AboutStyled className="app__about">
            <h2 className="head-text">
                I know that <span>Good Design</span>means{' '}
                <span>Good Business</span>
            </h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={index + about.title}
                    >
                        <h3>{about.title}</h3>
                        <img src={urlFor(about.imageUrl)} alt={about.title} />
                        <p className="p-text">{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </AboutStyled>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
