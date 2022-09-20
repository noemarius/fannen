import { Card } from '@/components/Card'
import { Layout } from '@/components/Layouts/Layout'
import { LoginContent } from '@/components/LoginContent/LoginContent'
import { RegisterContent } from '@/components/RegisterContent/RegisterContent'

export default function test() {
    return (
        <>
            <Layout pageTitle="Test">
                <Card>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                </Card>
            </Layout>
            <style jsx>{`
                .test {
                    color: black;
                }
            `}</style>
        </>
    )
}
