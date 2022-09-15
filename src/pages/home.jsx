import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import HomeContent from '@/components/HomeContent/HomeContent'
import { AppWrap } from '@/styles/appStyles'

export default function Home() {
    return (
        <>
            <AppWrap>
                <Header />
                <HomeContent />
                <Footer />
            </AppWrap>
        </>
    )
}
