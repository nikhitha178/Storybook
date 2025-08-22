import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "../DataTable";
import type { Column } from "../DataTable";


interface User {
    id: number;
    name: string;
    age: number;
}

const sampleData: User[] = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 30 },
];

const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

describe("DataTable", () => {
    test("renders table with data", () => {
        render(<DataTable data={sampleData} columns={columns} />);
        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
    });

    test("renders empty state", () => {
        render(<DataTable data={[]} columns={columns} />);
        expect(screen.getByText("No data available")).toBeInTheDocument();
    });

    test("calls onRowSelect when selecting row", () => {
        const handleSelect = jest.fn();
        render(
            <DataTable
                data={sampleData}
                columns={columns}
                selectable
                onRowSelect={handleSelect}
            />
        );

        const checkbox = screen.getAllByRole("checkbox")[0];
        fireEvent.click(checkbox);
        expect(handleSelect).toHaveBeenCalled();
    });
});
