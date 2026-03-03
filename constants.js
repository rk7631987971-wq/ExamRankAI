export const EXAMS = [
  { id:"bihar10",  name:"Bihar Board 10th",  icon:"📚", badge:"Board",   color:"#EFF6FF", students:"1.2L+", subjects:["Mathematics","Science","Social Science","Hindi","English","Sanskrit"], pattern:"5 subjects, 100 marks each, 3 hours per paper" },
  { id:"bihar11",  name:"Bihar Board 11th",  icon:"📖", badge:"Board",   color:"#FDF4FF", students:"76K+",  subjects:["Physics","Chemistry","Mathematics","Biology","Hindi","English"],       pattern:"Annual exam, Theory + Practical" },
  { id:"bihar12",  name:"Bihar Board 12th",  icon:"🎓", badge:"Board",   color:"#F5F3FF", students:"98K+",  subjects:["Physics","Chemistry","Mathematics","Biology","Hindi","English"],       pattern:"6 subjects, Theory + Practical, 3 hours" },
  { id:"upsc",     name:"UPSC Civil Services",icon:"🏛️",badge:"Central", color:"#F0FDF4", students:"92K+",  subjects:["General Studies","CSAT","Optional Subject","Essay","Interview"],      pattern:"Prelims → Mains → Personality Test" },
  { id:"bpsc",     name:"BPSC 70th CCE",     icon:"⚖️", badge:"State",   color:"#FFF7ED", students:"35K+",  subjects:["General Studies I","General Studies II","Optional Subject"],          pattern:"Prelims (150 MCQ) → Mains → Interview" },
  { id:"ssc",      name:"SSC CGL 2024",      icon:"🗂️", badge:"Central", color:"#FFF1F2", students:"67K+",  subjects:["Quantitative Aptitude","English","General Intelligence","GA"],       pattern:"Tier I → Tier II → Document Verification" },
  { id:"railway",  name:"Railway NTPC",      icon:"🚂", badge:"Central", color:"#F0F9FF", students:"54K+",  subjects:["Mathematics","General Intelligence","General Awareness","Science"],   pattern:"CBT 1 → CBT 2 → Skill Test" },
  { id:"banking",  name:"IBPS PO / SBI PO",  icon:"🏦", badge:"Banking", color:"#FAFAF0", students:"41K+",  subjects:["Quantitative Aptitude","Reasoning","English","GA","Computer"],       pattern:"Prelims → Mains → Group Exercise + Interview" },
];

export const SUBJECT_MAP = {
  "BPSC":            ["General Studies I","General Studies II","History","Geography","Polity","Economy"],
  "UPSC":            ["History","Geography","Polity","Economy","Environment","Science & Tech","Current Affairs"],
  "SSC CGL":         ["Quantitative Aptitude","English Language","General Intelligence","General Awareness"],
  "Bihar Board 10th":["Mathematics","Science","Social Science","Hindi","English","Sanskrit"],
  "Bihar Board 12th":["Physics","Chemistry","Mathematics","Biology","Hindi","English"],
  "Railway NTPC":    ["Mathematics","General Intelligence","General Awareness","General Science"],
  "Banking PO":      ["Quantitative Aptitude","Reasoning Ability","English Language","General Awareness"],
};

export const TOPICS = {
  "Mathematics":        ["Algebra","Geometry","Trigonometry","Calculus","Statistics","Number System"],
  "Quantitative Aptitude":["Number System","Percentage","Time & Work","Profit & Loss","Average","Ratio"],
  "General Intelligence":["Verbal Reasoning","Non-Verbal","Logical Reasoning","Analytical"],
  "History":            ["Ancient India","Medieval India","Modern India","World History","Art & Culture"],
  "Geography":          ["Physical Geography","Indian Geography","World Geography","Climate","Environment"],
  "Polity":             ["Constitution","Parliament","Judiciary","Federalism","Elections","Amendments"],
};

