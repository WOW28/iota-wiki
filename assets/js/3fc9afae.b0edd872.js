"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13176],{7647:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return p}});var a=t(83117),s=t(80102),r=(t(67294),t(3905)),i=["components"],o={description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},l="Overview",c={unversionedId:"overview",id:"overview",title:"Overview",description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",source:"@site/external/streams/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/streams/overview",editUrl:"https://github.com/iotaledger/streams/edit/develop/external/streams/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/streams/welcome"},next:{title:"Getting Started",permalink:"/streams/getting_started"}},u={},h=[{value:"Authors",id:"authors",level:2},{value:"Subscribers",id:"subscribers",level:2},{value:"Branching",id:"branching",level:2},{value:"Keyloads",id:"keyloads",level:2},{value:"Public Keys",id:"public-keys",level:3},{value:"Pre-Shared Keys",id:"pre-shared-keys",level:3},{value:"Sequencing",id:"sequencing",level:2},{value:"Single Branch Sequencing",id:"single-branch-sequencing",level:3},{value:"Multi Branch Sequencing",id:"multi-branch-sequencing",level:3}],d={toc:h};function p(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The IOTA Streams framework is intended to be a secure message verification and protection protocol\nfor sending data over a given transport layer. "),(0,r.kt)("p",null,"The Channels protocol is designed as a replacement for the previously used MAM library for sending\ndata using the Tangle as the primary transportation mechanism. The channels themselves can be\nstructured in a number of ways with any arbitrary combination of publishers and subscribers (although\neach channel can only be hosted by a single author instance)"),(0,r.kt)("h1",{id:"channels-protocol"},"Channels Protocol"),(0,r.kt)("p",null,"The Channels protocol provides the high level API tools necessary for authors and subscribers to be\ngenerated and interact with the Tangle. "),(0,r.kt)("h2",{id:"authors"},"Authors"),(0,r.kt)("p",null,"A channel author is responsible for the generation of a new channel along with the configuration of the\nintended structure of that channel (i.e single branch vs multi branch). An author of a channel will be\nable to set the access restrictions to branches within a channel structure, as well as accepting and\nmanaging user subscription messages. "),(0,r.kt)("h2",{id:"subscribers"},"Subscribers"),(0,r.kt)("p",null,"A channel subscriber is any user within a channel that is not the author. A subscriber can be generated\nindependently without verification by an author, but in order to write to a branch, or to process any\nprivate streams, they will be required to subscribe to the channel, and have the author accept and process\nthat subscription. A subscriber may also use pre-shared keys instead of subscription as a method of\ninteracting with a stream without conducting a subscription process. "),(0,r.kt)("h2",{id:"branching"},"Branching"),(0,r.kt)("p",null,"Branches can be defined as any sequential grouping of messages that are linked to the announcement\nmessage. These branches will typically be generated with either a signed packet message or a keyload message for\npublic and private streaming respectively. A channel can assume two different forms: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single branch: a linear sequencing of messages (similar to a MAM stream) with each message linked to\nthe previous one."),(0,r.kt)("li",{parentName:"ul"},"Multi branch: a sequencing of messages that does not rely on sequential linking of messages.")),(0,r.kt)("p",null,"When generating a channel, the author will decide whether the channel will use single branching or multi-\nbranching, this will inform the Streams instance in which way it should perform sequencing. subscribers will\nalso be informed as they process the announcement message, so their instances know the appropriate\nsequencing order as well.   "),(0,r.kt)("h2",{id:"keyloads"},"Keyloads"),(0,r.kt)("p",null,"A keyload message is an access restriction and control message that allows the author to specify who should be\nable to decrypt any messages that are attached following it. There are two ways to specify access when generating\na keyload message: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscriber public keys  "),(0,r.kt)("li",{parentName:"ul"},"Pre-shared keys ")),(0,r.kt)("h3",{id:"public-keys"},"Public Keys"),(0,r.kt)("p",null,"During the processing of subscription messages, public keys are masked and provided to the author to be stored on\ntheir instance. That author can then specify which of these users will be able to access subsequent messages by\nincluding that public key in the keyload message."),(0,r.kt)("h3",{id:"pre-shared-keys"},"Pre-Shared Keys"),(0,r.kt)("p",null,"A predefined key shared amongst users by other means then the subscription process above. These keys can be used to provide access restrictions to a stream\nwithout the need for a subscription process. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The security and transportation of these pre-shared keys must be ensured by the user implementations."))),(0,r.kt)("h2",{id:"sequencing"},"Sequencing"),(0,r.kt)("p",null,"Sequencing is the methodology built within streams to allow message identifiers to be sequentially generated regardless\nof the shape of the channel. Messages are identified by an indexation position within the Tangle, and they are\ngenerated using a combination of these pieces of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application instance (channel identifier)."),(0,r.kt)("li",{parentName:"ul"},"Public key of the publisher."),(0,r.kt)("li",{parentName:"ul"},"Previous message id (The message being linked to)."),(0,r.kt)("li",{parentName:"ul"},"Branch number (identifier for the specific branch)."),(0,r.kt)("li",{parentName:"ul"},"Sequencing number (the sequencing position of the publisher).")),(0,r.kt)("p",null,"As messages are posted to and read from the channel, a local state for the user implementation will update with the message\nidentifier, branch and sequencing numbers for each publishing party. This allows user implementations to derive and\nsearch for the next message in the sequence to keep in sync. "),(0,r.kt)("h3",{id:"single-branch-sequencing"},"Single Branch Sequencing"),(0,r.kt)("p",null,"In a single branch implementation, sequencing state of each user will be updated to the same state. This means that\nregardless of the publisher, the state of each user will update the previous message id to the new message link, and the\nsequencing number will be incremented by one. "),(0,r.kt)("p",null,"Sequence states before Msg1 is sent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"               Author        Sub1\nPrev Msg Id     Msg0         Msg0 \nBranch No.        0            0\nSeq. No.          2            2       <- Users start from 2, 0 and 1 are reserved for subscriptions and announcements\n")),(0,r.kt)("p",null,"Msg1 is then sent by the author using the above stated author state."),(0,r.kt)("p",null,"Sequence states after Msg1 is sent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"               Author        Sub1\nPrev Msg Id     Msg1         Msg1 \nBranch No.        0            0\nSeq. No.          3            3     \n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is recommended that a single branch be used with only a single publisher to avoid out of sync parties from\nissuing and retrieving messages from an incorrect sequencing combination (i.e. Sub1 sends a message linked to Msg1 and Sub2\nsends a message linked to that same Msg1 before seeing and registering the message from Sub1, thus forking the stream).\nMultiple publishers can be used, but it is important to ensure that they do not try to send messages in parallel to\navoid this conflict. In the future this may be an enforced limitation on single branch implementations to remove the\npossibility altogether."))),(0,r.kt)("h3",{id:"multi-branch-sequencing"},"Multi Branch Sequencing"),(0,r.kt)("p",null,"In a multi branch implementation, the sequencing state of each user will be updated independently after each message is sent.\nIn order to track the linking of messages of individual publishers within a tree-like structure, a secondary message is\nsent in tandem with every data message. This message is called a sequencing message, and contains the essence necessary\nfor a user to derive the correct message id of a sequenced message. The sequencing messages are issued to an anchored\nbranch generated during the creation of the channel. As a new message is generated by a user, a sequencing message is\nissued to this anchored branch to allow users a reference guide to the location of the issued data packet."))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=s,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);