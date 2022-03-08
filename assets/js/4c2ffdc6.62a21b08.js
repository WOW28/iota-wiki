"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35598],{30658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return d},assets:function(){return m},toc:function(){return p},default:function(){return h}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=n(76018),l=n(71871),u=["components"],s={keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",image:"/img/logo/WASP_logo_dark.png"},i="The Common Account",d={unversionedId:"guide/core_concepts/accounts/the-common-account",id:"guide/core_concepts/accounts/the-common-account",title:"The Common Account",description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/accounts/the-common-account.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/the-common-account",permalink:"/smart-contracts/guide/core_concepts/accounts/the-common-account",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/accounts/the-common-account.mdx",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"View Account Balances",permalink:"/smart-contracts/guide/core_concepts/accounts/view-account-balances"},next:{title:"On-ledger Requests",permalink:"/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests"}},m={},p=[{value:"Parameters",id:"parameters",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-common-account"},"The Common Account"),(0,a.kt)("p",null,"The common account is controlled by the chain owner (defined in the chain root contract)."),(0,a.kt)("p",null,"This account is used to store funds collected by fees, or sent to the chain L1 address, or to invalid contracts. (this way the funds are not permanently lost)"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParamWithdrawAmount")," - the amount to harvest (defaults to 0, which means all available funds)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParamWithdrawColor")," - color of the tokens to harvest (defaults to normal iotas)")),(0,a.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncHarvest.Name)\n_, err := chain.PostRequestSync(req.WithIotas(1), wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(l.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"w := coreaccounts.ScFuncs.Harvest(ctx.Sign(wallet))\nw.Func.TransferIotas(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let h = coreaccounts::ScFuncs::harvest(ctx);\nh.func.transfer_iotas(1).post_to_chain(chainID);\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"w := coreaccounts.ScFuncs.Harvest(ctx)\nw.Func.TransferIotas(1).PostToChain(chainID)\n")))))}h.isMDXComponent=!0},71871:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(83117),o=n(67294),a=n(5730),c=n(10109),l=n(86010),u="tabItem_LplD";function s(e){var t,n,a,s=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.UB)(),w=y.tabGroupChoices,k=y.setTabGroupChoices,T=(0,o.useState)(g),x=T[0],N=T[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var P=w[p];null!=P&&P!==x&&v.some((function(e){return e.value===P}))&&N(P)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==x&&(E(t),N(r),null!=p&&k(p,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:S,onClick:S},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function i(e){var t=(0,a.Z)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);