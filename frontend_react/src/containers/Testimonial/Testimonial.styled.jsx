import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    flex: 1;
    ${flex('row', 'space-around')}
    height:100vh;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    .app__testimonial-item {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        min-height: fit-content;
        max-height: max-content;
        width: 400px;
        :hover {
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
        }
        img {
            width: 100px;
        }
        > div {
            min-height: 200px;
            ${flex('column', 'space-between', 'flex-end')}
            p {
                font: italic 400 1.25rem 'DM Sans';
                margin-bottom: 1rem;
            }
            div {
                width: 100%;
                text-align: center;
                h5 {
                    text-align: right;
                }
            }
        }
        @media (max-width: 768px) {
            flex: 0.5;
            width: 300px;
        }
    }
    .app__testimonial-btns {
        gap: 2rem;
        div {
            background: ${({ theme }) => theme.color.primary};
            padding: 1rem;
            border-radius: 50%;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
            svg {
                font-size: 1.25rem;
            }
            :hover {
                background: ${({ theme }) => theme.color.secondary};
                transform: scale(1.1);
                svg {
                    color: #fff;
                }
            }
        }
        @media (min-width: 768px) {
            position: absolute;
            bottom: 25%;
            left: 15%;
        }
    }
    .app__testimonials-brands {
        width: 80%;
        flex-wrap: wrap;
        margin-top: 2rem;
        div {
            width: 150px;
            margin: 1.5rem;
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                filter: grayscale(1);
                :hover {
                    filter: grayscale(0);
                }
            }
            @media (max-width: 768px) {
                margin: 0rem;
                img {
                    width: 100px;
                }
            }
        }
    }
`
