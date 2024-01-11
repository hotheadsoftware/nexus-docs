"use strict";(self.webpackChunknexus_docs=self.webpackChunknexus_docs||[]).push([[671],{7876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(5893),i=t(1151);const a={sidebar_position:1},s="Introduction",r={id:"intro",title:"Introduction",description:"Our Mission",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/nexus-docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/hotheadsoftware/nexus-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Making Use of Nexus",permalink:"/nexus-docs/docs/making-use"}},l={},d=[{value:"Our Mission",id:"our-mission",level:2},{value:"Setting Expectations",id:"setting-expectations",level:2},{value:"What We Deliver",id:"what-we-deliver",level:3},{value:"What We Don&#39;t Deliver",id:"what-we-dont-deliver",level:3},{value:"The Core Tooling",id:"the-core-tooling",level:3},{value:"The Tenancy Problem",id:"the-tenancy-problem",level:2},{value:"How Nexus Solves It",id:"how-nexus-solves-it",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"A Laravel Environment",id:"a-laravel-environment",level:4},{value:"Localhost Routing (DNS / Hosts File)",id:"localhost-routing-dns--hosts-file",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.h2,{id:"our-mission",children:"Our Mission"}),"\n",(0,o.jsx)(n.p,{children:'To further enable the "build it faster" mindset by pre-integrating key tools\nso that you can stand up fully functional subscription-based applications in\nminutes, not hours or days.'}),"\n",(0,o.jsx)(n.h2,{id:"setting-expectations",children:"Setting Expectations"}),"\n",(0,o.jsx)(n.h3,{id:"what-we-deliver",children:"What We Deliver"}),"\n",(0,o.jsx)(n.p,{children:"Nexus gives you an integrated environment for Laravel, Filament, and Tenancy,\nwith very few other customizations. We want to give you room to build your dream\nwithout getting in the way."}),"\n",(0,o.jsx)(n.h3,{id:"what-we-dont-deliver",children:"What We Don't Deliver"}),"\n",(0,o.jsx)(n.p,{children:"We've intentionally avoided billing integration. Why? Every project will have\nits own needs and preferences in this area. You might want to use Stripe or\nPaddle or some other completely custom payment solution."}),"\n",(0,o.jsx)(n.p,{children:"Maybe you want to use Laravel Spark. I contemplated adding Spark to this\npackage so I could get things going much faster, but that would have forced\nanyone who wants to use Nexus to buy a Spark license. That didn't seem fair."}),"\n",(0,o.jsx)(n.p,{children:"We will maintain a Laravel-Spark (Paddle) version of Nexus for those who wish\nto use that, but covering every possible use-case is not feasible or maintainable\nfor us. This might change if the community steps in to provide support."}),"\n",(0,o.jsx)(n.h3,{id:"the-core-tooling",children:"The Core Tooling"}),"\n",(0,o.jsx)(n.p,{children:'Laravel\'s "Build It Faster" is achieved by giving you a set of back-end tools\nand plugins - a broad ecosystem - so that you can create any PHP app extremely\nrapidly, with reliable tooling.'}),"\n",(0,o.jsx)(n.p,{children:'Filament\'s "Build It Faster" is achieved by layering interfaces and connections\non top of a Laravel project. Combined with some command-line tooling to enable\nrapid extension, Filament can help you create user interfaces in minutes.'}),"\n",(0,o.jsx)(n.h2,{id:"the-tenancy-problem",children:"The Tenancy Problem"}),"\n",(0,o.jsx)(n.p,{children:"As great as the above tooling is, there's a gap. Filament's built-in tenancy\nsupports single-database operations. That means you need to add tenant_id to\nall the relevant tables and ensure that global scopes are applied to all\noperations to prevent data leakage. This model is fine for some applications."}),"\n",(0,o.jsx)(n.p,{children:"An alternative approach is to create a new database or schema for each new\ntenant. The challenges to this approach are that application complexity\nincreases, and data becomes more isolated (you can't join across databases,\nfor instance, since each gets its own connection)."}),"\n",(0,o.jsx)(n.p,{children:"The benefits of this approach are that tenant data is isolated, you don't\nhave to take any additional steps to ensure no leakage between tenants,\nand migrating a noisy neighbor to dedicated hardware is as simple as making\na snapshot, standing up a new database instance, and adding the new\nconnection details to the tenant configuration."}),"\n",(0,o.jsx)(n.h3,{id:"how-nexus-solves-it",children:"How Nexus Solves It"}),"\n",(0,o.jsxs)(n.p,{children:["We use the ",(0,o.jsx)(n.a,{href:"https://tenancyforlaravel.com",children:"stancl/tenancy"})," package to\ndeliver multi-database, domain-derived multi-tenancy. This package is\ncompatible with Filament and ensures that all tenant operations happen\nin a tenant context (connections to database, queues, storage, etc.,\nare scoped)."]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,o.jsx)(n.h4,{id:"a-laravel-environment",children:"A Laravel Environment"}),"\n",(0,o.jsx)(n.p,{children:"This typically includes PHP, a database, a cache provider, a queue provider, etc.\nIf you're already building Laravel projects, you probably have a set of tooling\nthat will work for Nexus. We're not doing anything special here."}),"\n",(0,o.jsx)(n.p,{children:"If you're starting from scratch on Windows, we recommend using WSL 2, Docker,\nand Laravel Sail. Our setup.sh can help you quickly stand up this environment."}),"\n",(0,o.jsx)(n.p,{children:"If you want to create the application and environment by hand, here are the steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Clone the Nexus repo."}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"composer install"}),".","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You'll need PHP & Composer on your machine OR"}),"\n",(0,o.jsx)(n.li,{children:"You can use docker to run a composer container, suppressing errors related to php extensions."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:".vendor/bin/sail up -d"})]}),"\n",(0,o.jsx)(n.li,{children:"Copy .env.example to .env"}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:".vendor/bin/sail artisan key:generate"})]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:".vendor/bin/sail artisan migrate --seed"})]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"npm install"})," or ",(0,o.jsx)(n.code,{children:"bun install"})," (can do this using vendor/bin/sail if desired)."]}),"\n",(0,o.jsx)(n.li,{children:"Add our Pint pre-commit hook if you want to enforce code styles (see setup.sh)."}),"\n",(0,o.jsx)(n.li,{children:"Install bash aliases for sail, artisan, and composer (optional)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For details on the commands and how to run them, see setup.sh."}),"\n",(0,o.jsx)(n.h4,{id:"localhost-routing-dns--hosts-file",children:"Localhost Routing (DNS / Hosts File)"}),"\n",(0,o.jsx)(n.p,{children:"You'll need to be able to route some domains to localhost. On windows, you can\nmodify the c:\\Windows\\System32\\drivers\\etc\\hosts file and add relevant entries.\nWe recommend adding pointers for foo.localhost, bar.localhost, and baz.localhost\nto 127.0.0.1."}),"\n",(0,o.jsx)(n.p,{children:"Other operating systems will need their own modifications and the methods for\ndoing that are easily found by searching the web."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);