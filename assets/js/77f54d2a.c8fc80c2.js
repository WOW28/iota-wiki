"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54117],{40249:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),s=["components"],i={keywords:["Rust","Go","TypeScript","WASM","memory space","smart contract state","API","Access","store","state"],description:"IOTA Smart Contracts provide a very flexible way of programming smart contracts by providing an API to a sandboxed environment that allows you to interact with IOTA Smart Contracts deterministically without any security risks.",image:"/img/wasm_vm/IscpHost.png"},c="Introduction to the Wasm VM for IOTA Smart Contracts",m={unversionedId:"guide/wasm_vm/intro",id:"guide/wasm_vm/intro",title:"Introduction to the Wasm VM for IOTA Smart Contracts",description:"IOTA Smart Contracts provide a very flexible way of programming smart contracts by providing an API to a sandboxed environment that allows you to interact with IOTA Smart Contracts deterministically without any security risks.",source:"@site/external/wasp/documentation/docs/guide/wasm_vm/intro.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/intro",permalink:"/smart-contracts/guide/wasm_vm/intro",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/wasm_vm/intro.mdx",tags:[],version:"current",frontMatter:{keywords:["Rust","Go","TypeScript","WASM","memory space","smart contract state","API","Access","store","state"],description:"IOTA Smart Contracts provide a very flexible way of programming smart contracts by providing an API to a sandboxed environment that allows you to interact with IOTA Smart Contracts deterministically without any security risks.",image:"/img/wasm_vm/IscpHost.png"},sidebar:"tutorialSidebar",previous:{title:"Testnet",permalink:"/smart-contracts/guide/chains_and_nodes/testnet"},next:{title:"Data Access Proxies",permalink:"/smart-contracts/guide/wasm_vm/proxies"}},l={},p=[{value:"Video Tutorial",id:"video-tutorial",level:2}],u={toc:p};function d(t){var e=t.components,i=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-the-wasm-vm-for-iota-smart-contracts"},"Introduction to the Wasm VM for IOTA Smart Contracts"),(0,o.kt)("p",null,"IOTA Smart Contracts provide a very flexible way of\nprogramming smart contracts by providing an API to a sandboxed environment\nthat allows you to interact with the IOTA Smart Contracts deterministically without any security risks.\nThe API provides a generic way to store, access, and modify the state of the smart\ncontract. The API can be used by any kind of Virtual Machine (VM) to implement a system to\nprogram, load, and run smart contracts on top of IOTA Smart Contracts. The actual VMs can be\nimplemented by whoever wants to create them."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(46158).Z},(0,o.kt)("img",{loading:"lazy",alt:"Wasp node IOTA Smart Contracts Host",src:a(27737).Z,width:"862",height:"452"}))),(0,o.kt)("p",null,"Of course, we provide an example implementation of such a VM to allow anyone to get\na taste of what it is like to program a smart contract for IOTA Smart Contracts. Our VM implementation\nuses ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," (Wasm) code as an intermediate compilation\ntarget. The implementation of the Wasm VM currently uses the open-source\n",(0,o.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"Wasmtime")," runtime environment. The Wasm VM enables dynamic\nloading and running of smart contracts that have been compiled to Wasm code."),(0,o.kt)("p",null,"We chose Wasm to be able to program smart contracts from any programming language. Since\nmore and more languages are becoming capable of generating the intermediate Wasm code this\nwill eventually allow developers to choose a language they are familiar with."),(0,o.kt)("p",null,"Because each Wasm code unit runs in its own memory space and cannot access anything\noutside that memory by design, Wasm code is ideally suited for secure smart contracts.\nThe Wasm runtime system will only provide access to external functionality that is needed\nfor the smart contracts to be able to do their thing, but nothing more. In our case, we\nonly provide access to the IOTA Smart Contracts host's sandbox API environment. The way we do that is by\nproviding a simple library that can be linked to the Wasm code. This library, for\nobvious reasons, has been named ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmLib")," for now."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(96908).Z},(0,o.kt)("img",{loading:"lazy",alt:"Wasm VM",src:a(24316).Z,width:"862",height:"452"}))),(0,o.kt)("p",null,"As you can see we can have any number of smart contracts running in our Wasm VM. Each\nsmart contract is a separately compiled Wasm code unit that contains its own copy of\nWasmLib embedded into it. Each WasmLib provides the IOTA Smart Contracts sandbox functionality to its\ncorresponding smart contract and knows how to access the underlying smart contract state\nstorage through the VM runtime system. This makes the IOTA Smart Contracts sandbox API access seamless to the\nsmart contract by hiding the details of bridging the gap between the smart contract's\nmemory space, and the IOTA Smart Contracts host's memory space. It also prevents the smart contract from\naccessing and/or modifying the IOTA Smart Contracts host's memory space directly."),(0,o.kt)("p",null,"The IOTA Smart Contracts sandbox environment enables the following functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access to smart contract metadata"),(0,o.kt)("li",{parentName:"ul"},"Access to parameter data for smart contract function calls"),(0,o.kt)("li",{parentName:"ul"},"Access to the smart contract state data"),(0,o.kt)("li",{parentName:"ul"},"A way to return result data to the caller of a smart contract function"),(0,o.kt)("li",{parentName:"ul"},"Access to tokens owned by the smart contract, and the ability to move them"),(0,o.kt)("li",{parentName:"ul"},"Ability to initiate or call other smart contract functions"),(0,o.kt)("li",{parentName:"ul"},"Access to logging functionality"),(0,o.kt)("li",{parentName:"ul"},"Access to several utility functions provided by the host")),(0,o.kt)("p",null,"The initial WasmLib implementation  was created for the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),"\nprogramming language. Rust had the most advanced and stable support for generating Wasm\ncode at the time when we started implementing our Wasm VM environment. In the meantime, we\nhave also implemented fully functional ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," implementations.\nThe Go implementation uses the ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"TinyGo")," compiler to generate Wasm\ncode.\nThe TypeScript implementation uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.assemblyscript.org/"},"AssemblyScript"),"\ncompiler to generate Wasm code."),(0,o.kt)("p",null,"All implementations use only a very small common subset of their host languages. This\nkeeps the coding style very similar, barring some syntactic idiosyncrasies. The reason for\nthis is that we wanted to make it as easy as possible for anyone to start working with our\nsmart contract system. If you have any previous experience in any C-style language you\nshould quickly feel comfortable writing smart contracts in any of the supported\nlanguages, without having to dive deeply into all aspects of the chosen language."),(0,o.kt)("p",null,"We will now dive deeper into the concepts that are central to WasmLib smart contract\nprogramming."),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Yaev4Cu1GW0",title:"Wasm Contract Deploy",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},46158:function(t,e,a){e.Z=a.p+"assets/files/IscpHost-121853959eafe2082cd64c0816913ff3.png"},96908:function(t,e,a){e.Z=a.p+"assets/files/WasmVM-9a26e82cb57ee61954a6569c88966d59.png"},27737:function(t,e,a){e.Z=a.p+"assets/images/IscpHost-121853959eafe2082cd64c0816913ff3.png"},24316:function(t,e,a){e.Z=a.p+"assets/images/WasmVM-9a26e82cb57ee61954a6569c88966d59.png"},3905:function(t,e,a){a.d(e,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),m=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(h,s(s({ref:e},l),{},{components:a})):n.createElement(h,s({ref:e},l))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);