import styled from 'styled-components'

export const EditUsernameWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 36px;
    }

    .container {
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        padding: 12px 12px;
        width: 100%;
    }

    .titleContainer {
        align-items: left;
        display: flex;
        width: 100%;
        margin-bottom: 48px;
    }

    .button {
        width: auto;
    }

    .buttonWrap {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 12px;
    }
`
