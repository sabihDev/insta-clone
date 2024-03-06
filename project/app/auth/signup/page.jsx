'use client';
import styles from '@/app/ui/Signup/signup.module.css'

const Signup = () => {
    return (
        <div className="bg">
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <h1 className={styles.h1}>Signup</h1>

                {/* <label className={styles.label} htmlhtmlFor="username">Username</label> */}
                <input className={styles.input} type="text" id="username" placeholder='Username' />
                {/* <label className={styles.label} htmlhtmlFor="email">Email</label> */}
                <input className={styles.input} type="email" id="email" placeholder='Email' />

                {/* <label className={styles.label} htmlhtmlFor="password">Password</label> */}
                <input className={styles.input} type="password" id="password" placeholder='Password' />

                <button className={styles.submit} type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Signup