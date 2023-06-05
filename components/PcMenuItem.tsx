import Link from 'next/link'
import React from 'react'

function PcMenuItem({ title }: { title: string }) {
    return (
        <>
            <li>
                <Link className="text-sm text-gray-400 hover:text-gray-500" href="">
                    {title}
                </Link>
            </li>
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>
        </>
    )
}

export default PcMenuItem