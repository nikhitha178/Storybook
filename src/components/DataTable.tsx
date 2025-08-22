import { useState } from "react";

export interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    selectable?: boolean;
    onRowSelect?: (selected: T[]) => void;
    loading?: boolean;
    pageSize?: number;
    searchable?: boolean;
    exportable?: boolean;
    actions?: (row: T) => React.ReactNode; // 🔥 NEW: Row actions
}

function DataTable<T extends { id: number | string }>({
    data,
    columns,
    selectable = false,
    onRowSelect,
    loading = false,
    pageSize = 5,
    actions,
}: DataTableProps<T>) {
    const [selectedRows, setSelectedRows] = useState<T[]>([]);
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [page, setPage] = useState(1);

    const handleSelect = (row: T) => {
        let updated: T[];
        if (selectedRows.includes(row)) {
            updated = selectedRows.filter((r) => r !== row);
        } else {
            updated = [...selectedRows, row];
        }
        setSelectedRows(updated);
        onRowSelect?.(updated);
    };

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (!sortKey) return 0;
        const valA = a[sortKey as keyof T];
        const valB = b[sortKey as keyof T];
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const paginated = sortedData.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(data.length / pageSize);

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            {loading ? (
                <div className="p-6 text-center text-gray-500">Loading...</div>
            ) : data.length === 0 ? (
                <div className="p-6 text-center text-gray-400 italic">
                    No data available
                </div>
            ) : (
                <>
                    <table className="min-w-full border-collapse bg-white">
                        <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            <tr>
                                {selectable && <th className="p-3 text-left">Select</th>}
                                {columns.map((col) => (
                                    <th
                                        key={col.key}
                                        className="p-3 text-left cursor-pointer hover:bg-indigo-600 transition-colors"
                                        onClick={() => col.sortable && handleSort(col.key)}
                                    >
                                        {col.title}{" "}
                                        {col.sortable && sortKey === col.key && (
                                            <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                                        )}
                                        {col.sortable && sortKey !== col.key && <span>⇅</span>}
                                    </th>
                                ))}
                                {actions && <th className="p-3 text-left">Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((row, idx) => (
                                <tr
                                    key={row.id}
                                    className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        } hover:bg-indigo-50 transition`}
                                >
                                    {selectable && (
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(row)}
                                                onChange={() => handleSelect(row)}
                                                className="w-4 h-4 accent-indigo-600"
                                            />
                                        </td>
                                    )}
                                    {columns.map((col) => (
                                        <td key={col.key} className="p-3 text-gray-700">
                                            {String(row[col.dataIndex])}
                                        </td>
                                    ))}
                                    {actions && <td className="p-3">{actions(row)}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center p-3">
                        <button
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                            disabled={page === 1}
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        >
                            Prev
                        </button>
                        <span>
                            Page {page} of {totalPages}
                        </span>
                        <button
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default DataTable;
