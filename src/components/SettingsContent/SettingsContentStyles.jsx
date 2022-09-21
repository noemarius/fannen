import styled from 'styled-components'

export const SettingsWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 32px;
    }

    img {
        height: 24px;
        width: 24px;
    }

    .content {
        align-items: left;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0px 8px;
    }

    .leftContainer {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .headContainer {
        align-items: left;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .profileCard {
        align-items: center;
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;
        padding: 16px 16px;
        width: 100%;
    }

    .title {
        color: gray;
        font-size: 12px;
    }
`
