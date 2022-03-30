import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    height: 100vh;
    width: 80vw;
    ${flex('column')}
    >h2 {
        margin: 2rem 0;
    }
    > div {
        width: 100%;
        ${flex('row', 'space-between')}
        @media (max-width: 768px) {
            ${flex('column')}
        }
    }
    .app__footer-cards {
        width: 100%;
        ${flex('column')}
        @media (max-width: 768px) {
            flex-direction: row;
        }
        > div {
            flex: 1;
            margin-right: 1rem;
            margin-bottom: 1rem;
            &:last-child {
                margin-left: 1rem;
            }
            ${flex('column')}
            background-color: #f2f2f2;
            border-radius: 0.4rem;
            img {
                width: 30px;
            }
            a {
                color: ${({ theme }) => theme.color.secondary} !important;
            }
            @media screen and (min-width: 768px) {
                min-width: 200px;
                margin: 2rem 0;
                :last-child {
                    margin-left: 0;
                }
                padding: 1rem;
            }
            transition: all 0.3s ease-in-out;
            :hover {
                transform: scale(1.1);
                font-weight: bold;
            }
        }
    }
    .app__footer-form {
        min-width: 60vmin;
        max-width: 60%;
        border: 1px solid #cccc;
        padding: 1rem 2rem;
        border-radius: 0.4rem;
        height: 400px;
        ${flex('column', 'space-between')}
        input,textarea {
            outline: none;
            border: none;
            padding: 0.5rem 1rem;
            width: 100%;
            border-radius: 0.4rem;
            background-color: #ccc3;
            margin-top: 1rem;
            font: normal normal 500 1rem 'DM Sans' !important;
        }
        textarea {
            height: 170px;
        }
        button {
            margin-top: 2rem;
            padding: 1rem;
            background-color: ${({ theme }) => theme.color.secondary};
            color: ${({ theme }) => theme.color.primary};
            border-radius: 0.4rem;
            transition: all 0.3s ease-in-out;
            :hover {
                box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
                transform: scale(1.1);
            }
        }
    }
`
