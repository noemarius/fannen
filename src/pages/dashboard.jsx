import { Layout } from '@/components/Layout'
import { useAuth } from '@/hooks/auth'

export default function Dashboard() {
    const user = useAuth()
    console.log(user)
    return (
        <>
            <Layout pageTitle="Dashboard">
            </Layout>
        </>
    )
}
