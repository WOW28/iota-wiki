"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10488],{46442:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return h}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",keywords:["channels","authorize channel","subscribe channel","read channel","validate channel data"]},s="Search Channel and Validate Data",c={unversionedId:"examples/search-channel-and-validate-data",id:"examples/search-channel-and-validate-data",title:"Search Channel and Validate Data",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",source:"@site/external/integration-services/documentation/docs/examples/search-channel-and-validate-data.md",sourceDirName:"examples",slug:"/examples/search-channel-and-validate-data",permalink:"/integration-services/examples/search-channel-and-validate-data",editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/examples/search-channel-and-validate-data.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",keywords:["channels","authorize channel","subscribe channel","read channel","validate channel data"]},sidebar:"docs",previous:{title:"Authorize Channel",permalink:"/integration-services/examples/authorize-to-channel"},next:{title:"Integration Services API Documentation",permalink:"/integration-services/api_reference"}},d={},p=[{value:"Validate Channel&#39;s Data",id:"validate-channels-data",level:2}],u={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-channel-and-validate-data"},"Search Channel and Validate Data"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/node/examples/5-SearchChannelAndValidateData.ts"},"example-7"),"\nscript is similar to previous example (",(0,i.kt)("a",{parentName:"p",href:"authorize-to-channel"},"Authorize Channel"),") that creates a channel as ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner")," and authorizes a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," to write on it but:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," sends some data on the channel."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," receives data and ",(0,i.kt)("em",{parentName:"li"},"modifies it"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," validates the tampered data. However, the API will recognize that data are not valid by using the Tangle and data signatures (i.e. signatures not match). ")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-7\n")),(0,i.kt)("h2",{id:"validate-channels-data"},"Validate Channel's Data"),(0,i.kt)("p",null,"Since the signature do not match ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," is a set of tampered data, so the validation will notify it when running the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Now try to validate the manipulated data\nconst validationResult2 = await userClient.validate(channelAddress, results);\n")))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);