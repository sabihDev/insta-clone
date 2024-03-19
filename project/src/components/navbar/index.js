import styles from '@/ui/navbar.module.css';
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/">Instagram</Link>
            <div className={styles.right}>
                <input type="search" name="" id="" placeholder='Search'/>
                <FaRegHeart />
            </div>
        </div>
    );
}

export default Navbar;