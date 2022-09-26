import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Layout } from '@/components/Layout'
import { Card } from '@/components/Card'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <Layout>
            <Container>
                <Logo height="250" width="250" />
                <Card>
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>
                    {/* Session Status */}
                    <AuthSessionStatus className="mb-4" status={status} />
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                className="block mt-1 w-full"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                            />

                            <InputError
                                messages={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button>Email Password Reset Link</Button>
                        </div>
                    </form>
                </Card>
            </Container>
        </Layout>
    )
}

export default ForgotPassword