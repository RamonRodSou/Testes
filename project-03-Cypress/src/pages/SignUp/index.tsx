import React, { FormEvent } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  function handleSubmit (event : FormEvent) {
    event.preventDefault()

    navigate('/dashboard')
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input placeholder='Digite seu nome' />
        <input placeholder='Digite seu email' />
        <input placeholder='Digite sua senha' />
        <button>Sign Up</button>
        <Link to="/">Já tem cadastro? Clique aqui!</Link>
      </form>
    </div>
  )
}

export default SignUp