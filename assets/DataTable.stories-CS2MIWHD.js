import{r as a,j as e}from"./iframe-Bi_vIPd8.js";import{I as w}from"./InputField-CTx8KurB.js";import"./preload-helper-D9Z9MdNV.js";function D({data:x,columns:u,selectable:b=!1,onRowSelect:S,loading:N=!1,pageSize:o=5,actions:g}){const[c,j]=a.useState([]),[r,h]=a.useState(null),[d,C]=a.useState("asc"),[l,p]=a.useState(1),E=t=>{let s;c.includes(t)?s=c.filter(i=>i!==t):s=[...c,t],j(s),S?.(s)},f=t=>{r===t?C(d==="asc"?"desc":"asc"):(h(t),C("asc"))},k=[...x].sort((t,s)=>{if(!r)return 0;const i=t[r],y=s[r];return i<y?d==="asc"?-1:1:i>y?d==="asc"?1:-1:0}).slice((l-1)*o,l*o),v=Math.ceil(x.length/o);return e.jsx("div",{className:"overflow-x-auto shadow-lg rounded-lg border border-gray-200",children:N?e.jsx("div",{className:"p-6 text-center text-gray-500",children:"Loading..."}):x.length===0?e.jsx("div",{className:"p-6 text-center text-gray-400 italic",children:"No data available"}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"min-w-full border-collapse bg-white",children:[e.jsx("thead",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 text-white",children:e.jsxs("tr",{children:[b&&e.jsx("th",{className:"p-3 text-left",children:"Select"}),u.map(t=>e.jsxs("th",{className:"p-3 text-left cursor-pointer hover:bg-indigo-600 transition-colors",onClick:()=>t.sortable&&f(t.key),children:[t.title," ",t.sortable&&r===t.key&&e.jsx("span",{children:d==="asc"?"↑":"↓"}),t.sortable&&r!==t.key&&e.jsx("span",{children:"⇅"})]},t.key)),g&&e.jsx("th",{className:"p-3 text-left",children:"Actions"})]})}),e.jsx("tbody",{children:k.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gray-50":"bg-white"} hover:bg-indigo-50 transition`,children:[b&&e.jsx("td",{className:"p-3",children:e.jsx("input",{type:"checkbox",checked:c.includes(t),onChange:()=>E(t),className:"w-4 h-4 accent-indigo-600"})}),u.map(i=>e.jsx("td",{className:"p-3 text-gray-700",children:String(t[i.dataIndex])},i.key)),g&&e.jsx("td",{className:"p-3",children:g(t)})]},t.id))})]}),e.jsxs("div",{className:"flex justify-between items-center p-3",children:[e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",disabled:l===1,onClick:()=>p(t=>Math.max(t-1,1)),children:"Prev"}),e.jsxs("span",{children:["Page ",l," of ",v]}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded disabled:opacity-50",disabled:l===v,onClick:()=>p(t=>Math.min(t+1,v)),children:"Next"})]})]})})}D.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selected"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:""},exportable:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const A=[{id:1,name:"Alice Johnson",email:"alice@example.com"},{id:2,name:"Bob Smith",email:"bob@example.com"},{id:3,name:"Charlie Brown",email:"charlie@example.com"}],M={title:"Components/DataTable",component:D},U={render:()=>{const[x,u]=a.useState(A),[b,S]=a.useState(""),[N,o]=a.useState(null),[g,c]=a.useState(""),[j,r]=a.useState(""),[h,d]=a.useState(null),[C,l]=a.useState(!1),[p,E]=a.useState(""),[f,T]=a.useState(""),k=n=>{o(n),c(n.name),r(n.email)},v=()=>{N&&(u(n=>n.map(m=>m.id===N.id?{...m,name:g,email:j}:m)),o(null))},t=n=>{d(n)},s=()=>{h&&(u(n=>n.filter(m=>m.id!==h.id)),d(null))},i=()=>{if(p.trim()&&f.trim()){const n={id:Date.now(),name:p,email:f};u(m=>[...m,n]),E(""),T(""),l(!1)}},y=x.filter(n=>n.name.toLowerCase().includes(b.toLowerCase()));return e.jsx("div",{className:"p-6 bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-700",children:"User Management"}),e.jsx("button",{className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",onClick:()=>l(!0),children:"+ Add User"})]}),e.jsx(w,{label:"Search Users",placeholder:"Type a name...",value:b,onChange:n=>S(n.target.value),variant:"outlined"}),e.jsx("div",{className:"mt-6",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-indigo-500 text-white",children:[e.jsx("th",{className:"p-3 text-left",children:"Name"}),e.jsx("th",{className:"p-3 text-left",children:"Email"}),e.jsx("th",{className:"p-3 text-left",children:"Actions"})]})}),e.jsxs("tbody",{children:[y.map(n=>e.jsxs("tr",{className:"border-b hover:bg-indigo-50",children:[e.jsx("td",{className:"p-3",children:n.name}),e.jsx("td",{className:"p-3",children:n.email}),e.jsxs("td",{className:"p-3",children:[e.jsx("button",{className:"px-3 py-1 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-500",onClick:()=>k(n),children:"Edit"}),e.jsx("button",{className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",onClick:()=>t(n),children:"Delete"})]})]},n.id)),y.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"p-4 text-center text-gray-500",children:"No users found"})})]})]})}),C&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Add New User"}),e.jsx(w,{label:"Name",value:p,onChange:n=>E(n.target.value),variant:"outlined"}),e.jsx("div",{className:"mt-3"}),e.jsx(w,{label:"Email",value:f,onChange:n=>T(n.target.value),variant:"outlined"}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",onClick:()=>l(!1),children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",onClick:i,children:"Create"})]})]})}),N&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Edit User"}),e.jsx(w,{label:"Name",value:g,onChange:n=>c(n.target.value),variant:"outlined"}),e.jsx("div",{className:"mt-3"}),e.jsx(w,{label:"Email",value:j,onChange:n=>r(n.target.value),variant:"outlined"}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",onClick:()=>o(null),children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",onClick:v,children:"Save"})]})]})}),h&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-red-600",children:"Confirm Delete"}),e.jsxs("p",{children:["Are you sure you want to delete"," ",e.jsx("span",{className:"font-bold",children:h.name}),"?"]}),e.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",onClick:()=>d(null),children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",onClick:s,children:"Delete"})]})]})})]})})}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
        setUsers(prev => prev.map(u => u.id === editingUser.id ? {
          ...u,
          name: tempName,
          email: tempEmail
        } : u));
        setEditingUser(null);
      }
    };

    // --- DELETE ---
    const confirmDelete = (user: User) => {
      setDeletingUser(user);
    };
    const handleDelete = () => {
      if (deletingUser) {
        setUsers(prev => prev.filter(u => u.id !== deletingUser.id));
        setDeletingUser(null);
      }
    };

    // --- CREATE ---
    const handleCreate = () => {
      if (newName.trim() && newEmail.trim()) {
        const newUser: User = {
          id: Date.now(),
          name: newName,
          email: newEmail
        };
        setUsers(prev => [...prev, newUser]);
        setNewName("");
        setNewEmail("");
        setIsCreating(false);
      }
    };
    const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
    return <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen">\r
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">\r
                    <div className="flex justify-between items-center mb-4">\r
                        <h2 className="text-2xl font-bold text-indigo-700">User Management</h2>\r
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => setIsCreating(true)}>\r
                            + Add User\r
                        </button>\r
                    </div>\r
\r
                    {/* Search */}\r
                    <InputField label="Search Users" placeholder="Type a name..." value={query} onChange={e => setQuery(e.target.value)} variant="outlined" />\r
\r
                    {/* Table */}\r
                    <div className="mt-6">\r
                        <table className="w-full border-collapse">\r
                            <thead>\r
                                <tr className="bg-indigo-500 text-white">\r
                                    <th className="p-3 text-left">Name</th>\r
                                    <th className="p-3 text-left">Email</th>\r
                                    <th className="p-3 text-left">Actions</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                {filtered.map(user => <tr key={user.id} className="border-b hover:bg-indigo-50">\r
                                        <td className="p-3">{user.name}</td>\r
                                        <td className="p-3">{user.email}</td>\r
                                        <td className="p-3">\r
                                            <button className="px-3 py-1 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-500" onClick={() => handleEdit(user)}>\r
                                                Edit\r
                                            </button>\r
                                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => confirmDelete(user)}>\r
                                                Delete\r
                                            </button>\r
                                        </td>\r
                                    </tr>)}\r
                                {filtered.length === 0 && <tr>\r
                                        <td colSpan={3} className="p-4 text-center text-gray-500">\r
                                            No users found\r
                                        </td>\r
                                    </tr>}\r
                            </tbody>\r
                        </table>\r
                    </div>\r
\r
                    {/* --- Create Modal --- */}\r
                    {isCreating && <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">\r
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">\r
                                <h3 className="text-lg font-semibold mb-4">Add New User</h3>\r
                                <InputField label="Name" value={newName} onChange={e => setNewName(e.target.value)} variant="outlined" />\r
                                <div className="mt-3" />\r
                                <InputField label="Email" value={newEmail} onChange={e => setNewEmail(e.target.value)} variant="outlined" />\r
                                <div className="flex justify-end gap-3 mt-6">\r
                                    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setIsCreating(false)}>\r
                                        Cancel\r
                                    </button>\r
                                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={handleCreate}>\r
                                        Create\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>}\r
\r
                    {/* --- Edit Modal --- */}\r
                    {editingUser && <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">\r
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">\r
                                <h3 className="text-lg font-semibold mb-4">Edit User</h3>\r
                                <InputField label="Name" value={tempName} onChange={e => setTempName(e.target.value)} variant="outlined" />\r
                                <div className="mt-3" />\r
                                <InputField label="Email" value={tempEmail} onChange={e => setTempEmail(e.target.value)} variant="outlined" />\r
                                <div className="flex justify-end gap-3 mt-6">\r
                                    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setEditingUser(null)}>\r
                                        Cancel\r
                                    </button>\r
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={handleSave}>\r
                                        Save\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>}\r
\r
                    {/* --- Delete Confirmation Modal --- */}\r
                    {deletingUser && <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">\r
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">\r
                                <h3 className="text-lg font-semibold mb-4 text-red-600">\r
                                    Confirm Delete\r
                                </h3>\r
                                <p>\r
                                    Are you sure you want to delete{" "}\r
                                    <span className="font-bold">{deletingUser.name}</span>?\r
                                </p>\r
                                <div className="flex justify-center gap-4 mt-6">\r
                                    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setDeletingUser(null)}>\r
                                        Cancel\r
                                    </button>\r
                                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={handleDelete}>\r
                                        Delete\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>}\r
                </div>\r
            </div>;
  }
}`,...U.parameters?.docs?.source}}};const F=["DashboardDemo"];export{U as DashboardDemo,F as __namedExportsOrder,M as default};