export const SAMPLE_QUESTIONS = {
  easy: [
    { q:"भारत के प्रथम राष्ट्रपति कौन थे?", opts:["डॉ. राजेंद्र प्रसाद","डॉ. सर्वपल्ली राधाकृष्णन","जवाहरलाल नेहरू","सरदार पटेल"], ans:0, exp:"डॉ. राजेंद्र प्रसाद 1950–1962 तक भारत के पहले राष्ट्रपति रहे।" },
    { q:"भारत की राजधानी क्या है?", opts:["मुंबई","कोलकाता","नई दिल्ली","चेन्नई"], ans:2, exp:"नई दिल्ली 1911 से भारत की राजधानी है।" },
    { q:"बिहार की राजधानी क्या है?", opts:["गया","भागलपुर","मुजफ्फरपुर","पटना"], ans:3, exp:"पटना (प्राचीन नाम पाटलिपुत्र) बिहार की राजधानी है।" },
  ],
  medium: [
    { q:"बिहार राज्य की स्थापना किस वर्ष हुई?", opts:["1911","1912","1936","1947"], ans:1, exp:"22 मार्च 1912 को बिहार को बंगाल से अलग किया गया।" },
    { q:"BPSC का पूर्ण रूप क्या है?", opts:["Bihar Public Service Corporation","Bihar Provincial Service Commission","Bihar Public Service Commission","Bihar Police Service Commission"], ans:2, exp:"BPSC = Bihar Public Service Commission।" },
    { q:"भारत का संविधान कब लागू हुआ?", opts:["15 अगस्त 1947","26 नवंबर 1949","26 जनवरी 1950","2 अक्टूबर 1950"], ans:2, exp:"26 जनवरी 1950 को भारत का संविधान लागू हुआ।" },
    { q:"गंगा नदी का उद्गम कहाँ से है?", opts:["यमुनोत्री","गंगोत्री","केदारनाथ","बद्रीनाथ"], ans:1, exp:"गंगा उत्तराखंड के गंगोत्री ग्लेशियर से निकलती है।" },
  ],
  hard: [
    { q:"नालंदा विश्वविद्यालय किस शताब्दी में अपने चरम पर था?", opts:["4थी-5वीं","5वीं-12वीं","13वीं-14वीं","2री-3री"], ans:1, exp:"नालंदा 5वीं से 12वीं शताब्दी (427–1197 CE) तक विश्व का सबसे बड़ा शिक्षा केंद्र था।" },
    { q:"चंपारण सत्याग्रह (1917) का कारण क्या था?", opts:["नील की खेती का विरोध","नमक कर का विरोध","भूमि कर का विरोध","धार्मिक स्वतंत्रता"], ans:0, exp:"गांधीजी ने बिहार के चंपारण में नील किसानों पर अत्याचार के खिलाफ आंदोलन किया।" },
    { q:"'मौलिक कर्तव्य' किस संशोधन से जोड़े गए?", opts:["42वां संशोधन 1976","44वां संशोधन 1978","52वां संशोधन 1985","61वां संशोधन 1989"], ans:0, exp:"42वें संविधान संशोधन 1976 से अनुच्छेद 51A के तहत मौलिक कर्तव्य जोड़े गए।" },
  ],
};

export const MOCK_QUESTIONS = [
  { q:"भारत का संविधान कब लागू हुआ?",              opts:["15 अगस्त 1947","26 जनवरी 1950","26 नवंबर 1949","2 अक्टूबर 1950"], ans:1 },
  { q:"बिहार की राजधानी क्या है?",                  opts:["गया","भागलपुर","पटना","मुजफ्फरपुर"], ans:2 },
  { q:"UPSC का पूर्ण रूप?",                         opts:["Union Public Service Commission","United Public Service Corporation","Universal Public Service Commission","Union Provincial Service Commission"], ans:0 },
  { q:"गंगा नदी का उद्गम कहाँ से है?",             opts:["यमुनोत्री","गंगोत्री","केदारनाथ","बद्रीनाथ"], ans:1 },
  { q:"भारत में कितने राज्य हैं?",                  opts:["27","28","29","30"], ans:1 },
  { q:"नालंदा विश्वविद्यालय किस राज्य में है?",    opts:["UP","झारखंड","बिहार","WB"], ans:2 },
  { q:"SSC CGL का आयोजन कौन करता है?",             opts:["UPSC","BPSC","Staff Selection Commission","Railway Board"], ans:2 },
  { q:"भारत के PM कौन हैं (2024)?",                 opts:["अमित शाह","नरेंद्र मोदी","राजनाथ सिंह","योगी आदित्यनाथ"], ans:1 },
  { q:"बिहार दिवस कब मनाया जाता है?",              opts:["15 नवंबर","1 नवंबर","22 मार्च","26 जनवरी"], ans:2 },
  { q:"IIT पटना की स्थापना कब हुई?",               opts:["2008","2009","2010","2011"], ans:0 },
];

