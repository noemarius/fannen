import styled from 'styled-components'
import { device } from './Device'

export function Footer() {
    // Styled Components
    const FooterContainer = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: auto;
    `

    const Line = styled.div`
        background-color: black;
        height: 1px;
        margin-bottom: 8px;
        width: 100%;
    `

    const SocialContainer = styled.div`
        align-items: center;
        display: flex;
        gap: 20px;
        justify-content: space-between;
    `

    const Link = styled.a`
        &:hover {
            filter: brightness(1.25);
            transform: scale(1.05);
        }
    `

    const Copyright = styled.p`
        color: black;
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 12px;

        @media ${device.tablet} {
            font-size: 16px;
        }
    `

    // Render
    return (
        <>
            <FooterContainer>
                <Line />
                <SocialContainer>
                    <Link>Terms and conditons</Link>
                    <Link>Contact</Link>
                    <Link>Meet the Team</Link>
                </SocialContainer>
                <Copyright>
                    © Copyright 2022 - Developed by Fannen. All right reserved.
                </Copyright>
            </FooterContainer>
        </>
    )
}
