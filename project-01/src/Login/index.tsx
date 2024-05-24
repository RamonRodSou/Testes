import styles from './styles.module.scss'

const Login = () => {
    return (
        <div className={styles.container}>
            <h2>Sign In</h2>

            <form action="">
                <input type='text' placeholder='Insira Email' />
                <input type='text' placeholder='Insira Senha' />
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login