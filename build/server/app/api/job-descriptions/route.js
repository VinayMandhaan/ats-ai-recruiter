(()=>{var e={};e.id=73,e.ids=[73],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},37830:e=>{"use strict";e.exports=require("node:stream/web")},43403:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>j,routeModule:()=>c,serverHooks:()=>x,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{POST:()=>a});var i=t(96559),o=t(48088),n=t(37719),p=t(32190);let u=new(t(76837)).Ay({dangerouslyAllowBrowser:!0,apiKey:"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"});async function a(e){try{let{jobTitle:r,experience:t}=await e.json(),s=`Based on the Job Title and Experience Level, suggest 3 most suitable job descriptions for the candidate. Consider their experience, skills, and qualifications:
    Job Title: ${r}
    Experience Level: ${t}
    
    Return a JSON array of job descriptions, for example:
    {"jobDescriptions": ["Job Description 1", "Job Description 2", "Job Description 3"]}`,i=(await u.chat.completions.create({model:"gpt-4o-mini",messages:[{role:"user",content:s}],temperature:.7,response_format:{type:"json_object"}})).choices[0].message.content;if(i){let e=JSON.parse(i);return p.NextResponse.json(e)}return p.NextResponse.json({jobDescriptions:[]})}catch(e){return console.error("Error fetching job descriptions:",e),p.NextResponse.json({error:"Error processing job descriptions request"},{status:500})}}let c=new i.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/job-descriptions/route",pathname:"/api/job-descriptions",filename:"route",bundlePath:"app/api/job-descriptions/route"},resolvedPagePath:"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/api/job-descriptions/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:x}=c;function j(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55591:e=>{"use strict";e.exports=require("https")},57075:e=>{"use strict";e.exports=require("node:stream")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:e=>{"use strict";e.exports=require("node:fs")},73566:e=>{"use strict";e.exports=require("worker_threads")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[447,580,837],()=>t(43403));module.exports=s})();