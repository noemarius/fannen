import { LoginWrap } from './LoginContentStyles'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card } from '../Card'

export function LoginContent() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <LoginWrap>
                <div className='mainContainer'>
                    <Card>
                        <div className="container">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/fannen.png"
                                        height={250}
                                        width={250}
                                    />
                                </a>
                            </Link>
                        </div>

                        {/* TODO Ask Jade what this does */}
                        {/* Session Status
                <AuthSessionStatus className="mb-4" status={status} /> */}

                        <form onSubmit={submitForm}>
                            {/* Email */}
                            <div className="mt-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                    autoFocus
                                />
                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            {/* Password */}
                            <div className="mt-4">
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
                                    autoComplete="current-password"
                                />

                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            {/* Remember Me */}
                            <div className="block mt-4">
                                <label
                                    htmlFor="remember_me"
                                    className="inline-flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        onChange={event =>
                                            setShouldRemember(
                                                event.target.checked,
                                            )
                                        }
                                    />

                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link href="/forgot-password">
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                        Forgot your password?
                                    </a>
                                </Link>

                                <Button className="ml-3">Login</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </LoginWrap>
            <style jsx>{`
                .mainContainer {
                    align-items: center;
                    justify-content: center;
                    display:flex;
                    width: 100%;

                }
                `}</style>
        </>
    )
}
