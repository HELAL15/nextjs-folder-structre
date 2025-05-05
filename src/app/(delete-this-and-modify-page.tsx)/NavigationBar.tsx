import ThemeSwitch from '@/components/common/ThemeSwitch';

const NavigationBar = () => {
    return (
        <header className='flex w-full items-center justify-between gap-6 sm:justify-end sm:px-6'>
            <ThemeSwitch />
        </header>
    );
};

export default NavigationBar;
