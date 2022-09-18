import { HomeContentWrap } from './HomeContentStyles'
import Image from 'next/image'

export default function HomeContent() {
    return (
        <>
            <HomeContentWrap>
                <Image src="/fannen.png" height={250} width={250} />
                <div className="boxWrap">
                    <div className="search">
                        <form method="post">
                            <input
                                className="searchbar"
                                type="text"
                                name=""
                                placeholder="Search for a theme"
                            />
                            <input
                                className="submit"
                                type="submit"
                                value="Search"
                            />
                        </form>
                    </div>
                </div>
            </HomeContentWrap>
        </>
    )
}
