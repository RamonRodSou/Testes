import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"
import { render, screen } from "@testing-library/react"

describe("Testa o component Main Routes", () => {

    test("Deve renderizar a página login", async () => {

        render(
            <MemoryRouter initialEntries={["/"]}>
                <MainRoutes />
            </MemoryRouter>
        )
        const title = await screen.getByText(/Sign In/i)
        expect(title).toBeInTheDocument()
    });

    test("Deve renderizar a página de cadastro", async () => {

        render(
            <MemoryRouter initialEntries={["/sign-up"]}>
                <MainRoutes />
            </MemoryRouter>
        )
        const title = await screen.getByText(/Cadastre-se/i)
        expect(title).toBeInTheDocument()
    });

    test("Deve haver a palavra 'Cadastre-se' como titulo na página de cadastro ", async () => {

        render(
            <MemoryRouter initialEntries={["/sign-up"]}>
                <MainRoutes />
            </MemoryRouter>
        )
        const title =  await screen.findByRole('heading', {
            name: /Cadastre-se/i
        })
        expect(title).toBeInTheDocument()
    });



    test("Deve renderizar a página de dashboard", async () => {

        render(
            <MemoryRouter initialEntries={["/dashboard"]}>
                <MainRoutes />
            </MemoryRouter>
        )
        const title = await screen.getByText("Dashboard")
        expect(title).toBeInTheDocument()
    });

    
    test("Deve renderizar a página de erro", async () => {

        render(
            <MemoryRouter initialEntries={["/RotaDeErro"]}>
                <MainRoutes />
            </MemoryRouter>
        )
        const title = await screen.getByText("404 Page Not Found")
        expect(title).toBeInTheDocument()
    });
})