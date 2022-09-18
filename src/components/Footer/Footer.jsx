import { FooterWrap } from './FooterStyles'

export function Footer() {
    return (
        <>
            <FooterWrap>
                <div className="container">
                    <div className="links">
                        <a href="/about">About</a>
                        <a href="/team">Meet The Team</a>
                        <a href="/terms">Terms and Conditions</a>
                    </div>
                    <div className='line'/>
                    <p className="copyright">
                        © Copyright 2022 - Developed by Fannen. All right
                        reserved.
                    </p>
                </div>
            </FooterWrap>
        </>
    )
}
