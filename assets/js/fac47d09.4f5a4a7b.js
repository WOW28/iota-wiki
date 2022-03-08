"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98722],{21998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return g}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"This section will guide in setting up the Integration Service API using Docker Compose.",keywords:["docker compose","setup API","configure","mongo-init.js",".env"]},l="Local Setup",c={unversionedId:"getting_started/installation/docker_compose/docker_compose",id:"getting_started/installation/docker_compose/docker_compose",title:"Local Setup",description:"This section will guide in setting up the Integration Service API using Docker Compose.",source:"@site/external/integration-services/documentation/docs/getting_started/installation/docker_compose/docker_compose.md",sourceDirName:"getting_started/installation/docker_compose",slug:"/getting_started/installation/docker_compose/",permalink:"/integration-services/getting_started/installation/docker_compose/",editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/getting_started/installation/docker_compose/docker_compose.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will guide in setting up the Integration Service API using Docker Compose.",keywords:["docker compose","setup API","configure","mongo-init.js",".env"]},sidebar:"docs",previous:{title:"Expose APIs",permalink:"/integration-services/getting_started/installation/kubernetes/expose_apis"},next:{title:"Expose APIs",permalink:"/integration-services/getting_started/installation/docker_compose/expose_apis"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Download the Project",id:"download-the-project",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run Integration Services API",id:"run-integration-services-api",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-setup"},"Local Setup"),(0,o.kt)("p",null,"This section will guide in setting up the Integration Service API using Docker Compose."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Please make sure to have the following installed before moving forward:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose"))),(0,o.kt)("h2",{id:"download-the-project"},"Download the Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the project by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/integration-services.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change directory into the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," folder in your freshly cloned project by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd integration-services/api\n")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"If this is your first time installing the project, please make a copy of\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/api/.env.example"},".env.example file")," and rename it\nas ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),", and also copy\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/api/mongo-init.js.example"},"mongo-init.js.example file"),"\nand rename it as ",(0,o.kt)("inlineCode",{parentName:"p"},"mongo-init.js"),"."),(0,o.kt)("p",null,"After you have done this, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"db-user"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"db-password"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dn-name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"server-secret")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"optional-api-key")," in the\nnewly created ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mongo-init.js")," files accordingly."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Important The ",(0,o.kt)("inlineCode",{parentName:"p"},"server-secret")," must be 32 characters length"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can create a server secret using the following command ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"npm run generate-secret\n")))),(0,o.kt)("p",null,"Here is an example of how a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"PORT=3000\nIOTA_PERMA_NODE=https://chrysalis-chronicle.iota.org/api/mainnet/\nIOTA_HORNET_NODE=https://chrysalis-nodes.iota.org:443\n\nDATABASE_NAME=integration-services\nMONGO_INITDB_ROOT_USERNAME=root\nMONGO_INITDB_ROOT_PASSWORD=rootpassword\nDATABASE_URL=mongodb://root:rootpassword@mongo:27017\n\nSERVER_SECRET=7w9gfhb123jngh4gd53z465fewcs569e\nAPI_KEY=4ed59704-9a26-11ec-a749-3f57454709b9\n")),(0,o.kt)("p",null,"Here is an example of how a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"mongo-init.js")," file should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.createUser(\n    {\n        user: "root",\n        pwd: "rootpassword",\n        roles: [\n            {\n                role: "readWrite",\n                db: "integration-services"\n            }\n        ]\n    }\n);\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that you use the same value for the same variables inside ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mongo-init.js")))),(0,o.kt)("h2",{id:"run-integration-services-api"},"Run Integration Services API"),(0,o.kt)("p",null,"You can start the Integration Services API by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --env-file .env up --build\n")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);