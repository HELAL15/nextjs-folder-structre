'use client';

import { navLinks } from '@/constants';

import NavLink from '../ui/NavLink';

const NavLinks = () => {
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </>
    );
};

export default NavLinks;
