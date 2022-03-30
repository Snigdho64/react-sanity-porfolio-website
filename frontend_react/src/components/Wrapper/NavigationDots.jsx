import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div
            className="app__navigation"
            style={{
                position: 'absolute',
                right: '0rem',
                height: '100%',
                zIndex: 5,
            }}
        >
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <a
                    key={item}
                    className="app__navigation-dot"
                    href={`#${item}`}
                    style={active === item ? { background: '#313bac' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots
