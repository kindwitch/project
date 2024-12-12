import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="bg-blue-900 py-4 px-8 flex justify-between">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Project</div>
            </Link>
          </div>
        </div>
        <div className="flex items-center font-bold">
          <Link href="/project">
            <div className="text-lg text-white">project</div>
          </Link>
        </div>
        <div className="flex items-center font-bold">
          <Link href="/contact">
            <div className="text-lg text-white">contact</div>
          </Link>
        </div>
        <div className="flex items-center font-bold">
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <Link
                href="/profile"
                className="text-gray-300 hover:text-white mr-4"
              >
                Profile
              </Link>
              <div className="text-gray-300 hover:text-white mr-4">
                <UserButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
