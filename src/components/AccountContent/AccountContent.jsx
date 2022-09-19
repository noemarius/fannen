import Image from 'next/image'
import { AccountContentWrap } from './AccountContentStyles'

export function AccountContent() {
    return (
        <>
            <AccountContentWrap>
                <div className="userContainer">
                    <Image src="/user.png" height={80} width={80}/>
                    <h1 className="title">Username</h1>
                    <p>Email@here.com</p>
                    <div className="button">
                        <a href="/settings">Edit Profile</a>
                    </div>
                </div>
                <div className="pContainer">
                    <p>Content</p>
                </div>
                <div className="content">
                    <a href="" className="contentContainer">
                        <div className="leftContainer">
                            <img src="/heart.png" />
                            <p>Favorites</p>
                        </div>
                        <img src="/next.png" alt="" />
                    </a>
                    <a href="" className="contentContainer">
                        <div className="leftContainer">
                            <img src="/heart.png" />
                            <p>Something</p>
                        </div>
                        <img src="/next.png" alt="" />
                    </a>
                </div>
                <div className="pContainer">
                    <p>Preferences</p>
                </div>
                <div className="content">
                    <a href="" className="contentContainer">
                        <div className="leftContainer">
                            <img src="/language.png" />
                            <p>Language</p>
                        </div>
                        <img src="/next.png" alt="" />
                    </a>
                    <a href="" className="contentContainer">
                        <div className="leftContainer">
                            <img src="/night-mode.png" />
                            <p>Dark Mode</p>
                        </div>
                        <img src="/next.png" alt="" />
                    </a>
                </div>
            </AccountContentWrap>
        </>
    )
}
