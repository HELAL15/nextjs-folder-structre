import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Header from '@/components/layout/Header';

import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ThemeProvider attribute='class'>
                <NextIntlClientProvider>
                    <Header />
                    {children}
                    <NextTopLoader
                        color='oklch(55.4% .046 257.417)
'
                        height={2}
                    />
                </NextIntlClientProvider>
            </ThemeProvider>
        </>
    );
};

export default AppProvider;
