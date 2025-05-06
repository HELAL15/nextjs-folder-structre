import Link from 'next/link';

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ThemeSwitch from '@/components/common/ThemeSwitch';

const Header = () => {
    const listLinks = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'about', href: '/about' },
        { id: 3, title: 'contact', href: '/contact' },
        { id: 4, title: 'login', href: '/login' }
    ];

    const links = listLinks.map((link) => {
        return (
            <li key={link.id}>
                <Link href={link.href}>{link.title}</Link>
            </li>
        );
    });

    return (
        <header className='bg-background text-foreground sticky top-0 z-50 py-4 antialiased'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Link href={'/'} className='text-xl md:text-2xl lg:text-3xl'>
                    nextjs folder-structure
                </Link>
                <nav>
                    <ul className='flex items-center gap-4'>{links}</ul>
                </nav>
                <div className='-items-center flex gap-6'>
                    <ThemeSwitch />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
