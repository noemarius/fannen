import { EditUser } from '@/components/EditUser'
import { Layout } from '@/components/Layouts/Layout'

export default function EditEmail() {
    return (
        <>
            <Layout>
                <EditUser id="Username" type="text"/>
            </Layout>
        </>
    )
}