import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { FormEvent } from 'react'

const Login = () => {

    const navigate = useNavigate()

    function handleSubmit (event: FormEvent) {
        event.preventDefault()
        navigate('/dashboard')
    }


    return (
        <div className={styles.container}>
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Insira Email' />
                <input type='text' placeholder='Insira Senha' />
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login