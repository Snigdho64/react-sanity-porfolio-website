import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    position: relative;
    background: url('../../assets/bgIMG.png');
    background-size: cover;
    background-position: center;
    .app__wraper {
        padding: 0;
        .copyright {
            display: none;
        }
    }

    &.app__header {
        flex: 1;
        width: 100%;
        height: 100%;
        flex-direction: row;
        /* padding: 6rem 2rem 0; */

        @media screen and (max-width: 800px) {
            flex-direction: column;
        }

        @media screen and (max-width: 450px) {
            padding: 6rem 1rem 2rem;
        }

        .app__header-info {
            flex: 0.65;
            ${flex('column', 'flex-start', 'flex-start')}
            height:100%;
            width: 100%;
            padding-top: 2rem;
        }
        .app__header-badge {
            width: 100%;
            ${flex('column', 'flex-end', 'flex-end')}
            @media screen and (max-width: 800px) {
                flex-direction: row;
            }
            .badge-cmp,
            .tag-cmp {
                margin-right: 2rem;
                padding: 1rem 2rem;
                border: 1px solid #ffffff87;
                width: auto;
                border-radius: 15px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
            .tag-cmp {
                flex-direction: column;
                margin-top: 3rem;
                p {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: right;
                }
                span {
                    font-size: 2.5rem;
                }
                @media screen and (max-width: 1200px) {
                    justify-content: flex-start;
                    align-items: flex-start;
                }
            }
        }

        .app__header-circles {
            flex: 0.75;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            height: 100%;
            margin-left: 1rem;
            @media screen and (max-width: 800px) {
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding-right: 2rem;
            }

            > div {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: ${({ theme }) => theme.color.white};
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

                img {
                    width: 60%;
                    height: 60%;
                }
                &:nth-child(1) {
                    width: 100px;
                    height: 100px;
                }
                &:nth-child(2) {
                    margin: 1.75rem;
                    width: 150px;
                    height: 150px;
                }
                &:nth-child(3) {
                    width: 70px;
                    height: 70px;
                }

                @media screen and (max-width: 1200px) {
                    width: 100%;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-left: 0;
                    > div {
                        margin: 1rem;
                    }
                }
            }
        }
        .app__header-img {
            flex: 1;
            height: 100%;
            ${flex('row', 'flex-end', 'flex-end')}
            position:relative;
            z-index: 4;
            img {
                margin-top: 2rem;
                width: 100%;
                object-fit: contain;
                z-index: 1;
            }
            .overlay_circle {
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 0;
                width: 100%;
                height: 90%;
            }
            @media screen and (max-width: 1200px) {
                margin: 2rem 0;
            }
            @media screen and (max-width: 800px) {
                ${flex()}
                margin-top:-1rem;
                img {
                    width: 60%;
                    left: 0;
                }
            }
        }
    }
`
