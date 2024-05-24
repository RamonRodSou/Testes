import { render, screen } from "@testing-library/react"
import App from "./App";

describe("Testa o compoment App", () => {

    test("Deve haver dois título na página", async() => {
        render(<App/>)
    
        const title = await screen.findAllByRole("heading")
        // expect(title).toBeInTheDocument()
        expect(title).toHaveLength(2)
    })

    test("Deve haver um título escrito 'Fazendo Teste'", async() => {
        render(<App/>)
    
        const title = await screen.findByRole("heading", {
            name: /fazendo teste/i
        })
        // expect(title.textContent).toBe("Fazendo Teste")
        expect(title).toBeInTheDocument()
        })

})