import { AlignLeft } from '@/components/AlignLeft'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { Logo } from '@/components/Logo'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { CheckBox } from '@mui/icons-material'

export default function Register() {
    const { user, register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [role, setRole] = useState('')
    const [errors, setErrors] = useState([])

    const handleChange = event => {
        console.log(event.target.value)
        setRole(event.target.value)
    }

    console.log(role)

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            role,
            setErrors,
        })
    }

    return (
        <>
            <Layout pageTitle="Register">
                <Container>
                    <Logo height="250" width="250" />
                    <Card gap="8px">
                        <form className="w-full" onSubmit={submitForm}>
                            {/* Name */}
                            <div className="mt-2">
                                <AlignLeft>
                                    <Label htmlFor="name">Name</Label>
                                </AlignLeft>
                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setName(event.target.value)
                                    }
                                    required
                                    autoFocus
                                />

                                <InputError
                                    messages={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="mt-2">
                                <AlignLeft>
                                    <Label htmlFor="email">Email</Label>
                                </AlignLeft>

                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            {/* Password */}
                            <div className="mt-2">
                                <Label htmlFor="password">Password</Label>

                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                    autoComplete="new-password"
                                />

                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mt-2">
                                <Label htmlFor="passwordConfirmation">
                                    Confirm Password
                                </Label>

                                <Input
                                    id="passwordConfirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setPasswordConfirmation(
                                            event.target.value,
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    messages={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            {/* Organizer */}
                            <div className="organizer" name="role">
                                <div>Are you a</div>
                                <select
                                    onChange={handleChange}
                                    value={role}
                                    name="role">
                                    <option value="User">User</option>
                                    <option value="Organizer">Organizer</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link href="/login">
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                        Already registered?
                                    </a>
                                </Link>

                                <Button className="ml-4">Register</Button>
                            </div>
                        </form>
                    </Card>
                </Container>
            </Layout>
            <style jsx>{`
                .organizer {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    margin-top: 20px;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}