export const TESTIMONIALS = [
  { name:"Rahul Kumar",  loc:"Patna, Bihar",      avatar:"RK", exam:"BPSC 2024 ✅",       stars:5, text:"ExamRankAI ke mock tests se mera BPSC prelims score 40% improve hua! AI questions bilkul exam pattern par hain." },
  { name:"Priya Singh",  loc:"Muzaffarpur, Bihar", avatar:"PS", exam:"Bihar Board 12th ✅", stars:5, text:"Bihar Board class 12 mein 92% aayi! Study Planner ne meri poori preparation organize kar di. Bahut helpful platform hai." },
  { name:"Amit Sharma",  loc:"Araria, Bihar",      avatar:"AS", exam:"SSC CGL 2024 ✅",    stars:5, text:"SSC CGL ki preparation ke liye best platform. AI questions aur detailed analytics ne meri weaknesses clearly dikhain." },
  { name:"Neha Gupta",   loc:"Gaya, Bihar",        avatar:"NG", exam:"UPSC Prelims ✅",     stars:5, text:"Affordable pricing aur quality content. Mock tests are very close to actual exam pattern. Cleared UPSC Prelims in first attempt!" },
];

export const PLANS = [
  { name:"Free",    price:"₹0",   period:"forever", highlight:false, cta:"Get Started",   features:[{t:"5 AI Questions/day",y:true},{t:"2 Mock Tests/month",y:true},{t:"Basic Study Planner",y:true},{t:"Performance Analytics",y:false},{t:"Detailed Solutions",y:false},{t:"Priority Support",y:false}] },
  { name:"Pro",     price:"₹299", period:"/month",  highlight:true,  cta:"Start Pro Trial",features:[{t:"Unlimited AI Questions",y:true},{t:"Unlimited Mock Tests",y:true},{t:"Smart Study Planner",y:true},{t:"Performance Analytics",y:true},{t:"Detailed Solutions",y:true},{t:"Priority Support",y:false}] },
  { name:"Premium", price:"₹799", period:"/month",  highlight:false, cta:"Go Premium",    features:[{t:"Everything in Pro",y:true},{t:"1:1 Mentor Sessions",y:true},{t:"Interview Preparation",y:true},{t:"Custom Study Plan",y:true},{t:"Exam Notifications",y:true},{t:"Priority Support",y:true}] },
];

export const BLOG_POSTS = [
  { cat:"Notification", icon:"🔔", date:"Dec 15, 2024", read:"5 min", color:"#EFF6FF", catBg:"#FEF3C7", catText:"#D97706", title:"BPSC 70th CCE 2024 — Complete Notification Analysis",       desc:"BPSC 70th CCE की पूरी notification का विस्तृत विश्लेषण — vacancy, syllabus, eligibility सब।" },
  { cat:"Strategy",     icon:"🎯", date:"Dec 10, 2024", read:"8 min", color:"#F5F3FF", catBg:"#EFF6FF", catText:"#2563EB", title:"Bihar Board Class 12 Science — 90%+ Score Strategy",        desc:"Bihar Board 12th Science में 90%+ marks लाने की proven strategy।" },
  { cat:"Tips",         icon:"💡", date:"Dec  5, 2024", read:"6 min", color:"#FFF7ED", catBg:"#F0FDF4", catText:"#16a34a", title:"UPSC Preparation से पहले 5 जरूरी बातें",                  desc:"UPSC की तैयारी शुरू करने से पहले इन 5 important points को जरूर जानें।" },
  { cat:"Notification", icon:"🔔", date:"Nov 28, 2024", read:"4 min", color:"#F0FDF4", catBg:"#FEF3C7", catText:"#D97706", title:"SSC CGL 2024 Tier-1 Result — आगे क्या करें?",             desc:"SSC CGL Tier-1 result के बाद Tier-2 की preparation guide।" },
  { cat:"Guide",        icon:"📚", date:"Nov 20, 2024", read:"10 min",color:"#FFF1F2", catBg:"#F5F3FF", catText:"#7C3AED", title:"Railway NTPC 2024 — CBT 1 Complete Syllabus Analysis",      desc:"RRB NTPC CBT 1 के syllabus का topic-wise analysis और important books।" },
  { cat:"Tips",         icon:"💡", date:"Nov 15, 2024", read:"7 min", color:"#F0F9FF", catBg:"#F0FDF4", catText:"#16a34a", title:"Mock Test देने का सही तरीका — Score 40% कैसे बढ़ाएं",     desc:"Mock tests से maximum benefit लेने की strategy जो score 40% तक बढ़ा सकती है।" },
];
