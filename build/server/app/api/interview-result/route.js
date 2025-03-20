(()=>{var e={};e.id=151,e.ids=[151],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},37830:e=>{"use strict";e.exports=require("node:stream/web")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55591:e=>{"use strict";e.exports=require("https")},57075:e=>{"use strict";e.exports=require("node:stream")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:e=>{"use strict";e.exports=require("node:fs")},73566:e=>{"use strict";e.exports=require("worker_threads")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},88395:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>c,serverHooks:()=>m,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>d});var s={};t.r(s),t.d(s,{POST:()=>p});var n=t(96559),i=t(48088),o=t(37719),a=t(32190);let u=new(t(76837)).Ay({dangerouslyAllowBrowser:!0,apiKey:"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"});async function p(e){try{let{messages:r,jobDescription:t,cvText:s}=await e.json(),n=r?.filter(e=>"user"===e.role),i=n?.filter(e=>e.timing).map(e=>e.timing),o=i?.length?i.reduce((e,r)=>e+r,0)/i?.length:0,p=Math.max(...n.map(e=>e.timing||0)),c=Math.min(...n.map(e=>e.timing||0)),l=`As an expert interviewer, analyze this technical interview transcript and provide a detailed evaluation.
    
    Job Description:
    ${t}
    
    Candidate's CV:
    ${s}
    
    Interview Transcript:
    ${r.map(e=>`${e.role}: ${e.content}`).join("\n")}
    
    Timing Metrics:
    - Average Response Time: ${o.toFixed(1)} seconds
    - Fastest Response: ${c} seconds
    - Slowest Response: ${p} seconds
    
    Please provide a comprehensive evaluation in the following JSON format:
    {
      "scores": {
        "technicalAcumen": {
          "score": number (0-100),
          "explanation": string,
          "strengths": string[],
          "areasForImprovement": string[]
        },
        "communicationSkills": {
          "score": number (0-100),
          "explanation": string,
          "strengths": string[],
          "areasForImprovement": string[]
        },
        "responsiveness": {
          "score": number (0-100),
          "explanation": string,
          "strengths": string[],
          "areasForImprovement": string[]
        },
        "problemSolving": {
          "score": number (0-100),
          "explanation": string,
          "strengths": string[],
          "areasForImprovement": string[]
        },
        "culturalFit": {
          "score": number (0-100),
          "explanation": string,
          "strengths": string[],
          "areasForImprovement": string[]
        }
      },
      "overallScore": number (0-100),
      "summary": string,
      "recommendation": string
    }
    
    Evaluation Guidelines:
    1. Technical Acumen: Evaluate depth of technical knowledge, accuracy of answers, and ability to explain complex concepts
    2. Communication Skills: Assess clarity, structure, and effectiveness of responses
    3. Responsiveness: Consider both speed and quality of responses
    4. Problem-Solving: Evaluate approach to technical challenges
    5. Cultural Fit: Assess alignment with company values and team dynamics
    
    Timing Considerations:
    - Responses under 30 seconds: Excellent
    - 30-60 seconds: Good
    - 60-120 seconds: Average
    - Over 120 seconds: Needs improvement`,d=await u.chat.completions.create({model:"gpt-4o-mini",messages:[{role:"system",content:"You are an expert technical interviewer who provides detailed, objective evaluations."},{role:"user",content:l}],temperature:.7,response_format:{type:"json_object"}}),m=JSON.parse(d.choices[0].message.content||"{}");return a.NextResponse.json({...m,timingMetrics:{averageResponseTime:o,maxResponseTime:p,minResponseTime:c}})}catch(e){return console.error("Error",e),a.NextResponse.json({error:"Error"},{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/interview-result/route",pathname:"/api/interview-result",filename:"route",bundlePath:"app/api/interview-result/route"},resolvedPagePath:"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/api/interview-result/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:d,serverHooks:m}=c;function g(){return(0,o.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:d})}},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[447,580,837],()=>t(88395));module.exports=s})();