import Link from 'next/link';
import React, { MutableRefObject, useContext, useEffect, useRef } from 'react';

import Logo from './Logo';
import Dropdown from './Dropdown';
import PcMenuItems from './PcMenuItems';
import NavbarBurger from './NavbarBurger';
import PhoneMenuItems from './PhoneMenuItems';
import { languageOptions } from '@/constants/data';
import { LanguageContext, LanguageProviderType } from '@/context/LanguageContext';

function Menu() {
    const sidebarRef = useRef() as MutableRefObject<HTMLInputElement>;
    const navbarMenuRef = useRef() as MutableRefObject<HTMLInputElement>;
    const { userLanguage, userLanguageChange, dictionary } = useContext<LanguageProviderType>(LanguageContext);

    const menuItems: string[] = [
        dictionary.homeText,
        dictionary.eventsText,
        dictionary.aboutText,
        dictionary.contactText
    ];

    const toggleMenuHandler = () => {
        navbarMenuRef.current.classList.toggle('hidden');
    }

    const changeLangHandler = (option: string) => {
        userLanguageChange(option);
    }

    useEffect(() => {
        if (userLanguage == 'fa') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'fa-IR';

            sidebarRef.current.classList.remove('left-0');
            sidebarRef.current.classList.add('right-0');
            sidebarRef.current.querySelector('.logo-holder')?.classList.remove('mr-auto');
            sidebarRef.current.querySelector('.logo-holder')?.classList.add('ml-auto');
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = userLanguage;

            sidebarRef.current.classList.add('left-0');
            sidebarRef.current.classList.remove('right-0');
            sidebarRef.current.querySelector('.logo-holder')?.classList.add('mr-auto');
            sidebarRef.current.querySelector('.logo-holder')?.classList.remove('ml-auto');
        }
    }, [userLanguage])

    return (
        <div>
            <nav className="px-4 py-4 flex items-center bg-white justify-between">
                <Link className="" href="/">
                    <Logo size={48} />
                </Link>
                <NavbarBurger toggleMenuHandler={toggleMenuHandler} />

                <PcMenuItems menuItems={menuItems} />

                <Dropdown
                    title={'Language'}
                    onChangeFunc={changeLangHandler}
                    options={Object.entries(languageOptions)}
                />
            </nav>
            <div className="navbar-menu relative z-50 hidden h-full" ref={navbarMenuRef}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenuHandler} />
                <nav className="fixed top-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto" ref={sidebarRef}>
                    <div className="flex items-center mb-8">
                        <Link className="logo-holder" href="/">
                            <Logo size={32} />
                        </Link>
                        <button className="navbar-close" onClick={toggleMenuHandler}>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <PhoneMenuItems menuItems={menuItems} />
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            Lorem.
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu