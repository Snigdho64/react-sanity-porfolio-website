import React from 'react'
import HeaderStyled from './Header.styled'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../components'
const Header = () => {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    }

    return (
        <HeaderStyled className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Miceal</h1>
                        </div>
                    </div>
                    <div className="tag-cmp">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Machine Learner</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map(
                    (circle, idx) => (
                        <div
                            className="circle-cmp app__flex"
                            key={`circle-${idx}`}
                        >
                            <img src={circle} alt="circle" />
                        </div>
                    )
                )}
            </motion.div>
        </HeaderStyled>
    )
}

export default AppWrap(
    MotionWrap(Header, 'app__home'),
    'home',
    'app__primarybg'
)
