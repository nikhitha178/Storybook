// .storybook/preview.tsx
import "../src/index.css";
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import React from "react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9fafb" },
        { name: "dark", value: "#1e1e1e" },
        { name: "blue", value: "#e0f2fe" },
      ],
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e0f7fa 0%, #fce4ec 100%)",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
