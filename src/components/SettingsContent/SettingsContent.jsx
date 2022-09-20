import Link from 'next/link'
import { SettingsWrap } from './SettingsContentStyles'

export function SettingsContent() {
    return (
        <>
            <SettingsWrap>
                <div className="headContainer">
                    <h1 className="mt-4">Settings</h1>
                    <p className="mt-2">Account Information</p>
                    <div className="profileCard">
                        <div className="headContainer">
                            <p className="title">Login and Security</p>
                        </div>
                        <Link href="/editusername">
                            <div className="content">
                                <div className="leftContainer">
                                    <img src="/id-card.png" alt="" />
                                    <p>Username</p>
                                </div>
                                <img src="/next.png" alt="" />
                            </div>
                        </Link>
                        <Link href="/editemail">
                            <div className="content">
                                <div className="leftContainer">
                                    <img src="/email.png" alt="" />
                                    <p>Email</p>
                                </div>
                                <img src="/next.png" alt="" />
                            </div>
                        </Link>
                        <Link href="/editpassword">
                            <div className="content">
                                <div className="leftContainer">
                                    <img src="/padlock.png" alt="" />
                                    <p>Password</p>
                                </div>
                                <img src="/next.png" alt="" />
                            </div>
                        </Link>
                        <div className="headContainer">
                            <p className="title">Data and Permissions</p>
                        </div>
                        <Link href="">
                            <div className="content">
                                <div className="leftContainer">
                                    <img src="/location.png" alt="" />
                                    <p>Location</p>
                                </div>
                                <img src="/next.png" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </SettingsWrap>
        </>
    )
}
