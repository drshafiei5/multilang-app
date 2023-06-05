import React from 'react';
import Image from 'next/image';
import multilangPic from '../public/multilang.png';

interface LogoProps {
    size: number;
}

function Logo(props: LogoProps) {
    const { size } = props;

    return (
        <Image
            width={size}
            height={size}
            src={multilangPic}
            alt="Picture of multi language"
        />
    )
}

export default Logo