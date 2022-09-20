import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color: rgb(211, 211, 211);
    display: flex; 
    flex-direction: column; 
    font-family: 'Roboto', sans-serif;

}

// BUG DONT TOUCH
* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    // outline: 1px solid black !important;
}
`

//     * {
//     box-sizing: border-box;
//     outline: 1px solid black !important;
// }
