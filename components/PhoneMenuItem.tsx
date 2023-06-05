import React from 'react';
import Link from 'next/link';

function PhoneMenuItem({ title }: { title: string }) {
    return (
        <li className="mb-1">
            <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                {title}
            </Link>
        </li>
    )
}

export default PhoneMenuItem