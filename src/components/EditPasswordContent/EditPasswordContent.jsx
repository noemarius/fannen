import Label from '@/components/Label'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '../Button'
import { EditPasswordWrap } from '../EditPasswordContent/EditPasswordContentStyles'

export function EditPasswordContent() {
    const [password, setPassword] = useState('')

    return (
        <>
            <EditPasswordWrap>
                <div className="titleContainer">
                    <h1 className="mt-4">Edit Password</h1>
                </div>
                <div className="container">
                    <Label htmlFor="username">Current Password</Label>
                    <Input
                        id="old_password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoFocus
                    />
                    <Label htmlFor="username">New Password</Label>
                    <Input
                        id="new_password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoFocus
                    />
                    <div className="buttonWrap">
                        <Button className={'button'}>Update Password</Button>
                    </div>
                </div>
            </EditPasswordWrap>
        </>
    )
}
