import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../components'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import SkillsStyled from './Skills.styled'

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'
        const query = '*[_type =="experiences"]'
        client.fetch(skillsQuery).then((data) => {
            setSkills(data)
        })
        client.fetch(query).then((data) => {
            setExperiences(data)
        })
    }, [])

    return (
        <SkillsStyled>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill, idx) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name + idx}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                                <p className="p-text">{skill.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experiences.map((experience, idx) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-exp-item"
                            key={experience.year + idx}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work, idx) => (
                                    <div key={experience.year + idx}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work app__flex"
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SkillsStyled>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
)
