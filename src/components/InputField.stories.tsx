import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
    title: "Components/InputField",
    component: InputField,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["outlined", "filled", "ghost"],
        },
        size: {
            control: { type: "radio" },
            options: ["sm", "md", "lg"],
        },
        disabled: { control: "boolean" },
        invalid: { control: "boolean" },
    },
};
export default meta;
type Story = StoryObj<typeof InputField>;

/** 🟢 Default InputField */
export const Default: Story = {
    args: {
        label: "Username",
        placeholder: "Enter your username",
        helperText: "This will be public",
        variant: "outlined",
        size: "md",
    },
};

/** 🎮 Playground with live input */
export const Playground: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-md max-w-md">
                <h2 className="text-lg font-semibold mb-4 text-purple-800">Playground</h2>
                <InputField
                    label="Your Name"
                    placeholder="Type here..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    helperText="Watch your input below 👇"
                    variant="outlined"
                />
                <p className="mt-4 text-purple-700 font-medium">You typed: {value}</p>
            </div>
        );
    },
};

/** ❌ Error Example */
export const WithError: Story = {
    args: {
        label: "Email",
        placeholder: "Enter email",
        invalid: true,
        errorMessage: "Invalid email address!",
        variant: "outlined",
    },
};

/** 🎨 Variants Showcase */
export const Variants: Story = {
    render: () => (
        <div className="grid gap-4 p-6 bg-blue-50 rounded-xl shadow-md max-w-md">
            <InputField label="Filled" placeholder="Filled style" variant="filled" />
            <InputField label="Outlined" placeholder="Outlined style" variant="outlined" />
            <InputField label="Ghost" placeholder="Ghost style" variant="ghost" />
        </div>
    ),
};
