import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        primary: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        backgroundColor: { control: "color" },
        onClick: { action: "clicked" },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 🔘 Default
export const Default: Story = {
    args: {
        label: "Default Button",
    },
};

// 🔘 Primary
export const Primary: Story = {
    args: {
        primary: true,
        label: "Primary Button",
    },
};

// 🔘 Secondary
export const Secondary: Story = {
    args: {
        primary: false,
        label: "Secondary Button",
    },
};

// 🔘 Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button size="small" label="Small" />
            <Button size="medium" label="Medium" />
            <Button size="large" label="Large" />
        </div>
    ),
};

// 🎨 Custom background
export const CustomBackground: Story = {
    args: {
        label: "Custom BG",
        backgroundColor: "#ff5722",
        primary: true,
    },
};

// 🎮 Playground (live label change)
export const Playground: Story = {
    render: () => {
        const [label, setLabel] = useState("Click Me");
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Type button label..."
                    style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                    }}
                />
                <Button primary label={label} />
            </div>
        );
    },
};
