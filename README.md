# Frontend Assignment – Storybook Components

This project was built as part of the internship **Frontend Assignment**.  
It implements reusable UI components documented and showcased using **Storybook**.

---

## 📂 Folder Structure

frontend-assignment/
├── .storybook/ # Storybook configuration
├── src/
│ ├── components/ # Reusable UI components (Button, InputField, DataTable)
│ └── stories/ # Storybook stories
├── public/ # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md # You are here 🚀

yaml

---

## 🛠️ Tech Stack

- **React 18 + TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (styling)
- **Storybook 9 (React-Vite)**
- **Chromatic** (deployment + preview)
- **GitHub** (version control)

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd frontend-assignment
Install dependencies

bash
Copy code
npm install
Run Storybook locally

bash
Copy code
npm run storybook
Storybook will be available at: http://localhost:6006

Build Storybook

bash
Copy code
npm run build-storybook
Deploy to Chromatic

bash
Copy code
npm run chromatic
(requires project token – already configured in package.json)

🖼️ Components Implemented
🔘 Button
Primary / Secondary states

Light / Dark theme support

Sizes: Small, Medium, Large

⌨️ InputField
Variants: Filled, Outlined, Ghost

States: Default, Disabled, Error

Supports helper text and error messages

📊 DataTable
Sortable columns

Row selection

Empty + Loading states

🌍 Deployment
🔗 Storybook Preview (Chromatic):
View Live Storybook

🔗 GitHub Repository:
GitHub Repo Link

💡 Approach
Set up React + Vite + Storybook 9 environment.

Built reusable UI components (Button, InputField, DataTable) inside src/components/.

Documented each component with stories in src/stories/.

Used TailwindCSS for styling with consistent utility classes.

Deployed Storybook using Chromatic for review and collaboration.
