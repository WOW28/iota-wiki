"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9267],{19291:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return d}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],s={description:"Frequently Asked Questions. What is GoShimmer?,  What Kind of Confirmation Time Can I Expect?, Where Can I See the State of the GoShimmer testnet?,How Many Transactions Per Second(TPS) can GoShimmer Sustain?, How is Spamming Prevented?, What Happens if I Issue a Double Spend?, Who's the Target Audience for Operating a GoShimmer Node?",image:"/img/logo/goshimmer_light.png",keywords:["average network delay","testnet","analysis","dashboard","vote","frequently asked questions","node software","double spend","transactions"]},m="FAQ",c={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently Asked Questions. What is GoShimmer?,  What Kind of Confirmation Time Can I Expect?, Where Can I See the State of the GoShimmer testnet?,How Many Transactions Per Second(TPS) can GoShimmer Sustain?, How is Spamming Prevented?, What Happens if I Issue a Double Spend?, Who's the Target Audience for Operating a GoShimmer Node?",source:"@site/external/goshimmer/documentation/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/goshimmer/faq",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/faq.md",tags:[],version:"current",frontMatter:{description:"Frequently Asked Questions. What is GoShimmer?,  What Kind of Confirmation Time Can I Expect?, Where Can I See the State of the GoShimmer testnet?,How Many Transactions Per Second(TPS) can GoShimmer Sustain?, How is Spamming Prevented?, What Happens if I Issue a Double Spend?, Who's the Target Audience for Operating a GoShimmer Node?",image:"/img/logo/goshimmer_light.png",keywords:["average network delay","testnet","analysis","dashboard","vote","frequently asked questions","node software","double spend","transactions"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/goshimmer/welcome"},next:{title:"Setting up a GoShimmer node",permalink:"/goshimmer/tutorials/setup"}},h={},u=[{value:"What is GoShimmer?",id:"what-is-goshimmer",level:2},{value:"What Kind of Confirmation Time Can I Expect?",id:"what-kind-of-confirmation-time-can-i-expect",level:2},{value:"Where Can I See the State of the GoShimmer testnet?",id:"where-can-i-see-the-state-of-the-goshimmer-testnet",level:2},{value:"How Many Transactions per Second (TPS) Can GoShimmer Sustain?",id:"how-many-transactions-per-second-tps-can-goshimmer-sustain",level:2},{value:"How is Spamming Prevented?",id:"how-is-spamming-prevented",level:2},{value:"What Happens if I Issue a Double Spend?",id:"what-happens-if-i-issue-a-double-spend",level:2},{value:"Who&#39;s the Target Audience for Operating a GoShimmer Node?",id:"whos-the-target-audience-for-operating-a-goshimmer-node",level:2}],l={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"what-is-goshimmer"},"What is GoShimmer?"),(0,i.kt)("p",null,"GoShimmer is a research and engineering project from the IOTA Foundation seeking to evaluate Coordicide concepts by implementing them in a node software."),(0,i.kt)("h2",{id:"what-kind-of-confirmation-time-can-i-expect"},"What Kind of Confirmation Time Can I Expect?"),(0,i.kt)("p",null,"Since non-conflicting transactions aren't even voted on, they materialize after 2x the average network delay parameter we set. This means that a transaction usually confirms within a time boundary of ~10 seconds."),(0,i.kt)("h2",{id:"where-can-i-see-the-state-of-the-goshimmer-testnet"},"Where Can I See the State of the GoShimmer testnet?"),(0,i.kt)("p",null,"You can access the global analysis dashboard in the ",(0,i.kt)("a",{parentName:"p",href:"http://analysisentry-01.devnet.shimmer.iota.cafe:28080/"},"Pollen Analyzer")," which showcases the network graph and active ongoing votes on conflicts."),(0,i.kt)("h2",{id:"how-many-transactions-per-second-tps-can-goshimmer-sustain"},"How Many Transactions per Second (TPS) Can GoShimmer Sustain?"),(0,i.kt)("p",null,"The transactions per second metric is irrelevant for the current development state of GoShimmer. We are evaluating components from Coordicide, and aren't currently interested in squeezing out every little ounce of performance. Since the primary goal is to evaluate Coordicide components, we value simplicity over optimization . Even if we would put out a TPS number, it would not reflect an actual metric in a finished production ready node software. "),(0,i.kt)("h2",{id:"how-is-spamming-prevented"},"How is Spamming Prevented?"),(0,i.kt)("p",null,"The Coordicide lays out concepts for spam prevention through the means of rate control and such. However, in the current version, GoShimmer relies on Proof of Work (PoW) to prevent over saturation of the network. Doing the PoW for a message will usually take a couple of seconds on commodity hardware."),(0,i.kt)("h2",{id:"what-happens-if-i-issue-a-double-spend"},"What Happens if I Issue a Double Spend?"),(0,i.kt)("p",null,"If issue simultaneous transactions spending the same funds, there is high certainty that your transaction will be rejected by the network. This rejection will block your funds indefinitely, though this may change in the future.  "),(0,i.kt)("p",null,"If you issue a transaction, await the average network delay, and then issue the double spend, then the first issued transaction should usually become confirmed, and the 2nd one rejected.  "),(0,i.kt)("h2",{id:"whos-the-target-audience-for-operating-a-goshimmer-node"},"Who's the Target Audience for Operating a GoShimmer Node?"),(0,i.kt)("p",null,"Our primary focus is testing out Coordicide components. We are mainly interested in individuals who have a strong IT background, rather than giving people of any knowledge-level the easiest way to operate a node. We welcome people interested in trying out the bleeding edge of IOTA development and providing meaningful feedback or problem reporting in form of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/issues/new/choose"},"issues"),"."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=r,p=l["".concat(m,".").concat(d)]||l[d]||u[d]||i;return n?o.createElement(p,a(a({ref:t},h),{},{components:n})):o.createElement(p,a({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);