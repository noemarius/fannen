import styled from 'styled-components'

export const FooterWrap = styled.div`
    background-color: #002b34;
    height: auto;
    width: 100%;
    position: absolute;
    bottom: 0px;

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
        width: 90vw;
    }

    .links {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
    }

`
