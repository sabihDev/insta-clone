// Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '@/app/ui/Navbar/Navbar.module.css';

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
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                            onClick={toggleDarkMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
