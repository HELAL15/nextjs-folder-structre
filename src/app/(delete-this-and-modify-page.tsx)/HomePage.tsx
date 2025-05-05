import { FC } from 'react';

import NavigationBar from '@/app/(delete-this-and-modify-page.tsx)/NavigationBar';

import { useTranslations } from 'next-intl';

const HomePage: FC = () => {
    const t = useTranslations();
    return (
        <>
            <NavigationBar />
            <main>{t('hello')}</main>
        </>
    );
};

export default HomePage;
