import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "@/app/layout";

export default function Page() {
  return <>
    <RootLayout showSidebar={true}>
      <div className={styles.main}>Hello, Next.js!</div>
    </RootLayout>
  </>
}
