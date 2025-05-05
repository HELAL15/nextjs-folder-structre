import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ThemeProvider attribute='class'>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
                <NextTopLoader color='#fff' height={1} />
            </ThemeProvider>
        </>
    );
};

export default AppProvider;
