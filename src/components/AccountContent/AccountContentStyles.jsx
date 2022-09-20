import styled from 'styled-components'

export const AccountContentWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;

    img {
        height: 24px;
        width: 24px;
    }

    .title {
        font-size: 32px;
        text-align: center;
    }

    .button {
        align-items: center;
        background-color: #39B7FF;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        height: 32px;
        justify-content: center;
        margin-top: 8px;
        width: 120px;
    }

    .button:hover {
        transform: scale(1.05);
    }

    .userContainer {
        align-items: center;
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        padding: 16px 0px;
        width: 100%;
    }

    .content {
        align-items: center;
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        padding: 12px 0px;
        width: 100%;
    }

    .leftContainer {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;
    }

    .contentContainer {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 0px 20px;
        width: 100%;
    }

    .pContainer {
        align-items: left;
        display: flex;
        width: 100%;
        padding-left: 12px;
    }

`
