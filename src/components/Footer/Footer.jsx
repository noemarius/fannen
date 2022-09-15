import { FooterWrap } from './FooterStyles'

export function Footer() {
    return (
        <>
            <FooterWrap>
                <div className="container">
                    <div className="links">
                        <a href="">Terms and Conditions</a>
                        <a href="">Meet The Team</a>
                        <a href="">About</a>
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
