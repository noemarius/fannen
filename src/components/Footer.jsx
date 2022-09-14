import styled from 'styled-components'
import Image from 'next/image'

const Copyright = styled.p`
    color: black;
    margin-top: 20px;
`

const FooterContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
`

const Line = styled.div`
    background-color: black;
    height: 1px;
    margin-top: 4px;
    width: 100%;
`

const Link = styled.a`
    &:hover {
        filter: brightness(1.25);
        transform: scale(1.05);
    }
`

const SocialContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
`

export function Footer() {
    return (
        <>
            <FooterContainer>
                <SocialContainer>
                    <Link>About us</Link>
                    <Link>About us</Link>
                    <Link>About us</Link>
                    <Link>About us</Link>
                </SocialContainer>
                <Line />
                <Copyright>
                    © Copyright 2022 - Developed by Fannen. All right reserved.
                </Copyright>
            </FooterContainer>
        </>
    )
}
