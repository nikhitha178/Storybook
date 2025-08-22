import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DataTable from "./DataTable";
import InputField from "./InputField";

interface User {
    id: number;
    name: string;
    email: string;
}

const sampleData: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
    title: "Components/DataTable",
    component: DataTable<User>,
};
export default meta;
type Story = StoryObj<typeof DataTable<User>>;

// 📊 Dashboard Demo with CRUD
export const DashboardDemo: Story = {
    render: () => {
        const [users, setUsers] = useState<User[]>(sampleData);
        const [query, setQuery] = useState("");

        // Edit states
        const [editingUser, setEditingUser] = useState<User | null>(null);
        const [tempName, setTempName] = useState("");
        const [tempEmail, setTempEmail] = useState("");

        // Delete states
        const [deletingUser, setDeletingUser] = useState<User | null>(null);

        // Create states
        const [isCreating, setIsCreating] = useState(false);
        const [newName, setNewName] = useState("");
        const [newEmail, setNewEmail] = useState("");

        // --- EDIT ---
        const handleEdit = (user: User) => {
            setEditingUser(user);
            setTempName(user.name);
            setTempEmail(user.email);
        };

        const handleSave = () => {
            if (editingUser) {
                setUsers((prev) =>
                    prev.map((u) =>
                        u.id === editingUser.id ? { ...u, name: tempName, email: tempEmail } : u
                    )
                );
                setEditingUser(null);
            }
        };

        // --- DELETE ---
        const confirmDelete = (user: User) => {
            setDeletingUser(user);
        };

        const handleDelete = () => {
            if (deletingUser) {
                setUsers((prev) => prev.filter((u) => u.id !== deletingUser.id));
                setDeletingUser(null);
            }
        };

        // --- CREATE ---
        const handleCreate = () => {
            if (newName.trim() && newEmail.trim()) {
                const newUser: User = {
                    id: Date.now(),
                    name: newName,
                    email: newEmail,
                };
                setUsers((prev) => [...prev, newUser]);
                setNewName("");
                setNewEmail("");
                setIsCreating(false);
            }
        };

        const filtered = users.filter((u) =>
            u.name.toLowerCase().includes(query.toLowerCase())
        );

        return (
            <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-indigo-700">User Management</h2>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => setIsCreating(true)}
                        >
                            + Add User
                        </button>
                    </div>

                    {/* Search */}
                    <InputField
                        label="Search Users"
                        placeholder="Type a name..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        variant="outlined"
                    />

                    {/* Table */}
                    <div className="mt-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-indigo-500 text-white">
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Email</th>
                                    <th className="p-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-indigo-50">
                                        <td className="p-3">{user.name}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-3">
                                            <button
                                                className="px-3 py-1 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                                                onClick={() => handleEdit(user)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                onClick={() => confirmDelete(user)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="p-4 text-center text-gray-500">
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* --- Create Modal --- */}
                    {isCreating && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h3 className="text-lg font-semibold mb-4">Add New User</h3>
                                <InputField
                                    label="Name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    variant="outlined"
                                />
                                <div className="mt-3" />
                                <InputField
                                    label="Email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    variant="outlined"
                                />
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        onClick={() => setIsCreating(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        onClick={handleCreate}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- Edit Modal --- */}
                    {editingUser && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h3 className="text-lg font-semibold mb-4">Edit User</h3>
                                <InputField
                                    label="Name"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    variant="outlined"
                                />
                                <div className="mt-3" />
                                <InputField
                                    label="Email"
                                    value={tempEmail}
                                    onChange={(e) => setTempEmail(e.target.value)}
                                    variant="outlined"
                                />
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        onClick={() => setEditingUser(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- Delete Confirmation Modal --- */}
                    {deletingUser && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                                <h3 className="text-lg font-semibold mb-4 text-red-600">
                                    Confirm Delete
                                </h3>
                                <p>
                                    Are you sure you want to delete{" "}
                                    <span className="font-bold">{deletingUser.name}</span>?
                                </p>
                                <div className="flex justify-center gap-4 mt-6">
                                    <button
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        onClick={() => setDeletingUser(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    },
};
