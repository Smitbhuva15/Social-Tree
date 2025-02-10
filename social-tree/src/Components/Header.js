import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 text-purple-700">
                        {/* <FontAwesomeIcon icon={faLink} className="text-blue-500" /> */}
                        <span className="font-bold">SocialTree</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>

                <nav className="flex items-center gap-4 text-sm text-slate-500">
                    <Link href={'/login'}>Sign In</Link>
                    <Link href={'/login'}>Create Account</Link>
                </nav>
            </div>
        </header>
    )
}
