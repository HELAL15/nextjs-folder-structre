import Link from 'next/link';

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ThemeSwitch from '@/components/common/ThemeSwitch';

import { Button } from '../ui/Button';
import NavLink from '../ui/NavLink';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { FaBars } from 'react-icons/fa6';

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
                <NavLink href={link.href} title={link.title} />
            </li>
        );
    });

    return (
        <header className='bg-background text-foreground sticky top-0 z-50 py-4 antialiased'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Link href={'/'} className='text-xl md:text-2xl lg:text-3xl'>
                    HELAL
                </Link>
                <nav className='hidden lg:flex'>
                    <ul className='flex items-center gap-4'>{links}</ul>
                </nav>
                <div className='flex items-center gap-6'>
                    <LanguageSwitcher />
                    <div className='flex lg:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className='!bg-transparent !px-0' variant={'ghost'}>
                                    <i className='cursor-pointer text-xl'>
                                        <FaBars />
                                    </i>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>nextjs folder-structure</SheetTitle>
                                </SheetHeader>

                                <SheetFooter>
                                    <div className='flex items-center justify-center gap-2'>
                                        <ThemeSwitch />
                                        <LanguageSwitcher />
                                    </div>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className='hidden lg:flex'>
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
