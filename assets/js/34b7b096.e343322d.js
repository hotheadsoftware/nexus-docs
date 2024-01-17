"use strict";(self.webpackChunknexus_docs=self.webpackChunknexus_docs||[]).push([[147],{6362:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(5893),a=o(1151);const i={sidebar_position:5,title:"Spark (Paddle) Setup"},r=void 0,l={id:"billing-spark",title:"Spark (Paddle) Setup",description:"Description",source:"@site/docs/billing-spark.md",sourceDirName:".",slug:"/billing-spark",permalink:"/nexus-docs/docs/billing-spark",draft:!1,unlisted:!1,editUrl:"https://github.com/hotheadsoftware/nexus-docs/docs/billing-spark.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Spark (Paddle) Setup"},sidebar:"tutorialSidebar",previous:{title:"Create a Panel",permalink:"/nexus-docs/docs/create-a-panel"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Time Requirement",id:"time-requirement",level:2},{value:"Prerequisites: Paddle",id:"prerequisites-paddle",level:2},{value:"Local Internet-Reachable Environment",id:"local-internet-reachable-environment",level:3},{value:"Paddle Sandbox Account",id:"paddle-sandbox-account",level:3},{value:"Paddle Sandbox Product",id:"paddle-sandbox-product",level:3},{value:"Paddle Sandbox Webhook",id:"paddle-sandbox-webhook",level:3},{value:"Paddle Authentication Code",id:"paddle-authentication-code",level:3},{value:"Install Spark + Paddle",id:"install-spark--paddle",level:2},{value:"Composer Require",id:"composer-require",level:3},{value:"Configure Spark",id:"configure-spark",level:2},{value:"App Configuration",id:"app-configuration",level:3},{value:"Billable Users",id:"billable-users",level:3},{value:"Non-Billable Users",id:"non-billable-users",level:3},{value:"Test The System",id:"test-the-system",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"I've made the decision to exclude Laravel Spark from the core Nexus application.\nThis was done to avoid a dependency on a paid package. This would have forced users\nto pay Laravel, Inc. for a license to use Nexus. This is not desirable."}),"\n",(0,t.jsx)(n.p,{children:"That said, I do really like how Spark saves time in generating a billing portal and\nmanaging subscriptions. For some spin-off projects, I may choose to include Spark.\nThe process of incorporating Spark into a Nexus application is documented here."}),"\n",(0,t.jsx)(n.h2,{id:"time-requirement",children:"Time Requirement"}),"\n",(0,t.jsx)(n.p,{children:"An experienced developer should be able to complete the initial setup in about 30\nminutes. Integrating subscription checks and other functionality will vary based\non the complexity of the application."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites-paddle",children:"Prerequisites: Paddle"}),"\n",(0,t.jsx)(n.h3,{id:"local-internet-reachable-environment",children:"Local Internet-Reachable Environment"}),"\n",(0,t.jsx)(n.p,{children:"Your local environment needs to be reachable from the internet. This can be done\nwith a combination of DNS + Port Forwarding, or by using a service like Ngrok.\nIf using Port Forwarding, forward ports 80 and/or 443 to your local machine."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Paddle does not require SSL/TLS for the sandbox webhook. If you want to set up\nSSL/TLS, you can use a service like ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),".\nFor a non-prod environment, this would be great practice but isn't required."]})}),"\n",(0,t.jsx)(n.h3,{id:"paddle-sandbox-account",children:"Paddle Sandbox Account"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sandbox-vendors.paddle.com",children:"Create a Paddle Sandbox account here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"paddle-sandbox-product",children:"Paddle Sandbox Product"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'In Catalog > Products, create a product. This will be the name of the application\nyou\'re selling. For example, "Nexus".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add prices for the product. You'll need to add a monthly and annual price. Note\nthe Price IDs for each, and add them to your .env file:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PLAN_UNLIMITED_MONTHLY_ID=\nPLAN_UNLIMITED_ANNUAL_ID=\n"})}),"\n",(0,t.jsx)(n.h3,{id:"paddle-sandbox-webhook",children:"Paddle Sandbox Webhook"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In Developer Tools > Notifications, create a webhook. This will be used to receive\nnotifications from Paddle. Add your domain name to the URL:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://YOUR_DOMAIN_HERE/paddle/webhook\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add the secret key to your .env file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PADDLE_WEBHOOK_SECRET=(your secret key from webhook)\n"})}),"\n",(0,t.jsx)(n.p,{children:"As noted above, you can use http (unsecured) for your local environment. Using SSL/TLS\nis optional and will require additional setup outside the scope of this document."}),"\n",(0,t.jsx)(n.p,{children:"The webhook should send the following events:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- transaction.completed\n- transaction.updated\n- subscription.activated\n- subscription.canceled\n- subscription.created\n- subscription.paused\n- subscription.updated\n- customer.updated\n"})}),"\n",(0,t.jsx)(n.h3,{id:"paddle-authentication-code",children:"Paddle Authentication Code"}),"\n",(0,t.jsx)(n.p,{children:"In Developer Tools > Authentication, create an authentication code. This will be used\nto help secure your sandbox and validate your requests. Add the code to your .env file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PADDLE_AUTH_CODE=(your auth code)\n"})}),"\n",(0,t.jsx)(n.p,{children:"From the same page, you can see your Seller ID. Add it to your .env file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PADDLE_SELLER_ID=(your seller ID)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-spark--paddle",children:"Install Spark + Paddle"}),"\n",(0,t.jsx)(n.h3,{id:"composer-require",children:"Composer Require"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://spark.laravel.com/docs/10.0/installation",children:"See Laravel Spark Installation Docs"}),"\nfor the latest procedure. This will require some manual editing of composer.json as well\nas an interactive login during the first run of composer."]}),"\n",(0,t.jsx)(n.p,{children:"After having done so successfully, you'll be prompted to generate an auth.json file. If\nyou choose to do so, add it to your .gitignore so you're not committing your credentials.\nThis will allow your local system to automatically authenticate with Spark."}),"\n",(0,t.jsx)(n.p,{children:"In your CI/CD pipeline, you'll dynamically generate an auth.json file (probably from\na vault like Secrets Manager or Github Secrets) before calling composer install. This\nwill allow your CI/CD pipeline to authenticate with Spark."}),"\n",(0,t.jsx)(n.h2,{id:"configure-spark",children:"Configure Spark"}),"\n",(0,t.jsx)(n.h3,{id:"app-configuration",children:"App Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"config/spark.php"}),", create a reference to your product. Ensure that the plan IDs\nline up with the Price IDs you captured from the Spark sandbox."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add some features to the features array. These will be displayed when users are\nviewing the product & pricing options."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"billable-users",children:"Billable Users"}),"\n",(0,t.jsx)(n.p,{children:"We're going to use the default Laravel authentication guard (web), expecting a User\nmodel (users table). We'll use the default Laravel User model."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add the Spark/Billable trait to the User model (don't replace your other traits):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Laravel\\Spark\\Billable;\n\nclass User extends Authenticatable\n{\n    use Billable;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"non-billable-users",children:"Non-Billable Users"}),"\n",(0,t.jsx)(n.p,{children:"Alternative user types should NOT extend the user model but should use the Authenticatable\ntrait. These alternative user tables and types should be created in the Tenant context.\nThis means we place our migrations into the tenant/ sub-folder and execute on tenant creation."}),"\n",(0,t.jsx)(n.h2,{id:"test-the-system",children:"Test The System"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"http://localhost/account",children:"http://localhost/account"})," and sign up for an account. After signing up,\nyou should land on the account panel."]}),"\n",(0,t.jsxs)(n.p,{children:["Open a new tab and navigate to ",(0,t.jsx)(n.a,{href:"http://localhost/billing",children:"http://localhost/billing"}),". You should see a message\nthat indicates you're on a free trial, with an expiration date. You'll have the\noption to choose a plan and submit payment information."]}),"\n",(0,t.jsx)(n.p,{children:"Check your Paddle dashboard. Go to notifications and look at the webhook log to\nensure that everything is flowing through correctly."}),"\n",(0,t.jsx)(n.p,{children:"If all of this happened without error, you're ready to start building your\nSaas app! If you had to take any other steps, please submit a PR to help\ncorrect this documentation."}),"\n",(0,t.jsx)(n.p,{children:'You can safely follow any existing documentation for Laravel, Spark, Filament, or Tenancy\nmoving forward. We\'ve intentionally made no changes core functionality and tried hard\nto adhere to "the Laravel way" where possible.'}),"\n",(0,t.jsx)(n.p,{children:"If you see an opportunity for improvement, please share with us!"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var t=o(7294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);