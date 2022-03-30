import React, { useEffect, useState } from 'react'
import TestimonialStyled from './Testimonial.styled'
import { client, urlFor } from '../../client'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../../components'
import { motion } from 'framer-motion'
const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    const [brands, setBrands] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const query = '*[_type == "testimonial"]'
        const brandsQuery = '*[_type == "brands"]'
        client.fetch(query).then((data) => setTestimonials(data))
        client.fetch(brandsQuery).then((data) => setBrands(data))
    }, [])
    const testimonial = testimonials && testimonials[currentIndex]

    const handleClick = (dir) => {
        if (dir === 'prev') {
            setCurrentIndex((currentIndex) =>
                currentIndex !== 0 ? currentIndex - 1 : testimonials.length - 1
            )
        }
        if (dir === 'next') {
            setCurrentIndex((currentIndex) =>
                currentIndex !== testimonials.length - 1 ? currentIndex + 1 : 0
            )
        }
    }

    return (
        <TestimonialStyled>
            {testimonial && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img
                            src={urlFor(testimonial.imageurl)}
                            alt="testimonial"
                        />
                        <div className="app__testimonial-content">
                            <p className="p-text">{testimonial.feedback}</p>
                            <div>
                                <h4 className="bold-text">
                                    {testimonial.name}
                                </h4>
                                <h5 className="p-text">
                                    {testimonial.company}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex">
                            <HiChevronLeft
                                onClick={handleClick.bind(null, 'prev')}
                            />
                        </div>
                        <div className="app__flex">
                            <HiChevronRight
                                onClick={handleClick.bind(null, 'next')}
                            />
                        </div>
                    </div>
                </>
            )}
            <div className="app__testimonials-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imageUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </TestimonialStyled>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'appp_testimonial'),
    'testimonial',
    'app__primarybg'
)
