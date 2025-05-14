'use client';

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import useRouteChange from '@/hooks/useRouteChange';

import NavLinks from '../common/NavLinks';
import ThemeSwitch from '../common/ThemeSwitch';
import { Button } from '../ui/Button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { FaBars } from 'react-icons/fa6';

const MobileNavSheet = () => {
    const { isOpen, setIsOpen } = useRouteChange();

    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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

                    <ul className='flex flex-col gap-4 px-6 text-2xl'>
                        <NavLinks />
                    </ul>
                    <SheetDescription></SheetDescription>

                    <SheetFooter>
                        <div className='flex items-center justify-center gap-2'>
                            <ThemeSwitch />
                            <LanguageSwitcher />
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileNavSheet;
