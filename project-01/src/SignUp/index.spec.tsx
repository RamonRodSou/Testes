import { fireEvent, render, screen } from "@testing-library/react"
import SignUp from "."
import { vi } from "vitest"

const navigateMock = vi.fn()

describe("Testa o componente SignUp", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate: () => {
            return navigateMock
        },
    }))

    test("Devem haver 3 inputs na minha tela", async () => {
        render(<SignUp />)
        const inputs = await screen.findAllByRole("textbox")
        expect(inputs).toHaveLength(3)
    })

    test("Deve haver um input para nome, email e senha", async () => { 
        render(<SignUp />)
        const inputName = await screen.findByPlaceholderText(/Digite seu nome/i)
        const inputEmail = await screen.findByPlaceholderText(/Digite seu email/i)
        const inputSenha = await screen.findByPlaceholderText(/Digite sua senha/i)

        expect(inputName).toBeInTheDocument
        expect(inputEmail).toBeInTheDocument
        expect(inputSenha).toBeInTheDocument
        
    })
    
    test("Deve haver um button na tela", async () => {
        render(<SignUp />)
        const button = await screen.findByRole("button")
        expect(button).toHaveTextContent(/Sign up/i)
    })

    test("Deve haver um título 'Cadastre-se'", async () => {
        render(<SignUp />)
        const title = await screen.findByRole("heading", {
            level: 2, // do tipo h1 - level: 2 =  h2
            }
        )
        expect(title).toHaveTextContent(/Cadastre-se/i)
    })
 
    test("Deve navegar para página Dashboard", async () => {
        render(<SignUp />)
        const button = await screen.findByRole("button")
        fireEvent.click(button)
        expect(navigateMock).toHaveBeenCalledTimes(1)

    })
}) 