(()=>{var e={};e.id=923,e.ids=[923],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},37830:e=>{"use strict";e.exports=require("node:stream/web")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55591:e=>{"use strict";e.exports=require("https")},57075:e=>{"use strict";e.exports=require("node:stream")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:e=>{"use strict";e.exports=require("node:fs")},73426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>q,routeModule:()=>p,serverHooks:()=>x,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{POST:()=>c});var i=r(96559),o=r(48088),n=r(37719),a=r(32190);let u=new(r(76837)).Ay({dangerouslyAllowBrowser:!0,apiKey:"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"});async function c(e){try{let{jobDescription:t,cvText:r}=await e.json();if(!t||!r)return a.NextResponse.json({error:"Both job description and CV text are required"},{status:400});let s=`As an expert interviewer, generate exactly 15 interview questions based on the following job description and candidate's CV. 
    The questions should be distributed as follows:
    - 6 Technical questions
    - 5 Behavioral questions
    - 4 Situational questions
    
    Job Description:
    ${t}
    
    Candidate's CV:
    ${r}
    
    Generate questions that:
    1. Assess technical skills relevant to the role
    2. Evaluate behavioral competencies
    3. Present situational scenarios
    4. Are tailored to the candidate's specific experience
    
    Format the response as a JSON object with the following structure:
    {
      "technical": ["question1", "question2", ...], // exactly 6 questions
      "behavioral": ["question1", "question2", ...], // exactly 5 questions
      "situational": ["question1", "question2", ...] // exactly 4 questions
    }
    
    Ensure each question is detailed and specific to the role and candidate's background.`,i=await u.chat.completions.create({model:"gpt-4o-mini",messages:[{role:"system",content:"You are an expert interviewer who creates focused, relevant questions."},{role:"user",content:s}],temperature:.7,response_format:{type:"json_object"}}),o=JSON.parse(i.choices[0].message.content||"{}"),n=o.technical||[],c=o.behavioral||[],p=o.situational||[];return(6!==n.length||5!==c.length||4!==p.length)&&(o.technical=n.slice(0,6),o.behavioral=c.slice(0,5),o.situational=p.slice(0,4)),a.NextResponse.json(o)}catch(e){return console.error("Error",e),a.NextResponse.json({error:"Error"},{status:500})}}let p=new i.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/generate-questions/route",pathname:"/api/generate-questions",filename:"route",bundlePath:"app/api/generate-questions/route"},resolvedPagePath:"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/api/generate-questions/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:d,serverHooks:x}=p;function q(){return(0,n.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:d})}},73566:e=>{"use strict";e.exports=require("worker_threads")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,580,837],()=>r(73426));module.exports=s})();