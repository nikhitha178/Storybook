import{j as e,r as i}from"./iframe-Bi_vIPd8.js";import{I as o}from"./InputField-CTx8KurB.js";import"./preload-helper-D9Z9MdNV.js";const m={title:"Components/InputField",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["outlined","filled","ghost"]},size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:"boolean"},invalid:{control:"boolean"}}},r={args:{label:"Username",placeholder:"Enter your username",helperText:"This will be public",variant:"outlined",size:"md"}},a={render:()=>{const[s,n]=i.useState("");return e.jsxs("div",{className:"p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-md max-w-md",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4 text-purple-800",children:"Playground"}),e.jsx(o,{label:"Your Name",placeholder:"Type here...",value:s,onChange:d=>n(d.target.value),helperText:"Watch your input below 👇",variant:"outlined"}),e.jsxs("p",{className:"mt-4 text-purple-700 font-medium",children:["You typed: ",s]})]})}},t={args:{label:"Email",placeholder:"Enter email",invalid:!0,errorMessage:"Invalid email address!",variant:"outlined"}},l={render:()=>e.jsxs("div",{className:"grid gap-4 p-6 bg-blue-50 rounded-xl shadow-md max-w-md",children:[e.jsx(o,{label:"Filled",placeholder:"Filled style",variant:"filled"}),e.jsx(o,{label:"Outlined",placeholder:"Outlined style",variant:"outlined"}),e.jsx(o,{label:"Ghost",placeholder:"Ghost style",variant:"ghost"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This will be public",
    variant: "outlined",
    size: "md"
  }
}`,...r.parameters?.docs?.source},description:{story:"🟢 Default InputField",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-md max-w-md">\r
                <h2 className="text-lg font-semibold mb-4 text-purple-800">Playground</h2>\r
                <InputField label="Your Name" placeholder="Type here..." value={value} onChange={e => setValue(e.target.value)} helperText="Watch your input below 👇" variant="outlined" />\r
                <p className="mt-4 text-purple-700 font-medium">You typed: {value}</p>\r
            </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:"🎮 Playground with live input",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address!",
    variant: "outlined"
  }
}`,...t.parameters?.docs?.source},description:{story:"❌ Error Example",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 p-6 bg-blue-50 rounded-xl shadow-md max-w-md">\r
            <InputField label="Filled" placeholder="Filled style" variant="filled" />\r
            <InputField label="Outlined" placeholder="Outlined style" variant="outlined" />\r
            <InputField label="Ghost" placeholder="Ghost style" variant="ghost" />\r
        </div>
}`,...l.parameters?.docs?.source},description:{story:"🎨 Variants Showcase",...l.parameters?.docs?.description}}};const h=["Default","Playground","WithError","Variants"];export{r as Default,a as Playground,l as Variants,t as WithError,h as __namedExportsOrder,m as default};
