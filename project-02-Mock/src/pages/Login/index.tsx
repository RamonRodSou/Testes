import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate('/dashboard')
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <input type='text' placeholder='Insira Email' />
                <input type='text' placeholder='Insira Senha' />
                <button>Login</button>
                <Link to="sign-up">Não tem cadastro? Clique aqui</Link>
            </form>

        </div>
    )
}

export default Login