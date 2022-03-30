import styled from 'styled-components'
import {  flex } from '../../styles/mixins'

export default styled.nav`
    ${flex('', 'space-between')}
    padding:1rem 2rem;
    background: rgba(225, 225, 225, 0.25);
    backdrop-filter: blur(4px);
    position: fixed;
    width: 100%;
    z-index: 10;
    > div {
        ${flex()}
        img {
            width: 15vmax;
            height: 5vmax;
        }
    }
    > ul {
        flex: 0.75;
        ${flex('row', 'space-evenly')};
        li {
            cursor: pointer;
            ${flex('column')}
            div {
                width: 5px;
                height: 5px;
                background: transparent;
                border-radius: 50%;
                margin-bottom: 5px;
                transition: all 0.3s linear;
            }
            a {
                color: ${({ theme }) => theme.color.gray};
                text-transform: uppercase;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
                :hover {
                    color: ${({ theme }) => theme.color.secondary};
                    /* text-decoration: underline; */
                }
            }
            :hover {
                div {
                    background: ${({ theme }) => theme.color.secondary};
                }
            }
        }
        @media screen and (max-width: 900px) {
            display: none;
        }
    }

    .app__navbar-menu {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;
        ${flex()}
        z-index:10;
        > svg {
            background-color: ${({ theme }) => theme.color.secondary};
            width: 80%;
            height: 80%;
            border-radius: 50%;
            padding: 0.1rem;
            color: ${({ theme }) => theme.color.white};
            &:hover {
                transform: scale(1.1);
            }
        }
        > div {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 1000;
            padding: 1rem;
            width: 80%;
            height: 100vh;
            ${flex('column')}
            background: url('../../assets/bgWhite.png');
            background-color: ${({ theme }) => theme.color.white};
            background-size: cover;
            background-position: center;
            background-repeat: repeat;
            box-shadow: 0px 0px 20px 1px rgba(168, 168, 168, 0.15);
            svg {
                width: 35px;
                height: 35px;
                color: ${({ theme }) => theme.color.secondary};
                margin: 0.5rem 1rem;
                position: absolute;
                top: 1rem;
                right: 1rem;
                z-index: 1000000;
                cursor: pointer;
                :hover {
                    transform: scale(1.1);
                    color: tomato;
                }
            }
            ul {
                z-index: 1000;
                height: 100%;
                width: 100%;
                ${flex('column')}
                li {
                    margin: 1rem;
                    > div {
                        width: 5px;
                        height: 5px;
                        background: transparent;
                        border-radius: 50%;
                        margin-right: 5px;
                        transition: all 0.3s linear;
                    }
                    > a {
                        color: ${({ theme }) => theme.color.gray};
                        text-transform: uppercase;
                        transition: all 0.3s ease-in-out;
                        :hover {
                            font-weight: bold;
                            color: ${({ theme }) => theme.color.secondary};
                            /* text-decoration: underline; */
                        }
                    }
                    :hover {
                        div {
                            background: ${({ theme }) => theme.color.secondary};
                        }
                    }
                }
            }
        }
        @media screen and (min-width: 900px) {
            display: none;
        }
    }
`
