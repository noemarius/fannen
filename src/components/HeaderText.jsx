import { useAuth } from '@/hooks/auth'
export function HeaderTest() {
    const { user } = useAuth()
    if (user) {
        return (
            <>
                <p>Working</p>
            </>
        )
    } else {
        return (
            <>
                <p>not working</p>
            </>
        )
    }
}
