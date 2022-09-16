import { Layout } from '@/components/Layouts/Layout'
import { DashboardContent } from '@/components/DashboardContent/DashboardContent'

export default function Dashboard() {
    return (
        <>
            <Layout pageTitle="Dashboard">
                <DashboardContent />
            </Layout>
        </>
    )
}
