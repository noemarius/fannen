import { DashboardContent } from '@/components/DashboardContent/DashboardContent'
import { Layout } from '@/components/Layouts/Layout'

export default function Dashboard() {
    return (
        <>
            <Layout pageTitle="Dashboard">
                <DashboardContent />
            </Layout>
        </>
    )
}
