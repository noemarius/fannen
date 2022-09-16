import styled from 'styled-components'

export const DropdownStyle = styled.div`
    .menuTrigger {
        background-color: white;
        border-radius: 50%;
        height: 40px;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 40px;
    }

    .dropdownMenu {
        position: absolute;
        top: 60px;
        right: 0px;
        left: 0px;
        background-color: white;
        padding: 10px 20px;
        width: 100vw;
    }

    .active {
        opacity: 1;
        visibility: visible;
        transform: translateY(20px);
        transition: 0.5s ease;
    }

    .inactive {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: 0.5s ease;
    }

    .listContainer {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`
