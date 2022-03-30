import styled from 'styled-components'
import { flex } from '../../styles/mixins'

export default styled.div`
    &.app__about {
        display: flex;
        flex-direction: column;
        max-width: 100vw;
        min-height: 100vh;
        .app__profiles {
            width: 100%;
            ${flex('row', '', '', 'wrap')}
            margin-top:2rem;
        }
        .app__profile-item {
            ${flex('column')}
            width: 200px;
            margin: 1rem;
            img {
                width: 100%;
                border-radius: 20px;
            }
            @media screen and (max-width: 800px) {
                width: 190px;
                img {
                    border-radius: 10px;
                }
            }
        }
        .head-text {
            margin-top: 5rem;
        }
    }
`
