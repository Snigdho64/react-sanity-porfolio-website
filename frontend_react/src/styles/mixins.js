import { css } from 'styled-components'

export const flex = (dir, justify, align, wrap) => css`
    display: flex;
    flex-direction: ${dir || 'row'};
    justify-content: ${justify || 'center'};
    align-items: ${align || 'center'};
    flex-wrap: ${wrap || 'nowrap'};
`

export const box_shadow = (blur, size, color) => css`
    box-shadow: 0px 0px ${blur || '5px'} ${size || '1px'} ${color || '#ccc'};
`
