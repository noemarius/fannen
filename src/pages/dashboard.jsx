import { Layout } from '@/components/Layouts/Layout'
import { DashboardContent } from '@/components/DashboardContent/TestDashboardContent'

export default function Dashboard() {
    return (
        <>
            <Layout pageTitle="Dashboard">
                <DashboardContent />
            </Layout>
        </>
    )
}
