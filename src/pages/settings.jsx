import { Layout } from "@/components/Layouts/Layout";
import { SettingsContent } from "@/components/SettingsContent/SettingsContent";

export default function Settings() {
    return(
        <>
        <Layout pageTitle="Settings">
            <SettingsContent/>
        </Layout>
        </>
    )
}