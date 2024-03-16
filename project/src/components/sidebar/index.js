"use client";
import styles from "@/ui/sidebar.module.css";

// icons
import { GoHomeFill, GoMoon } from "react-icons/go";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { FaRegCompass, FaBars, FaInstagram } from "react-icons/fa6";
import { BiSolidMoviePlay, BiSolidMessageAltError } from "react-icons/bi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { GrImage } from "react-icons/gr";
import { LiaBookmark } from "react-icons/lia";
import { BsThreads } from "react-icons/bs";
import { useState } from "react";

export default function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropDown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <div className={styles.sidebar}>
            <div className={styles.flex}><span><FaInstagram /></span><a className={styles.logo} href="/">Instagram</a></div>
            <div className={styles.flexBetween}>
                <ul className={styles.links}>
                    <li>
                        <span>
                            <GoHomeFill />
                        </span>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <span>
                            <FaSearch />
                        </span>
                        <a href="/search">Search</a>
                    </li>
                    <li>
                        <span>
                            <FaRegCompass />
                        </span>
                        <a href="/explore">Explore</a>
                    </li>
                    <li>
                        <span>
                            <BiSolidMoviePlay />
                        </span>
                        <a href="/reels">Reels</a>
                    </li>
                    <li>
                        <span>
                            <PiMessengerLogoBold />
                        </span>
                        <a href="/messages">Messages</a>
                    </li>

                    <li>
                        <span>
                            <FaRegHeart />
                        </span>
                        <a href="/notifications">Notifications</a>
                    </li>

                    <li>
                        <span>
                            <MdOutlineAddBox />
                        </span>
                        <a href="/create">Create</a>
                    </li>

                    <li>
                        <span>
                            <CgProfile />
                        </span>
                        <a href="/profile">Profile</a>
                    </li>
                </ul>

                <div className="dropdownButton">
                    <div className={styles.row} onClick={toggleDropDown}>
                        <span>
                            <FaBars />
                        </span>
                        <div>More</div>
                    </div>
                    <div className={styles.dropdown}>
                        <ul
                            className={` ${isDropdownOpen ? `${styles.dropdownContent} ` : "hidden"
                                }`}
                        >
                            <li className="dropdownLink">
                                <span>
                                    <VscSettingsGear />
                                </span>
                                Settings
                            </li>
                            <li className="dropdownLink">
                                <span>
                                    <GrImage />
                                </span>
                                Your activity
                            </li>
                            <li className="dropdownLink">
                                <span>
                                    <LiaBookmark />
                                </span>
                                Saved
                            </li>
                            <li className="dropdownLink">
                                <span>
                                    <GoMoon />
                                </span>
                                Switch appearance
                            </li>
                            <li className="dropdownLink">
                                <span>
                                    <BiSolidMessageAltError />
                                </span>
                                Report a problem
                            </li>
                            <div className="hr"></div>
                            <li className="dropdownLink">
                                <span>
                                    <BsThreads />
                                </span>
                                Threads
                            </li>
                            <div className="hr"></div>
                            <li className="dropdownLink">Switch accounts</li>
                            <li className="dropdownLink">Log out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
