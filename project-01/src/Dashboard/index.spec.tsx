import Dashboard from "."
import { render, screen } from "@testing-library/react"

describe("Testando o component Dashboard", ()=>{
    test("Deve haver um titulo escrito 'Dashboard'", async()=> {

        render(<Dashboard/>)
        const title = await screen.findByRole("heading", {
            name: /Dashboard/i
        })

        expect(title).toBeInTheDocument()
    }) 

    test("Deve haver um titulo escrito 'Dashboard'", async()=> {

        render(<Dashboard/>)
        const title = await screen.findByRole("heading")

        expect(title).toHaveTextContent(/DashBoard/i)
    }) 
})