import React from 'react'
import dynamic from 'next/dynamic';
const PcMenuItem = dynamic(() => import('./PcMenuItem'), { ssr: false });


interface PcMenuItemsProps {
    menuItems: string[];
}



function PcMenuItems(props: PcMenuItemsProps) {
    const { menuItems } = props;

    return (
        <ul className="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {
                menuItems?.length &&
                menuItems.map((item, idx) => (
                    <PcMenuItem key={idx} title={item} />
                ))
            }
        </ul>
    )
}

export default PcMenuItems