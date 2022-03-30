import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    flex: 1;
    width: 100%;
    height: 100vh;
    flex-direction: column;

    .app__skills-container {
        width: 80vw;
        margin-top: 3rem;
        ${flex('row', 'space-between')}

        @media screen and (max-width: 600px) {
            width: 100%;
            flex-direction: column;
        }

        .app__skills-list {
            width: 60%;
            ${flex('row', 'space-around', 'center')}
            flex-wrap: wrap;
            overflow-y: auto;
            .app__skills-item {
                > div {
                    margin: 1rem;
                    padding: 0.4rem;
                    border-radius: 0.4rem;
                    flex-direction: column;
                    transition: all 0.3s ease-in-out;
                    background-color: #fff7;
                    :hover {
                        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
                    }
                    img {
                        width: 10vmin;
                        height: 10vmin;
                    }
                    p {
                        font-weight: bold;
                    }
                }
            }
        }

        .app__skills-exp {
            /* width: 100%; */
            flex: 0.5;
            ${flex('column', 'flex-start', 'flex-start')}
            margin-left:2rem;
            @media screen and (max-width: 800px) {
                margin-top: 2rem;
                margin-left: 0;
            }
            .app__skills-exp-item {
                width: 100%;
                ${flex('row', 'flex-start', 'flex-start')}
                margin:1rem 0;

                .app__skills-exp-year {
                    margin-right: 3rem;

                    p {
                        font-weight: 800;
                        color: var(--secondary-color);
                    }

                    @media screen and (max-width: 450px) {
                        margin-right: 1rem;
                    }
                }

                .app__skills-exp-work {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    cursor: pointer;
                    h4 {
                        font-weight: 500;
                    }

                    p {
                        font-weight: 400;
                        color: ${({ theme }) => theme.color.gray};
                        margin-top: 5px;
                    }
                }
                .skills-tooltip {
                    max-width: 300px !important;
                    background-color: var(--white-color) !important;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
                    border-radius: 5px !important;
                    padding: 1rem !important;
                    color: var(--gray-color) !important;
                    text-align: center !important;
                    line-height: 1.5 !important;
                    opacity: 1 !important;

                    @media screen and (min-width: 2000px) {
                        font-size: 1.75rem !important;
                        max-width: 500px !important;
                        line-height: 2 !important;
                    }
                }
            }
        }
    }
`
