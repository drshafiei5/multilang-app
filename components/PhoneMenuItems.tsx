import React from 'react'
import dynamic from 'next/dynamic';
const PhoneMenuItem = dynamic(() => import('./PhoneMenuItem'), { ssr: false });


interface PhoneMenuItemsProps {
    menuItems: string[];
}


function PhoneMenuItems(props: PhoneMenuItemsProps) {
    const { menuItems } = props;

    return (
        <ul>
            {
                menuItems?.length &&
                menuItems.map((item, idx) => (
                    <PhoneMenuItem key={idx} title={item} />
                ))
            }
        </ul>
    )
}

export default PhoneMenuItems