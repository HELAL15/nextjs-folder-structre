import Link from 'next/link';

import HomePage from '@/app/(delete-this-and-modify-page.tsx)/HomePage';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <>
            <HomePage />
            <Link href={'/about'}>fff</Link>
        </>
    );
};

export default Page;
