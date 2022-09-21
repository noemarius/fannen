import HomeContent from '@/components/HomeContent/HomeContent'
import { Layout } from '@/components/Layouts/Layout'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Layout pageTitle="Home">
                <HomeContent />
            </Layout>
        </>
    )
}
