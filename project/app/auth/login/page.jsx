import styles from '@/app/ui/Signup/signup.module.css'

const Login = () => {
    return (
        <div className="bg">
            <form className={styles.form} action="">
                <h1 className={styles.h1}>Login</h1>
                {/* <label className={styles.label} htmlFor="email">Email</label> */}
                <input className={styles.input} type="email" id="email" placeholder='Email' />

                {/* <label className={styles.label} htmlFor="password">Password</label> */}
                <input className={styles.input} type="password" id="password" placeholder='Password' />

                <button className={styles.submit} type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login