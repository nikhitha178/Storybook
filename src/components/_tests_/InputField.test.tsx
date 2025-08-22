import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../InputField";

describe("InputField", () => {
    test("renders with label and placeholder", () => {
        render(<InputField label="Name" placeholder="Enter your name" />);
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    });

    test("shows error message when invalid", () => {
        render(
            <InputField
                label="Email"
                placeholder="Enter email"
                invalid
                errorMessage="Invalid email"
            />
        );
        expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });

    test("calls onChange when typing", () => {
        const handleChange = jest.fn();
        render(<InputField label="Username" onChange={handleChange} />);
        const input = screen.getByLabelText("Username");
        fireEvent.change(input, { target: { value: "testuser" } });
        expect(handleChange).toHaveBeenCalled();
    });
});
