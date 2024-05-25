import { fireEvent, render, screen } from "@testing-library/react"
import Login from "."
import { vi } from 'vitest';

const navigateMock = vi.fn()



describe("Testa o componente de Login", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate: () => {
            return navigateMock
        },
    }))


    test("Deve haver um título escrito 'Sign In'", async () => {
        render(<Login />)
        const title = await screen.findByRole("heading", {
            name: /Sign In/i
        })
        expect(title).toBeInTheDocument()
    })


    test("Devem haver dois inputs", async () => {
        render(<Login />)
        const input = await screen.findAllByRole("textbox")
        expect(input).toHaveLength(2)
    })

    test("Deve haver um button", async () => {

        render(<Login />)
        const button = await screen.findByRole("button")
        expect(button.textContent).toBe("Login")

    })

    test("Deve haver input para e-mail", async () => {
        render(<Login />)
        const inputEmail = await screen.findAllByPlaceholderText("Insira Email")
        expect(inputEmail).toBeInTheDocument
    })

    test("Deve haver input para senha", async() => {
        render(<Login />)
        const inputSenha = await screen.findAllByPlaceholderText("Insira Senha")
        expect(inputSenha).toBeInTheDocument
    })

    test("Deve ser movido para outro tela depois do click no btn", async() => {
        render(<Login />)
        const button = await screen.findByRole("button")
        fireEvent.click(button)
        expect(navigateMock).toHaveBeenCalledTimes(1)

    })
})