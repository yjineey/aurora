import{_}from"./DGAihBSh.js";import{d as p,c as n,e as r,f as a,i as s,w as l,F as h,W as f,y as b,U as x,n as g,P as w,R as v,a0 as y}from"./DeY5VCpN.js";import{_ as k}from"./BdpNx0h2.js";import{_ as z}from"./BcHArF9J.js";import{_ as B}from"./DlAUqK2U.js";import"./CNZoKvvK.js";import"./CDL8Yqv-.js";function N(o){switch(o){case"home":return{home:{name:"Home",to:"/",icon:"lucide:home"},works:{name:"Works",to:"/works",icon:"lucide:briefcase"},writing:{name:"Writing",to:"/writing",icon:"lucide:notepad-text"},hobby:{name:"Hobby",to:"/hobby",icon:"lucide:ferris-wheel"},github:{name:"Github",to:"https://github.com/yjineey/aurora",icon:"lucide:github"},about:{name:"About",to:"/about",icon:"lucide:user"}};default:return[]}}const $={class:"mx-auto my-2 flex w-full items-center justify-center"},L={class:"rounded-full"},C={class:"z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"},j=p({__name:"Navbar",props:{isText:{type:Boolean,default:!1}},setup(o){const i=N("home");return(t,c)=>{const u=_,m=v,d=k;return n(),r("div",$,[a("header",L,[s(d,{rounded:"",transparent:"",animate:!1,class:"border border-white/10"},{default:l(()=>[a("nav",C,[(n(!0),r(h,null,f(b(i),e=>(n(),x(m,{id:e.name.toLowerCase(),key:e.name,"aria-label":e.name+" navigation link",class:g([[e.to===(t._.provides[w]||t.$route).path?"border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm":"text-muted"],"flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"]),to:e.to},{default:l(()=>[s(u,{name:e.icon,class:"size-7 font-light sm:size-6"},null,8,["name"])]),_:2},1032,["id","aria-label","class","to"]))),128))])]),_:1})])])}}}),F={},S={class:"sm:mt-[50px]"};function W(o,i){const t=j,c=z;return n(),r("div",null,[a("div",null,[s(t,{class:"fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0"}),a("div",S,[y(o.$slots,"default")]),s(c)])])}const G=B(F,[["render",W]]);export{G as default};