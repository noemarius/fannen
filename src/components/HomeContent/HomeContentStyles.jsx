import styled from 'styled-components'

export const HomeContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h3 {
        color: black;
        font-size: 48px;
        font-weight: bold;
    }

    .boxWrap {
        width: 90%;

        .search {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 12px;

            .searchbar {
                border-radius: 20px 0px 0px 20px;
            }

            .submit {
                height: 42px;
                width: 80px;
                background-color: white;
                border: 1px solid black;
                border-radius: 0px 20px 20px 0px;
            }
        }
    }
`
