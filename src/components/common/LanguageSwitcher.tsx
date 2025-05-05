'use client';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import Cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { useTopLoader } from 'nextjs-toploader';

const LangSwitcher = () => {
    const router = useRouter();
    const path = usePathname();
    const loader = useTopLoader();
    const locale = useLocale();
    const setLocale = (locale: string) => {
        Cookies.set('locale', locale, { path: '/' });
        router.push(path);
        loader.start();
        router.refresh();
    };

    return (
        <>
            {locale === 'ar' ? (
                <button
                    className='flex items-center gap-1 text-base'
                    onClick={() => {
                        setLocale('en');
                    }}>
                    english
                    {/* <AiOutlineGlobal className='text-2xl' /> */}
                </button>
            ) : (
                <button
                    className='flex items-center gap-1 text-base'
                    onClick={() => {
                        setLocale('ar');
                    }}>
                    العربية
                    {/* <AiOutlineGlobal className='text-2xl' /> */}
                </button>
            )}
        </>
    );
};

export default LangSwitcher;
