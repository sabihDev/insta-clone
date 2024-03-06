import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import styled from 'styled-components';

import {
  RiHome2Line,
  RiMessengerLine,
  RiCompass3Line,
  RiHeartLine,
  RiUserLine,
} from "react-icons/ri";
import styles from "@/app/ui/Sidebar/Sidebar.module.css";
import InstagramPost from "../Post/index.jsx";

const Sidebar = ({ isDarkMode }) => {
  return (
    <>
      <div className="content">
        <aside
          className={`${styles.sidebar} ${isDarkMode ? "dark-mode" : "light-mode"
            }`}
        >
          <div className={styles.sidebarContent}>
            <ul className={styles.sidebarNav}>
              <li className={` ${styles.active}`}>
                <Link href="/">
                  <RiHome2Line />
                  <span>Home</span>
                </Link>
              </li>
              <li className={` ${styles.search}`}>
                <Link href="/">
                  <IoSearch />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link href="/explore">
                  <RiCompass3Line />
                  <span>Explore</span>
                </Link>
              </li>
              <li>
                <Link href="/explore">
                  <BiSolidMoviePlay />
                  <span>Reels</span>
                </Link>
              </li>
              <li>
                <Link href="/explore">
                  <RiMessengerLine />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link href="/notifications">
                  <RiHeartLine />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link href="/notifications">
                  <MdOutlineAddBox />
                  <span>Create</span>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <RiUserLine />
                  <span>Profile</span>
                </Link>
              </li>
              {/* Add more sidebar items as needed */}
            </ul>
          </div>
        </aside>
        <div className="main-content">
          {/* aaaaaaaaa
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" />
          <img src="https://picsum.photos/400" alt="" /> */}
          {/* Your main content goes here */}
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />

        </div>
      </div>
    </>
  );
};

export default Sidebar;
