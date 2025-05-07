'use client'; // uniquement si tu es dans un projet Next.js avec App Router

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        React.createElement('div', { className: 'relative inline-block text-left', ref: menuRef },
            React.createElement('button', {
                onClick: () => setIsOpen(!isOpen),
                className: 'px-6 py-2 bg-blue-700 text-white rounded-md shadow-sm hover:bg-blue-600 transition-all'
            }, 'Menu'),

            isOpen && React.createElement('div', {
                    className: 'absolute mt-2 right-0 w-40 bg-white border rounded-md shadow-lg z-10'
                },
                React.createElement(Link, {
                    href: '/login',
                    className: 'block px-4 py-2 hover:bg-gray-100 transition'
                }, 'Login'),
                React.createElement(Link, {
                    href: '/register',
                    className: 'block px-4 py-2 hover:bg-gray-100 transition'
                }, 'Register')
            )
        )
    );
}

export default DropdownMenu;