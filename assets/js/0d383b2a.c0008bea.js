"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87769],{7258:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return s},toc:function(){return p},default:function(){return k}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={description:"The dRNG APIs provide methods to retrieve basic info about dRNG committees and randomness as well as to broadcast collective randomness beacon.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","drng","info","committee","randomness","collective beacon"]},d="dRNG API Methods",m={unversionedId:"apis/dRNG",id:"apis/dRNG",title:"dRNG API Methods",description:"The dRNG APIs provide methods to retrieve basic info about dRNG committees and randomness as well as to broadcast collective randomness beacon.",source:"@site/external/goshimmer/documentation/docs/apis/dRNG.md",sourceDirName:"apis",slug:"/apis/dRNG",permalink:"/goshimmer/apis/dRNG",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/apis/dRNG.md",tags:[],version:"current",frontMatter:{description:"The dRNG APIs provide methods to retrieve basic info about dRNG committees and randomness as well as to broadcast collective randomness beacon.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","drng","info","committee","randomness","collective beacon"]},sidebar:"docs",previous:{title:"Mana API Methods",permalink:"/goshimmer/apis/mana"},next:{title:"Snapshot API Methods",permalink:"/goshimmer/apis/snapshot"}},s={},p=[{value:"<code>/drng/collectiveBeacon</code>",id:"drngcollectivebeacon",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Body",id:"body",level:4},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - <code>BroadcastCollectiveBeacon</code>",id:"client-lib---broadcastcollectivebeacon",level:4},{value:"Response example",id:"response-example",level:3},{value:"Results",id:"results",level:3},{value:"<code>/drng/info/committee</code>",id:"drnginfocommittee",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"cURL",id:"curl-1",level:4},{value:"Client lib - <code>GetCommittee</code>",id:"client-lib---getcommittee",level:4},{value:"Response example",id:"response-example-1",level:3},{value:"Results",id:"results-1",level:3},{value:"<code>/drng/info/randomness</code>",id:"drnginforandomness",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"cURL",id:"curl-2",level:4},{value:"client lib - <code>GetRandomness</code>",id:"client-lib---getrandomness",level:4},{value:"Response example",id:"response-example-2",level:3},{value:"Results",id:"results-2",level:3}],c={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drng-api-methods"},"dRNG API Methods"),(0,l.kt)("p",null,"The dRNG APIs provide methods to retrieve basic info about dRNG committees and randomness as well as to broadcast collective randomness beacon."),(0,l.kt)("p",null,"HTTP APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#drngcollectivebeacon"},"/drng/collectiveBeacon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#drnginfocommittee"},"/drng/info/committee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#drnginforandomness"},"/drng/info/randomness"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---broadcastcollectivebeacon"},"BroadcastCollectiveBeacon()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getrandomness"},"GetRandomness()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getcommittee"},"GetCommittee()"))),(0,l.kt)("h2",{id:"drngcollectivebeacon"},(0,l.kt)("inlineCode",{parentName:"h2"},"/drng/collectiveBeacon")),(0,l.kt)("p",null,"Method: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,"Sends the given collective beacon (payload) by creating a message in the backend."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"payload")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"collective beacon payload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"base64 serialized bytes")))),(0,l.kt)("h4",{id:"body"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "collectiveBeaconBytes"\n}\n')),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/drng/collectiveBeacon' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"payload\": \"collectiveBeaconBytes\"}'\n")),(0,l.kt)("h4",{id:"client-lib---broadcastcollectivebeacon"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"BroadcastCollectiveBeacon")),(0,l.kt)("p",null,"Collective beacon can be broadcast using ",(0,l.kt)("inlineCode",{parentName:"p"},"BroadcastCollectiveBeacon(payload []byte) (string, error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"msgId, err := goshimAPI.BroadcastCollectiveBeacon(payload)\nif err != nil {\n    // return error\n}\n")),(0,l.kt)("h3",{id:"response-example"},"Response example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "messageID"\n}\n')),(0,l.kt)("h3",{id:"results"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID of beacon message. Omitted if error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"drnginfocommittee"},(0,l.kt)("inlineCode",{parentName:"h2"},"/drng/info/committee")),(0,l.kt)("p",null,"Returns the current dRNG committee used."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"curl-1"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/drng/info/committee\n")),(0,l.kt)("h4",{id:"client-lib---getcommittee"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetCommittee")),(0,l.kt)("p",null,"Available committees can be retrieved using ",(0,l.kt)("inlineCode",{parentName:"p"},"GetCommittee() (*jsonmodels.CommitteeResponse, error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'committees, err := goshimAPI.GetCommittee()\nif err != nil {\n    // return error\n}\n\n// list committees\nfor _, m := range committees.Committees {\n    fmt.Println("committee ID: ", m.InstanceID, "distributed PK:", m.DistributedPK)\n}\n')),(0,l.kt)("h3",{id:"response-example-1"},"Response example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "committees": [\n        {\n            "instanceID": 1,\n            "threshold": 3,\n            "identities": [\n                "AheLpbhRs1XZsRF8t8VBwuyQh9mqPHXQvthV5rsHytDG",\n                "FZ28bSTidszUBn8TTCAT9X1nVMwFNnoYBmZ1xfafez2z",\n                "GT3UxryW4rA9RN9ojnMGmZgE2wP7psagQxgVdA4B9L1P",\n                "4pB5boPvvk2o5MbMySDhqsmC2CtUdXyotPPEpb7YQPD7",\n                "64wCsTZpmKjRVHtBKXiFojw7uw3GszumfvC4kHdWsHga"\n            ],\n            "distributedPK": "884bc65f1d023d84e2bd2e794320dc29600290ca7c83fefb2455dae2a07f2ae4f969f39de6b67b8005e3a328bb0196de"\n        }\n    ]\n}\n')),(0,l.kt)("h3",{id:"results-1"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"committees")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]Committee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of DRNG committees.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type ",(0,l.kt)("inlineCode",{parentName:"li"},"Committee"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"instanceID")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The identifier of the dRAND instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"threshold")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The threshold of the secret sharing protocol.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"identities")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The nodes' identities of the committee members.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"distributedPK")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Distributed Public Key of the committee")))),(0,l.kt)("h2",{id:"drnginforandomness"},(0,l.kt)("inlineCode",{parentName:"h2"},"/drng/info/randomness")),(0,l.kt)("p",null,"Returns the current DRNG randomness used."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"curl-2"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/drng/info/randomness\n")),(0,l.kt)("h4",{id:"client-lib---getrandomness"},"client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetRandomness")),(0,l.kt)("p",null,"Current randomness from known committees can be retrieved using ",(0,l.kt)("inlineCode",{parentName:"p"},"GetRandomness() (*jsonmodels.RandomnessResponse, \nerror)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'randomness, err := goshimAPI.GetRandomness()\nif err != nil {\n    // return error\n}\n\n// list randomness\nfor _, m := range randomness.Randomness {\n    fmt.Println("committee ID: ", m.InstanceID, "Randomness:", m.Randomness)\n}\n')),(0,l.kt)("h3",{id:"response-example-2"},"Response example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "randomness": [\n        {\n            "instanceID": 1,\n            "round": 2461530,\n            "timestamp": "2021-05-24T18:06:20.394849622+02:00",\n            "randomness": "Kr5buSEtgLuPxZrax0HfoiougcOXS/75JOBu2Ld6peO77qdKiNyjDueXQZlPE0UCTKkVhehEvfIXhESK9DF3aQ=="\n        }\n    ]\n}\n')),(0,l.kt)("h3",{id:"results-2"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"randomness")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]Randomness")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of randomness")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type ",(0,l.kt)("inlineCode",{parentName:"li"},"Randomness"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"instanceID")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uint32")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The identifier of the dRAND instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"round")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uint64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current DRNG round.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"time.Time")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The timestamp of the current randomness message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"randomness")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current randomness as a slice of bytes")))))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,u=c["".concat(d,".").concat(k)]||c[k]||p[k]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);