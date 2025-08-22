import{j as e,r as y}from"./iframe-Bi_vIPd8.js";import"./preload-helper-D9Z9MdNV.js";const r=({primary:a=!1,size:u="medium",backgroundColor:c,label:d,...m})=>{const p=a?"storybook-button--primary":"storybook-button--secondary";return e.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${u}`,p].join(" "),style:{backgroundColor:c},...m,children:d})};r.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const f={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},backgroundColor:{control:"color"},onClick:{action:"clicked"}}},t={args:{label:"Default Button"}},o={args:{primary:!0,label:"Primary Button"}},s={args:{primary:!1,label:"Secondary Button"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{size:"small",label:"Small"}),e.jsx(r,{size:"medium",label:"Medium"}),e.jsx(r,{size:"large",label:"Large"})]})},l={args:{label:"Custom BG",backgroundColor:"#ff5722",primary:!0}},i={render:()=>{const[a,u]=y.useState("Click Me");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("input",{type:"text",value:a,onChange:c=>u(c.target.value),placeholder:"Type button label...",style:{padding:"8px",border:"1px solid #ccc",borderRadius:"6px"}}),e.jsx(r,{primary:!0,label:a})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Button"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Primary Button"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: "Secondary Button"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <Button size="small" label="Small" />\r
            <Button size="medium" label="Medium" />\r
            <Button size="large" label="Large" />\r
        </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom BG",
    backgroundColor: "#ff5722",
    primary: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [label, setLabel] = useState("Click Me");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>\r
                <input type="text" value={label} onChange={e => setLabel(e.target.value)} placeholder="Type button label..." style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px"
      }} />\r
                <Button primary label={label} />\r
            </div>;
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","Primary","Secondary","Sizes","CustomBackground","Playground"];export{l as CustomBackground,t as Default,i as Playground,o as Primary,s as Secondary,n as Sizes,x as __namedExportsOrder,f as default};
