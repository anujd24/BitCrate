import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
            <Link href={"/"} className="justify-self-start"></Link>
            <nav>
                <ul>
                    <li>Boards</li>
                </ul>
            </nav>
            <div>
                <ButtonLink href={""} icon="cart" color='purple' aria-label='Cart (1)'>
                    Cart (1)
                </ButtonLink>
            </div>
        </div>
        Header
    </header>
  )
}