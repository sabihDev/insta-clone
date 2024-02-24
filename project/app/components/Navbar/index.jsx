// Navbar.js
import React from 'react';
import Link from 'next/link';
import  styles from '@/app/ui/Navbar/Navbar.module.css';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <nav className={`${styles.navbar} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        Instagram
                    </Link>
                </div>
                <div className={styles.menu}>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    {/* Add other menu items here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
