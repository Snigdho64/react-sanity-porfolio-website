import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    flex: 1;
    max-width: 100vw;
    flex-direction: column;
    .app__work-filter {
        width: 80vw;
        ${flex('row', 'space-around', 'center', 'wrap')}
        margin:4rem 0 2rem;
        .app__work-filter-item {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            background-color: #fff;
            color: #000 !important;
            cursor: pointer;
            transition: all 0.3s ease;
            :hover {
                background-color: ${({ theme }) => theme.color.secondary};
                color: #fff !important;
            }
            &.item-active {
                background-color: ${({ theme }) => theme.color.secondary};
                color: #fff !important;
            }
        }
    }

    .app__work-portfolio {
        ${flex('', '', '', 'wrap')}
        .app__work-item {
            width: 270px;
            flex-direction: column;
            margin: 2rem;
            padding: 1rem;
            background-color: #fff;
            border-radius: 0.5rem;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            :hover {
                box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
            }
            .app__work-img {
                width: 100%;
                display: none;
                img {
                    border-radius: 0.5rem;
                    width: 100%;
                }
                .app__work-hover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 61.5%;
                    border-radius: 0.5rem 0.5rem 0 0;
                    transition: all 0.3s ease;
                    background-color: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    a {
                        ${flex()}
                    }
                    div {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: #fff;
                        margin: 1rem;
                        margin: 1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        svg {
                            width: 50%;
                            height: 50%;
                            color: ${({ theme }) => theme.color.white};
                        }
                    }
                }
            }

            .app__work-content {
                padding: 0.5rem;
                width: 100%;
                position: relative;
                flex-direction: column;
                background-color: #fff;
                h4 {
                    margin-top: 1rem;
                    line-height: 1.5;
                }
                .app__work-tag {
                    position: absolute;
                    padding: 0.5rem 1rem;
                    background-color: #fff;
                    top: -25px;
                }
            }
        }
    }
`
