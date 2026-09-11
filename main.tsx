import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {Brain,LayoutDashboard,BookOpen,Search,BarChart3,MessageSquare,Menu,X,Sun,Moon,Code2,UserRound} from "lucide-react";
import "./styles.css";

const subjects=[["Computer Science","CS"],["Mathematics","MATH"],["Physics","PHY"],["Chemistry","CHEM"]];

function App(){
 const [page,setPage]=useState("Dashboard"),[dark,setDark]=useState(true),[mobile,setMobile]=useState(false);
 const [q,setQ]=useState(""),[answer,setAnswer]=useState("");
 const nav=[["Dashboard",LayoutDashboard],["AI Doubt Solver",MessageSquare],["Engineering Notes",BookOpen],["Web Search",Search],["Problem Solver",Code2],["Grades & Analytics",BarChart3]];
 const solve=()=>{if(q.trim())setAnswer("AI analysis ready. Break the problem into known data, required result, relevant concept, step-by-step method, and verify the final answer.");};
 return <div className={dark?"app dark":"app"}>
  <aside className={mobile?"sidebar open":"sidebar"}><div className="brand"><div className="logo"><Brain/></div><div><b>Student AI</b><small>ANALYSER</small></div><button className="close" onClick={()=>setMobile(false)}><X/></button></div>
   <nav>{nav.map(([n,I])=><button className={page===n?"active":""} onClick={()=>{setPage(n);setMobile(false)}}><I size={18}/>{n}</button>)}</nav>
   <div className="profile"><UserRound size={19}/><div><b>Student</b><small>Engineering Student</small></div></div>
  </aside>
  <main><header><button className="hamb" onClick={()=>setMobile(true)}><Menu/></button><div><span className="eyebrow">STUDENT AI ANALYSER</span><h1>{page}</h1></div><button className="theme" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button></header>
   {page==="Dashboard"&&<Dashboard setPage={setPage}/>}
   {page==="AI Doubt Solver"&&<section className="panel"><h2>Ask your AI tutor</h2><p>Get structured explanations for engineering questions.</p><textarea value={q} onChange={e=>setQ(e.target.value)} placeholder="Type your question here..."/><button className="primary" onClick={solve}>Solve with AI</button>{answer&&<div className="answer"><b>Solution approach</b><p>{answer}</p><ol><li>Understand the question and identify the required output.</li><li>Choose the correct concept or algorithm.</li><li>Work through the solution step by step.</li><li>Check the result with examples or test cases.</li></ol></div>}</section>}
   {page==="Engineering Notes"&&<Notes/>}{page==="Web Search"&&<SearchPage/>}{page==="Problem Solver"&&<Problem/>}{page==="Grades & Analytics"&&<Analytics/>}
  </main></div>
}
function Dashboard({setPage}:any){return <><div className="hero"><div><span className="pill">AI-POWERED LEARNING</span><h2>Learn smarter.<br/>Solve faster.</h2><p>Your personal study workspace for engineering.</p><button className="primary" onClick={()=>setPage("AI Doubt Solver")}>Ask a doubt →</button></div><Brain size={110}/></div><div className="grid stats"><Card t="Questions solved" v="128" s="+18 this week"/><Card t="Study progress" v="74%" s="Across all subjects"/><Card t="Accuracy" v="86%" s="+5% this month"/><Card t="Study streak" v="12 days" s="Keep it going!"/></div><section><div className="sectionhead"><h2>Subjects</h2><button onClick={()=>setPage("Engineering Notes")}>Explore notes →</button></div><div className="grid subjects">{subjects.map(s=><div className="card subject"><span>{s[1]}</span><h3>{s[0]}</h3><div className="bar"><i style={{width:(50+Math.random()*45)+"%"}}/></div><small>Continue learning</small></div>)}</div></section></>}
function Card({t,v,s}:any){return <div className="card"><small>{t}</small><strong>{v}</strong><span>{s}</span></div>}
function Notes(){return <section><div className="searchbox"><Search/><input placeholder="Search engineering notes, subjects or topics..."/></div><div className="grid notes">{["Data Structures & Algorithms","Engineering Mathematics","Digital Electronics","Operating Systems","Database Management","Computer Networks"].map((x,i)=><div className="card"><BookOpen size={22}/><h3>{x}</h3><p>Notes, summaries and important concepts.</p><button>Open notes →</button></div>)}</div></section>}
function SearchPage(){return <section className="panel"><h2>Smart Web Search</h2><p>Search for current information and study references.</p><div className="searchbox"><Search/><input placeholder="What do you want to learn?"/><button className="primary">Search</button></div><div className="answer"><b>Search results will appear here</b><p>Connect a search API in the backend to retrieve live sources and citations.</p></div></section>}
function Problem(){return <section className="panel"><h2>Algorithmic Problem Solver</h2><p>Problem → Algorithm → Pseudocode → Code → Test cases → Complexity.</p><textarea placeholder="Paste your programming problem..."/><button className="primary">Generate solution</button><div className="flow"><span>Understand</span><span>Algorithm</span><span>Pseudocode</span><span>Code</span><span>Complexity</span></div></section>}
function Analytics(){return <section><div className="grid stats"><Card t="Overall accuracy" v="86%" s="Excellent"/><Card t="Problems solved" v="128" s="This semester"/><Card t="Weak topic" v="Recursion" s="Recommended practice"/><Card t="Strong subject" v="Physics" s="82% progress"/></div><div className="panel"><h2>Performance</h2><div className="chart">{[55,72,64,82,70,88,86].map((v,i)=><div><i style={{height:v+"%"}}/><small>W{i+1}</small></div>)}</div></div></section>}
createRoot(document.getElementById("root")!).render(<App/>);