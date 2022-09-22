import { AlignLeft } from '@/components/AlignLeft'
import Button from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { ContentButton } from '@/components/ContentButton'
import { EditUser } from '@/components/EditUser'
import { Layout } from '@/components/Layout'
import { Member } from '@/components/Member'
import { SearchBar } from '@/components/SearchBar'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'
import { UserDetails } from '@/components/UserDetails'
import { Identity } from '@mui/base'
import Image from 'next/image'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Logo } from '@/components/Logo'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/InputError'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { DropdownItem } from '@/components/DropdownItem'
import { Dropdown } from '@/components/Dropdown'
import { DropdownDash } from '@/components/DropdownDash'

export default function Test() {
    return (
        <>
            <Dropdown>
                <DropdownItem text="Test" link="/test"/>
            </Dropdown>
        </>
    )
}
