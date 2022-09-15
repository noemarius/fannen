import { HomeContentWrap } from './HomeContentStyles'

export default function HomeContent() {
    return (
        <>
            <HomeContentWrap>
                <h3>Fannen</h3>
                <div className="boxWrap">
                    <div className='search'>
                        <form method="post">
                            <input className="searchbar" type="text" name="" placeholder="Search for a theme" />
                            <input  className="submit" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </HomeContentWrap>
        </>
    )
}
