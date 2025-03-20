(()=>{var e={};e.id=711,e.ids=[711],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},37830:e=>{"use strict";e.exports=require("node:stream/web")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55591:e=>{"use strict";e.exports=require("https")},57075:e=>{"use strict";e.exports=require("node:stream")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:e=>{"use strict";e.exports=require("node:fs")},73566:e=>{"use strict";e.exports=require("worker_threads")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},96487:()=>{},97333:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>m,routeModule:()=>l,serverHooks:()=>h,workAsyncStorage:()=>p,workUnitAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{POST:()=>u});var i=r(96559),n=r(48088),o=r(37719),a=r(32190);let c=new(r(76837)).Ay({dangerouslyAllowBrowser:!0,apiKey:"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"});async function u(e){try{let t;let{messages:r,question:s,answer:i,timing:n,cvText:o,questionCounts:u}=await e.json(),l=r?.filter(e=>e?.role==="assistant"&&e?.content.includes(s)).length,p=l>=2;if(u.technical>=4&&u.behavioral>=4&&u.situational>=4)return a.NextResponse.json({interviewComplete:!0,message:"Interview completed successfully"});let d=`Based on this CV, identify the main topics and skills to assess. Extract these directly from the candidate's experience and qualifications:
    ${o}
    
    Return a JSON array of topics that are explicitly mentioned in their CV. Focus on their actual experience, skills, and areas of expertise.
    Example format: {"topics": ["Topic 1", "Topic 2", "Topic 3"]}`,h=[];try{let e=(await c.chat.completions.create({model:"gpt-4o-mini",messages:[{role:"user",content:d}],temperature:.7,response_format:{type:"json_object"}})).choices[0].message.content;if(e){let t=JSON.parse(e);h=Array.isArray(t.topics)?t.topics:[]}}catch(e){console.error("Error",e),h=["Professional Experience","Problem Solving","Communication","Industry Knowledge","Leadership"]}t=u.technical<4?"technical":u.behavioral<4?"behavioral":"situational";let m=[{role:"system",content:`You are an expert interviewer conducting a professional interview. Your role is to:
      1. Evaluate the candidate's responses thoroughly
      2. Only ask follow-up questions if the answer is unclear or incomplete
      3. Move to the next topic if the answer demonstrates understanding
      4. Maintain a professional and engaging conversation
      5. Keep track of time and maintain interview pace
      
      Guidelines:
      - Ask one question at a time
      - Provide clear, concise questions
      - Adapt your questions based on the candidate's experience level and role
      - Only ask follow-up questions if the answer needs clarification
      - If the answer is clear and demonstrates understanding, move to the next topic
      
      For Situational Questions:
      - Present situational scenarios
      - Present realistic scenarios that could occur in their role
      - Include specific details like team size, deadlines, and constraints
      - Focus on common challenges in their industry
      - Include interpersonal situations (conflicts, leadership, communication)
      - Add business context (budgets, client demands, market conditions)
      - Make scenarios specific to their experience level
      - Include both positive and challenging situations
      
      Current context:
      - Question asked: ${s}
      - Candidate's answer: ${i}
      - Time taken: ${n} seconds
      - Follow-up count for current topic: ${l}
      - Should change topic: ${p}
      - Current question type: ${t}
      - Question counts: Technical (${u.technical}/4), Behavioral (${u.behavioral}/4), Situational (${u.situational}/4)
      - Available topics: ${h.join(", ")}
      
      ${p?"Please change the topic and ask a new question from a different area.":"Only ask a follow-up question if the answer needs clarification. Otherwise, move to the next topic."}
      
      ${"technical"===t?"Focus on role-specific technical skills and knowledge.":"behavioral"===t?"Focus on past experiences and behavior in work situations.":"Present a realistic scenario with specific details, constraints, and business context that could occur in their role."}`},...r.map(e=>({role:e?.role,content:e?.content}))],x=(await c.chat.completions.create({model:"gpt-4o-mini",messages:m,temperature:.7,max_tokens:500})).choices[0].message.content;return a.NextResponse.json({question:x,timestamp:Date.now(),currentTopics:h,questionType:t,questionCounts:{...u,[t]:u[t]+1}})}catch(e){return console.log("Error",e),a.NextResponse.json({error:"Error"},{status:500})}}let l=new i.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/interview/route",pathname:"/api/interview",filename:"route",bundlePath:"app/api/interview/route"},resolvedPagePath:"/Users/vinaykumar/Desktop/Vinay/ats-ai-recruiter/app/api/interview/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:p,workUnitAsyncStorage:d,serverHooks:h}=l;function m(){return(0,o.patchFetch)({workAsyncStorage:p,workUnitAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,580,837],()=>r(97333));module.exports=s})();