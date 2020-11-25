import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font: 500 16px 'Roboto Slab', sans-serif;
        color: #333;
    }
`

export default GlobalStyle