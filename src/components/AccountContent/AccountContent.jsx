import Image from 'next/image'
import Link from 'next/link'
import { AccountContentWrap } from './AccountContentStyles'

export function AccountContent() {
    return (
        <>
            <AccountContentWrap>
                <div className="userContainer">
                    <Image src="/user.png" height={80} width={80} />
                    <h1 className="title">Username</h1>
                    <p>Email@here.com</p>
                    <div className="button">
                        <Link href="/settings">Edit Profile</Link>
                    </div>
                </div>
                <div className="pContainer">
                    <p>Content</p>
                </div>
                <div className="content">
                    <Link href="">
                        <div className="contentContainer">
                            <div className="leftContainer">
                                <img src="/heart.png" />
                                <p>Favorites</p>
                            </div>
                            <img src="/next.png" alt="" />
                        </div>
                    </Link>
                    <Link href="">
                        <div className="contentContainer">
                            <div className="leftContainer">
                                <img src="/heart.png" />
                                <p>Something</p>
                            </div>
                            <img src="/next.png" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="pContainer">
                    <p>Preferences</p>
                </div>
                <div className="content">
                    <Link href="">
                        <div className="contentContainer">
                            <div className="leftContainer">
                                <img src="/language.png" />
                                <p>Language</p>
                            </div>
                            <img src="/next.png" alt="" />
                        </div>
                    </Link>
                    <Link href="">
                        <div className="contentContainer">
                            <div className="leftContainer">
                                <img src="/night-mode.png" />
                                <p>Dark Mode</p>
                            </div>
                            <img src="/next.png" alt="" />
                        </div>
                    </Link>
                </div>
            </AccountContentWrap>
        </>
    )
}
