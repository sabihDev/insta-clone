import styles from '@/ui/bottombar.module.css';
import Link from 'next/link';
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function Bottombar() {
    return (
        <div className={styles.bottombar}>
            <Link href="/"><GoHomeFill/></Link>
            <Link href="/explore"><FaRegCompass /></Link>
            <Link href="/reels"><BiSolidMoviePlay/></Link>
            <Link href="/create"><MdOutlineAddBox/></Link>
            <Link href="/messages"><PiMessengerLogoBold/></Link>
            <Link href="/profile"><CgProfile/></Link>
        </div>
    );
}

export default Bottombar;