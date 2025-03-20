(()=>{var e={};e.id=294,e.ids=[294],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},6545:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>m});var s=r(60687),i=r(54864),n=r(88198),a=r(27562),o=r(23599),l=r(61792),c=r(76663);let d={key:"root",storage:o.A,whitelist:["candidate"]},u=(0,l.rL)(d,a.Ay),p=(0,n.U1)({reducer:{candidateReducer:u,uiReducer:c.Ay},devTools:!1,middleware:e=>e({serializableCheck:!1})}),x=(0,l.GM)(p);var h=r(55964);function m({children:e}){return(0,s.jsx)(i.Kq,{store:p,children:(0,s.jsx)(h.Q,{loading:null,persistor:x,children:e})})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},26819:(e,t,r)=>{Promise.resolve().then(r.bind(r,34964))},27562:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>u,U5:()=>a,cL:()=>d,u4:()=>o,uN:()=>l,wD:()=>c});var s=r(88198);let i={candidateSummary:"",jobTitle:"",jobExperience:"",jobDescription:""},n=(0,s.Z0)({name:"candidate",initialState:i,reducers:{setCandidateSummary(e,t){e.candidateSummary=t.payload},setJobTitle(e,t){e.jobTitle=t.payload},setJobExperience(e,t){e.jobExperience=t.payload},setJobDescription(e,t){e.jobDescription=t.payload},reset:()=>i}}),{setCandidateSummary:a,setJobTitle:o,setJobExperience:l,setJobDescription:c,reset:d}=n.actions,u=n.reducer},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},32508:(e,t,r)=>{Promise.resolve().then(r.bind(r,6545)),Promise.resolve().then(r.bind(r,8222))},33873:e=>{"use strict";e.exports=require("path")},34816:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,16444,23)),Promise.resolve().then(r.t.bind(r,16042,23)),Promise.resolve().then(r.t.bind(r,88170,23)),Promise.resolve().then(r.t.bind(r,49477,23)),Promise.resolve().then(r.t.bind(r,29345,23)),Promise.resolve().then(r.t.bind(r,12089,23)),Promise.resolve().then(r.t.bind(r,46577,23)),Promise.resolve().then(r.t.bind(r,31307,23))},34964:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(60687),i=r(27562),n=r(51060),a=r(43210),o=r(54864),l=r(96678),c=r(58325),d=r(76663);let u=()=>{let e=(0,o.wA)(),t=(0,o.d4)(e=>e.candidateReducer.jobTitle),r=(0,o.d4)(e=>e.uiReducer.currentStep),u=(0,o.d4)(e=>e.candidateReducer.candidateSummary),[p,x]=(0,a.useState)(!1),[h,m]=(0,a.useState)([]),[b,v]=(0,a.useState)(!1);(0,a.useEffect)(()=>{f()},[]);let f=async()=>{try{v(!0),await n.A.post("/api/job-titles",{cvText:u}).then(e=>{m(e.data.jobTitles),v(!1)}).catch(e=>{console.error("Error",e),v(!1)})}catch(e){console.error("Error",e),v(!1)}};return b?(0,s.jsx)("div",{className:"h-screen w-screen",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center h-full",children:(0,s.jsx)("h3",{className:"text-gray-400 text-4xl font-bold",children:"Generating Job Titles..."})})}):(0,s.jsx)("div",{className:"h-screen w-screen",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,s.jsx)(c.A,{title:"Select Candidate Job Title",subTitle:"These job titles are fetched from our state of the art AI model."}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 m-6",children:[h.map((r,n)=>(0,s.jsx)("button",{onClick:()=>{e((0,i.u4)(r))},className:`${r==t?"bg-white":"bg-transparent"} ${r==t?"text-black":"text-white"} border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`,children:r},n)),(0,s.jsx)("button",{onClick:()=>{x(!p),e((0,i.u4)(""))},className:"border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300",children:"Custom Job Title "}),p&&(0,s.jsx)("input",{type:"text",placeholder:"Enter Job Title",className:"border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 focus:outline-none text-center",onChange:t=>{e((0,i.u4)(t.target.value))}})]}),t&&(0,s.jsx)(l.A,{onClick:()=>{e((0,d.EY)(+r+1))},children:"Next"})]})})};var p=r(8222);let x=()=>{let e=(0,o.wA)(),t=(0,o.d4)(e=>e.uiReducer.currentStep),[r,c]=(0,a.useState)(!1),u=(0,a.useRef)(null),x=async r=>{c(!0);let s=r.target.files?.[0];if(s){let r=new FormData;r.append("file",s),await n.A.post("/api/upload-cv",r).then(r=>{console.log(r.data),e((0,i.U5)(r.data.text)),e((0,d.EY)(+t+1)),c(!1)}).catch(e=>{console.error("Error",e),c(!1),p.oR.error("Error uploading file")})}};return r?(0,s.jsx)("div",{className:"flex flex-col items-center justify-center h-screen w-full p-4",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center p-16 rounded-lg shadow-md",children:(0,s.jsx)("h3",{className:"text-gray-400 text-4xl font-bold",children:"Generating Profile..."})})}):(0,s.jsx)("div",{className:"flex flex-col items-center justify-center h-screen w-full p-4",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center p-16 rounded-lg shadow-md",children:[(0,s.jsx)("h3",{className:"text-white text-4xl font-bold",children:"Upload Resume"}),(0,s.jsxs)("div",{className:"w-full flex flex-col items-center justify-center mt-4 rounded-lg text-white",children:[(0,s.jsx)("p",{className:"text-center text-gray-400",children:"Upload your resume to get started. We will use our AI to extract the information and create a profile for you."}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-center",children:[(0,s.jsx)("input",{ref:u,type:"file",className:"hidden",onChange:x}),(0,s.jsx)(l.A,{onClick:()=>u.current?.click(),children:"Upload"})]})]})]})})},h=[{id:"1",years:"0-2",label:"Entry Level"},{id:"2",years:"3-5",label:"Mid Level"},{id:"3",years:"6-10",label:"Senior Level"},{id:"4",years:"10+",label:"Expert Level"}],m=()=>{let e=(0,o.wA)(),t=(0,o.d4)(e=>e.candidateReducer.jobTitle),r=(0,o.d4)(e=>e.uiReducer.currentStep),n=(0,o.d4)(e=>e.candidateReducer.jobExperience);return(0,s.jsx)("div",{className:"h-screen w-screen",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,s.jsx)(c.A,{title:`Select Candidate Job Experience Level for ${t}`,subTitle:"Job experience level is based on the number of years of experience the candidate has."}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4 m-6",children:h.map((t,r)=>(0,s.jsxs)("div",{onClick:()=>{e((0,i.uN)(t.years))},className:`${t.years==n?"bg-white":"bg-transparent"} ${t.years==n?"text-black":"text-white"} flex flex-col items-center justify-center border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`,children:[(0,s.jsxs)("p",{children:[t.years," years"]}),(0,s.jsx)("p",{children:t.label})]},r))}),n&&(0,s.jsx)(l.A,{onClick:()=>{e((0,d.EY)(+r+1))},children:"Next"})]})})};var b=r(16189);let v=()=>{let e=(0,o.wA)(),t=(0,b.useRouter)(),r=(0,o.d4)(e=>e.candidateReducer.jobTitle),d=(0,o.d4)(e=>e.candidateReducer.jobExperience),u=(0,o.d4)(e=>e.candidateReducer.jobDescription);(0,o.d4)(e=>e.candidateReducer.candidateSummary),(0,o.d4)(e=>e.uiReducer.currentStep);let[p,x]=(0,a.useState)([]),[h,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{v()},[]);let v=async()=>{try{m(!0),await n.A.post("/api/job-descriptions",{jobTitle:r,experience:d}).then(e=>{x(e.data.jobDescriptions),console.log(e.data),m(!1)}).catch(e=>{console.error("Error",e),m(!1)})}catch(e){console.error("Error",e),m(!1)}};return h?(0,s.jsx)("div",{className:"h-screen w-screen",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center h-full",children:(0,s.jsx)("h3",{className:"text-gray-400 text-4xl font-bold",children:"Generating Job Descriptions..."})})}):(0,s.jsx)("div",{className:"h-screen w-screen",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,s.jsx)(c.A,{title:`Enter Job Description for ${r} or Use Our AI To Generate One`,subTitle:"Enter the job description for the candidate."}),(0,s.jsx)("div",{children:(0,s.jsx)(l.A,{onClick:()=>{v()},children:"AI Generated Job Description"})}),(0,s.jsx)("div",{className:"flex items-center justify-center gap-4 mt-6",children:p.map((t,r)=>(0,s.jsx)("button",{onClick:()=>{e((0,i.wD)(t))},className:`${t==u?"bg-white":"bg-transparent"} ${t==u?"text-black":"text-white"} border-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300`,children:t?.slice(0,36)},r))}),(0,s.jsx)("div",{className:"mt-8 w-[50%]",children:(0,s.jsx)("textarea",{value:u,placeholder:"Enter Job Description",className:"w-full h-[200px] border-white border-2 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 focus:outline-none",onChange:t=>{e((0,i.wD)(t.target.value))}})}),r&&(0,s.jsx)(l.A,{disabled:!(u?.length>20),onClick:()=>{t.push("/interview")},children:"Invite Candidate for Interview"})]})})},f=()=>{let e=(0,o.d4)(e=>e.uiReducer.currentStep);return(0,s.jsx)("div",{children:(()=>{switch(e){case 0:return(0,s.jsx)(x,{});case 1:return(0,s.jsx)(u,{});case 2:return(0,s.jsx)(m,{});case 3:return(0,s.jsx)(v,{})}})()})}},46055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(31658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},50795:(e,t,r)=>{Promise.resolve().then(r.bind(r,71693))},53486:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/redux/provider.tsx","Providers")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},58014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>d});var s=r(37413),i=r(56389),n=r.n(i),a=r(51189),o=r.n(a);r(82704);var l=r(53486),c=r(81819);r(56070);let d={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} ${o().variable} antialiased`,children:(0,s.jsxs)(l.Providers,{children:[e,(0,s.jsx)(c.ToastContainer,{})]})})})}},58325:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(60687);let i=({title:e,subTitle:t})=>(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("h3",{className:"text-white text-3xl font-semibold text-center",children:e}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("p",{className:"text-center text-gray-400",children:t})})]})},61756:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(65239),i=r(48088),n=r(88170),a=r.n(n),o=r(30893),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c={children:["",{children:["recruitement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,71693)),"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/recruitement/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,58014)),"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/recruitement/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/recruitement/page",pathname:"/recruitement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},71693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/recruitement/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/recruitement/page.tsx","default")},74075:e=>{"use strict";e.exports=require("zlib")},76663:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>l,EY:()=>a,lt:()=>o});var s=r(88198);let i={currentStep:0},n=(0,s.Z0)({name:"ui",initialState:i,reducers:{setCurrentStep(e,t){e.currentStep=t.payload},resetCurrentStep:()=>i}}),{setCurrentStep:a,resetCurrentStep:o}=n.actions,l=n.reducer},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},82704:()=>{},83997:e=>{"use strict";e.exports=require("tty")},90716:(e,t,r)=>{Promise.resolve().then(r.bind(r,53486)),Promise.resolve().then(r.bind(r,81819))},94735:e=>{"use strict";e.exports=require("events")},96678:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(60687);let i=({children:e,onClick:t,disabled:r})=>(0,s.jsx)("button",{onClick:t,className:`bg-transparent border-white border-2 hover:bg-white hover:text-black transition-all duration-300 text-white px-16 py-2 rounded-lg mt-8 font-semibold cursor-pointer ${r?"opacity-50 cursor-not-allowed":""}`,disabled:r,children:e})},98368:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,86346,23)),Promise.resolve().then(r.t.bind(r,27924,23)),Promise.resolve().then(r.t.bind(r,35656,23)),Promise.resolve().then(r.t.bind(r,40099,23)),Promise.resolve().then(r.t.bind(r,38243,23)),Promise.resolve().then(r.t.bind(r,28827,23)),Promise.resolve().then(r.t.bind(r,62763,23)),Promise.resolve().then(r.t.bind(r,97173,23))}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,461,934,60],()=>r(61756));module.exports=s})();