
import Home from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react"

describe("Calculator", () => {
    it("renders calculator", () => {
        render(<Home />);
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("num1")).toBeInTheDocument();
        expect(screen.getByTestId("num2")).toBeInTheDocument();
        expect(screen.getByTestId("add")).toBeInTheDocument();
        expect(screen.getByTestId("subtract")).toBeInTheDocument();
        expect(screen.getByTestId("multiply")).toBeInTheDocument();
        expect(screen.getByTestId("divide")).toBeInTheDocument();
    })

    it("adds to numbers", () => {
        render(<Home />);
        const num1Input = screen.getByTestId("num1")
        const num2Input = screen.getByTestId("num2")
        const addButton = screen.getByTestId("add")
        const result = screen.getByTestId("result")

        fireEvent.change(num1Input, { target: { value: 5 } })
        fireEvent.change(num2Input, { target: { value: 8 } })

        fireEvent.click(addButton);
        expect(result).toHaveTextContent("13")
    })

    it("subtract to numbers", () => {
        render(<Home />);
        const num1Input = screen.getByTestId("num1")
        const num2Input = screen.getByTestId("num2")
        const subtractButton = screen.getByTestId("subtract")
        const result = screen.getByTestId("result")

        fireEvent.change(num1Input, { target: { value: 10 } })
        fireEvent.change(num2Input, { target: { value: 8 } })

        fireEvent.click(subtractButton);
        expect(result).toHaveTextContent("2")
    })

    it("multiply to numbers", () => {
        render(<Home />);
        const num1Input = screen.getByTestId("num1")
        const num2Input = screen.getByTestId("num2")
        const subtractButton = screen.getByTestId("multiply")
        const result = screen.getByTestId("result")

        fireEvent.change(num1Input, { target: { value: 10 } })
        fireEvent.change(num2Input, { target: { value: 8 } })

        fireEvent.click(subtractButton);
        expect(result).toHaveTextContent("80")
    })

    it("divide to numbers", () => {
        render(<Home />);
        const num1Input = screen.getByTestId("num1")
        const num2Input = screen.getByTestId("num2")
        const subtractButton = screen.getByTestId("divide")
        const result = screen.getByTestId("result")

        fireEvent.change(num1Input, { target: { value: 40 } })
        fireEvent.change(num2Input, { target: { value: 8 } })

        fireEvent.click(subtractButton);
        expect(result).toHaveTextContent("5")
    })
})

