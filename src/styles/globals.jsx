import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    outline: 1px solid black !important;
}

body {
    background-color: rgb(211, 211, 211);
    width: 100%;
    display: flex; 
    flex-direction: column; 
    min-height: 100vh;
}
`

//     * {
//     box-sizing: border-box;
//     outline: 1px solid black !important;
// }
