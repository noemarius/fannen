import { EditEmailWrap } from './EditEmailStyles'
import Label from '@/components/Label'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '../Button'

export function EditEmailContent() {
    const [email, setEmail] = useState('')

    return (
        <>
            <EditEmailWrap>
                <div className="titleContainer">
                    <h1 className="mt-4">Edit Email</h1>
                </div>
                <div className="container">
                    <Label htmlFor="username">New Email</Label>
                    <Input
                        id="username"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                    <div className="buttonWrap">
                        <Button className={'button'}>Update Email</Button>
                    </div>
                </div>
            </EditEmailWrap>
        </>
    )
}
