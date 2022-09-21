import Label from '@/components/Label'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '../Button'
import { EditUsernameWrap } from '../EditUsernameContent/EditUsernameStyles'

export function EditUsernameContent() {
    const [username, setUsername] = useState('')

    return (
        <>
            <EditUsernameWrap>
                <div className="titleContainer">
                    <h1 className="mt-4">Edit Username</h1>
                </div>
                <div className="container">
                    <Label htmlFor="username">New Username</Label>
                    <Input
                        id="username"
                        type="text"
                        value={username}
                        className="block mt-1 w-full"
                        onChange={event => setUsername(event.target.value)}
                        required
                        autoFocus
                    />
                    <div className="buttonWrap">
                        <Button className={'button'}>Update Username</Button>
                    </div>
                </div>
            </EditUsernameWrap>
        </>
    )
}
