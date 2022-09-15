import Image from 'next/image'
import { HeaderWrap } from './HeaderStyles'

export function Header() {
    return (
        <>
            <HeaderWrap>
                <Image
                    id="logo"
                    src="/fannen.png"
                    width={80}
                    height={80}></Image>
                    {/* Later Dropdown */}
                    <p className='info'>About</p>
            </HeaderWrap>
        </>
    )
}
