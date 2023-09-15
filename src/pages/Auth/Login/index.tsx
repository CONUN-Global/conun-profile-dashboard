import styles from './style.module.scss'

const Login = () => {
  return (
    <div className={styles.profileLogin}>
      <div className={styles.backgroundRectangle} />

      <div className={styles.errorMessage}>
        Your email or password is incorrect. Please re-enter.
      </div>

      <label className={styles.emailLabel}>Email</label>
      <div className={styles.emailInputContainer}>
        <input
          type='email'
          placeholder='Enter your email'
          className={styles.inputField}
        />
      </div>

      <label className={styles.passwordLabel}>Password</label>
      <div className={styles.passwordInputContainer}>
        <input
          type='password'
          placeholder='Enter your password'
          className={styles.inputField}
        />
      </div>

      <button className={styles.loginButton}>Log in</button>

      <div className={styles.header}>CONUN profile</div>
    </div>
  )
}

export default Login
