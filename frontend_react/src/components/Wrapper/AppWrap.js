//**  Higher Order Component

import React from 'react'
import NavigationDots from './NavigationDots'
import SocialMedia from './SocialMedia'

const AppWrap = (Component, idName, classNames) => () => {
    return (
        <div
            id={idName}
            className={`app__container ${classNames}`}
            style={{ position: 'relative' }}
        >
            <SocialMedia />
            <div className={`${classNames}`}>
                <Component />

                <div className="copyright">
                    <p className="p-text">@2020 MICAEL</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap
