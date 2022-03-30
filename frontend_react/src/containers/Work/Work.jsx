import React, { useEffect, useState } from 'react'
import WorkStyled from './Work.styled'
import { AppWrap, MotionWrap } from '../../components'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [works, setWorks] = useState([])
    const [filterWork, setFilterWork] = useState([])

    const handleActiveFilter = (activeItem) => {
        setActiveFilter(activeItem)
        setAnimateCard({ y: 100, opacity: 0 })

        if (activeItem === 'All') {
            setFilterWork(works)
        } else {
            setFilterWork(
                works.filter((work) => work.tags.includes(activeItem))
            )
        }

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 })
        }, 500)
    }

    useEffect(() => {
        const query = '*[_type == "works"]'
        client.fetch(query).then((data) => {
            setWorks(data)
            setFilterWork(data)
        })
    }, [])

    return (
        <WorkStyled>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(
                    (item, idx) => (
                        <div
                            key={idx}
                            onClick={handleActiveFilter.bind(null, item)}
                            className={`app__work-filter-item app__flex p-text ${
                                activeFilter === item ? 'item-active' : ''
                            }`}
                        >
                            {item}
                        </div>
                    )
                )}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork &&
                    filterWork.map((work, index) => (
                        <div className="app__work-item app__flex" key={index}>
                            <div className="app__work-img app__flex">
                                <img
                                    src={urlFor(work.imgUrl)}
                                    alt={work.name}
                                />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: 'easeInOut',
                                        staggerChildren: 0.5,
                                    }}
                                    className="app__work-hover app__flex"
                                >
                                    <a
                                        href={work.projectLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [0, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [0, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {work.description}
                                </p>
                                <div className="app__work-tag app__flex">
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </motion.div>
        </WorkStyled>
    )
}

export default AppWrap(MotionWrap(Work, 'app__work'), 'work', 'app__primarybg')
