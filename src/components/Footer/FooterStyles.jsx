import styled from 'styled-components'

export const FooterWrap = styled.div`
    background-color: #39B7FF;
    height: auto;
    width: 100%;

    a {
        color: white;
        font-size: 12px;
    }

    .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
        margin-top: 8px;
    }
    
    .copyright {
        color: white;
        font-size: 12px;
        margin-bottom: 12px;
    }

    .line {
        background-color: white;
        height: 1px;
        width: 90%;
    }

    .links {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
    }

`
