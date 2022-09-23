import { DashboardContent } from '@/components/DashboardContent/DashboardContent'
import { Layout } from '@/components/Layout'
import { useAuth } from '@/hooks/auth'

export default function Dashboard() {
    const user = useAuth()
    return (
        <>
            <Layout pageTitle="Dashboard">
                <DashboardContent />
            </Layout>
        </>
    )
}
