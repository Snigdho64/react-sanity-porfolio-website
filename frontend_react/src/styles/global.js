import { createGlobalStyle } from 'styled-components'
import { flex } from './mixins'

export const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font :normal 400 1rem/1.2 'Roboto';
        min-height:100vh;
        *{
            margin: 0;
            padding:0;
            box-sizing: border-box;
            scroll-behavior:smooth;
        }
        li{
            list-style: none
        }
        a{
            text-decoration: none
        }
        button,input{
            outline: none;
            border: none
        }
        #root{
            min-height:100vh;
            /* ${flex()} */

    .app {
        background-color: ${({ theme: { color } }) => color.primary};
        font-family: ${({ theme: { font } }) => font.primary};
    }

    .app__whitebg {
        background-color: ${({ theme: { color } }) => color.white};
    }

    .app__primarybg {
        background-color: ${({ theme: { color } }) => color.primary};
    }

    .app__container {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: row;
    }

    .app__flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app__wrapper {
        flex: 1;
        width: 100%;
        flex-direction: column;
        padding: 4rem 2rem;

        @media screen and (max-width: 450px) {
            padding: 4rem 1rem 2rem;
        }
    }

    .copyright {
        width: 100%;
        padding: 2rem 0 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        p {
            text-transform: uppercase;
            color: ${({ theme: { color } }) => color.black};
        }
    }

    .head-text {
        font-size: 2.75rem;
        font-weight: 800;
        text-align: center;
        color: ${({ theme: { color } }) => color.black};
        text-transform: capitalize;

        span {
            color: ${({ theme: { color } }) => color.secondary};
        }

        @media screen and (min-width: 2000px) {
            font-size: 4rem;
        }

        @media screen and (max-width: 450px) {
            font-size: 2rem;
        }
    }

    .p-text {
        font-size: 0.8rem;
        text-align: left;
        color: ${({ theme: { color } }) => color.gray};
        line-height: 1.5;

        @media screen and (min-width: 2000px) {
            font-size: 1.75rem;
        }
    }

    .bold-text {
        font-size: 1rem;
        font-weight: 800;
        color: ${({ theme: { color } }) => color.black};
        text-align: left;

        @media screen and (min-width: 2000px) {
            font-size: 2rem;
        }

        @media screen and (max-width: 450px) {
            font-size: 0.9rem;
        }
    }

    .app__social {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;

        padding: 1rem;

        div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: ${({ theme: { color } }) => color.white};
            margin: 0.25rem 0;
            border: 1px solid var(--lightGray-color);

            display: flex;
            justify-content: center;
            align-items: center;

            transition: all 0.3s ease-in-out;

            svg {
                width: 15px;
                height: 15px;
                color: ${({ theme: { color } }) => color.gray};
            }

            &:hover {
                background-color: ${({ theme: { color } }) => color.secondary};
                border-color: ${({ theme: { color } }) => color.secondary};

                svg {
                    color: ${({ theme: { color } }) => color.white};
                }
            }

            @media screen and (min-width: 2000px) {
                width: 70px;
                height: 70px;

                margin: 0.5rem 0;

                svg {
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }

    .app__navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 1rem;

        .app__navigation-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #cbcbcb;
            margin: 0.5rem;

            transition: background-color 0.2s ease-in-out;

            &:hover {
                background-color: ${({ theme: { color } }) => color.secondary};
            }

            @media screen and (min-width: 2000px) {
                width: 20px;
                height: 20px;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .app__navigation,
        .app__social {
            display: none;
        }

        .copyright {
            padding: 2rem;
        }
    }    
        }
    }
`

export const theme = {
    font: {
        primary: 'DM Sans',
        secondary: 'Roboto',
    },
    color: {
        primary: '#edf2f8',
        secondary: '#313bac',
        black: '#030303',
        lightGray: '#e4e4e4',
        gray: '#6b7688',
        brown: '#46364a',
        white: '#ffffff',
    },
}
