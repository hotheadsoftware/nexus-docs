"use strict";(self.webpackChunknexus_docs=self.webpackChunknexus_docs||[]).push([[752],{1555:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151);const l={sidebar_position:3},t="Panel Access Strategies",a={id:"introspection",title:"Panel Access Strategies",description:"Nexus is built to support common Saas access patterns. The way we handle extension",source:"@site/docs/introspection.md",sourceDirName:".",slug:"/introspection",permalink:"/nexus-docs/docs/introspection",draft:!1,unlisted:!1,editUrl:"https://github.com/hotheadsoftware/nexus-docs/docs/introspection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/nexus-docs/docs/installation"},next:{title:"Create a Panel",permalink:"/nexus-docs/docs/create-a-panel"}},o={},d=[{value:"Single User Tier, Internal Business Users",id:"single-user-tier-internal-business-users",level:2},{value:"Single User Tier, External Users",id:"single-user-tier-external-users",level:2},{value:"Multiple User Tiers, Internal &amp; External Users",id:"multiple-user-tiers-internal--external-users",level:2},{value:"Users, Guards, and Providers, Oh My!",id:"users-guards-and-providers-oh-my",level:2}];function c(e){const s={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"panel-access-strategies",children:"Panel Access Strategies"}),"\n",(0,r.jsx)(s.p,{children:"Nexus is built to support common Saas access patterns. The way we handle extension\nis by adding new panels and user types to support new access needs. This means that\nyour tenant-context database(s) will have separate tables for various user types."}),"\n",(0,r.jsx)(s.p,{children:"You might, for example, have:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"operators"}),"\n",(0,r.jsx)(s.li,{children:"buyers"}),"\n",(0,r.jsx)(s.li,{children:"sellers"}),"\n",(0,r.jsx)(s.li,{children:"affiliates"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"All of which have the same initial schema (a copy of the users table), but they're\nkept in separate tables to allow for expansion based on need, and to prevent a case\nwhere one type of user is able to log into a panel they shouldn't."}),"\n",(0,r.jsx)(s.p,{children:"This does mean that certain other packages will need to be flexible in terms of how\nthey handle users. Those packages will need to accept other Models which extend\nAuth\\User and should probably track the type by class name and id rather than by\nassuming User/users for everything."}),"\n",(0,r.jsx)(s.p,{children:"Most (maybe all?) first-party and popular third-party packages do this already."}),"\n",(0,r.jsx)(s.p,{children:"Following are some possible scenarios to help you envision how you'd like to structure\nyour new app:"}),"\n",(0,r.jsx)(s.h2,{id:"single-user-tier-internal-business-users",children:"Single User Tier, Internal Business Users"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The application owner & team (/admin panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Monitors application & database performance"}),"\n",(0,r.jsx)(s.li,{children:"Receives exception reports and resolves bugs"}),"\n",(0,r.jsx)(s.li,{children:"Manages relationship with subscribers"}),"\n",(0,r.jsx)(s.li,{children:"Develops Features"}),"\n",(0,r.jsx)(s.li,{children:"Bills subscriber for platform usage."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The subscriber or subscription owner (/account panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Configures global settings"}),"\n",(0,r.jsx)(s.li,{children:"Manages domains & branding"}),"\n",(0,r.jsx)(s.li,{children:"Configures registration: disabled"}),"\n",(0,r.jsx)(s.li,{children:"Manages users in dashboard"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The first tier of users, who use the application. (/operate panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Create/Remove/Update/Delete application records"}),"\n",(0,r.jsx)(s.li,{children:"Run reports, analyze data, configure items"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"single-user-tier-external-users",children:"Single User Tier, External Users"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The application owner & team (/admin panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Monitors application & database performance"}),"\n",(0,r.jsx)(s.li,{children:"Receives exception reports and resolves bugs"}),"\n",(0,r.jsx)(s.li,{children:"Manages relationship with subscribers"}),"\n",(0,r.jsx)(s.li,{children:"Develops Features"}),"\n",(0,r.jsx)(s.li,{children:"Bills subscriber for platform usage."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The subscriber or subscription owner (/account panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Configures global settings"}),"\n",(0,r.jsx)(s.li,{children:"Manages domains & branding"}),"\n",(0,r.jsx)(s.li,{children:"Configures registration enabled/disabled as needed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The first tier of users, who use the application. (/operate panel)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Members of the public or of some external group"}),"\n",(0,r.jsx)(s.li,{children:"Potentially being billed by subscriber for service"}),"\n",(0,r.jsx)(s.li,{children:"Register at a public portal or are given creds by subscriber"}),"\n",(0,r.jsx)(s.li,{children:"Make use of the app for business or personal reasons according to its purpose"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"multiple-user-tiers-internal--external-users",children:"Multiple User Tiers, Internal & External Users"}),"\n",(0,r.jsx)(s.p,{children:"Going beyond the above, Nexus can be easily modified to support additional tiers or types of users.\nAn example of how and why you might want to do this:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The application owner & team (/admin panel, central context)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Monitors application & database performance"}),"\n",(0,r.jsx)(s.li,{children:"Receives exception reports and resolves bugs"}),"\n",(0,r.jsx)(s.li,{children:"Manages relationship with subscribers"}),"\n",(0,r.jsx)(s.li,{children:"Develops Features"}),"\n",(0,r.jsx)(s.li,{children:"Bills subscriber for platform usage."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The subscriber or subscription owner (/account panel, central context)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Configures global settings"}),"\n",(0,r.jsx)(s.li,{children:"Manages domains & branding"}),"\n",(0,r.jsx)(s.li,{children:"Configures registration: disabled"}),"\n",(0,r.jsx)(s.li,{children:"Manages users in dashboard"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The first tier of users, who use the application. (/operate panel, tenant context)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Employees of the subscriber."}),"\n",(0,r.jsx)(s.li,{children:"Create/Remove/Update/Delete application records"}),"\n",(0,r.jsx)(s.li,{children:"Run reports, analyze data, configure items"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The n+ tier(s) of users, who use the application. (/??? panel, tenant context)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Members of the public or of some external group"}),"\n",(0,r.jsx)(s.li,{children:"Potentially being billed by subscriber for service"}),"\n",(0,r.jsx)(s.li,{children:"Register at a public portal or are given creds by subscriber or operator"}),"\n",(0,r.jsx)(s.li,{children:"Make use of the app for business or personal reasons according to its purpose"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"users-guards-and-providers-oh-my",children:"Users, Guards, and Providers, Oh My!"}),"\n",(0,r.jsx)(s.p,{children:"Alternative user types should use a table which is derived from the schema of the\nusers table, but which is named to match the model as certain functionality is\nbased on conversion of the model name (specifically, relationship stuff)."}),"\n",(0,r.jsx)(s.p,{children:"The convention is that the various items should be named as such:"}),"\n",(0,r.jsx)(s.p,{children:"Model name maps to panel name.\nTable name maps to guard name. Exception: 'web' is the default for users."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," if you plan to build an API for your application, you'll need to\nadd the appropriate guards to config/sanctum.php in order to include\nthem in the auth chain."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Model Name"}),(0,r.jsx)(s.th,{children:"Table Name"}),(0,r.jsx)(s.th,{children:"Panel Name"}),(0,r.jsx)(s.th,{children:"Guard Name"}),(0,r.jsx)(s.th,{children:"Provider Name"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"User"}),(0,r.jsx)(s.td,{children:"users"}),(0,r.jsx)(s.td,{children:"user"}),(0,r.jsx)(s.td,{children:"web"}),(0,r.jsx)(s.td,{children:"users"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Admin"}),(0,r.jsx)(s.td,{children:"admins"}),(0,r.jsx)(s.td,{children:"admin"}),(0,r.jsx)(s.td,{children:"admins"}),(0,r.jsx)(s.td,{children:"admins"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Manager"}),(0,r.jsx)(s.td,{children:"managers"}),(0,r.jsx)(s.td,{children:"manager"}),(0,r.jsx)(s.td,{children:"managers"}),(0,r.jsx)(s.td,{children:"managers"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Buyer"}),(0,r.jsx)(s.td,{children:"buyers"}),(0,r.jsx)(s.td,{children:"buyer"}),(0,r.jsx)(s.td,{children:"buyers"}),(0,r.jsx)(s.td,{children:"buyers"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"For example, if we have a user type called Manager, we'll create a managers table\nwith the same initial schema as the users table. We'll create a Manager model which\nuses the Authenticatable trait. We'll create a managers guard which uses the\nManager model."})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>t});var r=n(7294);const i={},l=r.createContext(i);function t(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);