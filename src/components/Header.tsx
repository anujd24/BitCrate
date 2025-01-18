import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'


export default function Header() {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
            <Link href={"/"} className="justify-self-start">
                <Logo className='text-Hot-Pink ~h-12/20'></Logo>
            </Link>
            <nav
                aria-label="Main"
                className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
            >
                <ul className=" text-white flex flex-wrap items-center justify-center gap-8">
                    <li>consoles</li>
                </ul>
            </nav>
            <div className='justify-self-end'>
                <ButtonLink href={""} icon="cart" color='purple' aria-label='Cart (1)'>
                    Cart (1)
                </ButtonLink>
            </div>
        </div>
    
    </header>
  )
}