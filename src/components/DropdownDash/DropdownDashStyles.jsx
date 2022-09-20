import styled from 'styled-components'

export const DropdownDashStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    .menuTrigger {
        align-items: center;
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        height: 40px;
        justify-content: center;
    }

    .title {
        font-size: 24px;
    }

    .dropdownMenu {
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px 20px;
    }

    .active {
        opacity: 1;
        visibility: visible;
    }

    .inactive {
        opacity: 0;
        // position absolute so it doesn't take space when not visible
        position: absolute;
        visibility: hidden;
    }

    .listContainer {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }
    
`
