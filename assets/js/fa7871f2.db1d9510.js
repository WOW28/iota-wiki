"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94674],{95273:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return h},toc:function(){return p},default:function(){return d}});var n=o(83117),a=o(80102),i=(o(67294),o(3905)),s=["components"],r={description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/protocol_specification/layers.png",keywords:["network layer","node","message","ledger state","data flow","past cone","future cone","timestamp","opinion setting","strong tip","tip pool"]},c="Components of the Protocol",l={unversionedId:"protocol_specification/components/overview",id:"protocol_specification/components/overview",title:"Components of the Protocol",description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",source:"@site/external/goshimmer/documentation/docs/protocol_specification/components/overview.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/overview",permalink:"/goshimmer/protocol_specification/components/overview",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/protocol_specification/components/overview.md",tags:[],version:"current",frontMatter:{description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/protocol_specification/layers.png",keywords:["network layer","node","message","ledger state","data flow","past cone","future cone","timestamp","opinion setting","strong tip","tip pool"]},sidebar:"docs",previous:{title:"Protocol High-level Overview",permalink:"/goshimmer/protocol_specification/protocol"},next:{title:"Tangle",permalink:"/goshimmer/protocol_specification/components/tangle"}},h={},p=[{value:"Network Layer",id:"network-layer",level:2},{value:"Communication Layer",id:"communication-layer",level:2},{value:"(Decentralized) Application Layer",id:"decentralized-application-layer",level:2},{value:"Data Flow - Overview",id:"data-flow---overview",level:2},{value:"Message Factory",id:"message-factory",level:3},{value:"Parser",id:"parser",level:3},{value:"Storage",id:"storage",level:3},{value:"Solidifier",id:"solidifier",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"Booker",id:"booker",level:3},{value:"Consensus Mechanism",id:"consensus-mechanism",level:3},{value:"Tip Manager",id:"tip-manager",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components-of-the-protocol"},"Components of the Protocol"),(0,i.kt)("p",null,"This section provides a high-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements: a P2P overlay network, an immutable data structure, and a consensus mechanism. We abstract these three elements into layers, where\u2014similarly to other architectures\u2014upper layers build on the functionality provided by the layers below them. The definition of the different layers is merely about the convenience of creating a clear separation of concerns."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(29665).Z},(0,i.kt)("img",{loading:"lazy",alt:"Components of the Protocol",src:o(93703).Z,title:"Components of the Protocol",width:"965",height:"657"}))),(0,i.kt)("h2",{id:"network-layer"},"Network Layer"),(0,i.kt)("p",null,"The network is maintained by the network layer modules, which can be characterized as a pure P2P overlay network, meaning that it is a system that runs on top of another network (e.g., the internet), and where all nodes have the same roles and perform the same actions (in contrast to client-server systems). GoShimmer's Network Layer consists of three basic modules: the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/autopeering#peer-discovery"},"peer discovery")," module (which provides a list of nodes actively using the network), and the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/autopeering#neighbor-selection"},"neighbor selection")," module (also known as autopeering), which actually selects peers. Finally, the P2P Communication manages a node's neighbors, either selected via ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/autopeering"},"autopeering")," or ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/tutorials/manual_peering"},"manual peering"),"."),(0,i.kt)("h2",{id:"communication-layer"},"Communication Layer"),(0,i.kt)("p",null,"The communication layer concerns the information propagated through the network layer, which is contained in objects called messages. This layer forms a DAG with messages as vertices called the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle"},"Tangle"),": a replicated, shared and distributed data structure that emerges\u2014through a combination of deterministic rules, cooperation, and virtual voting.\nSince nodes have finite capabilities, the number of messages that the network can process is limited. Thus, the network might become overloaded, either simply because of honest heavy usage or because of malicious (spam) attacks. To protect the network from halting or even from getting inconsistent, the rate control (currently a static PoW) and ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/congestion_control"},"congestion control")," modules control when and how many messages can be gossiped."),(0,i.kt)("h2",{id:"decentralized-application-layer"},"(Decentralized) Application Layer"),(0,i.kt)("p",null,"On top of the communication layer lives the application layer. Anybody can develop applications that run on this layer, and nodes can choose which applications to run. Of course, these applications can also be dependent on each other.\nThere are several core applications that must be run by all nodes, as the value transfer applications, which maintains the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/ledgerstate"},"ledger state")," (including  advanced ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/advanced_outputs"},"output types"),"), and a quantity called ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/mana"},"Mana"),", that serves as a scarce resource as our Sybil protection mechanism.\nAdditionally, all nodes must run what we call the consensus applications, which regulate timestamps in the messages and resolve conflicts.\nThe consensus mechanism implemented in GoShimmer is leaderless and consists out of multiple components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},"Approval Weight")," is an objective measure to determine the grade of finality of messages and branches based on ",(0,i.kt)("a",{parentName:"li",href:"/goshimmer/protocol_specification/components/consensus_mechanism#Active-cMana"},"active cMana"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/goshimmer/protocol_specification/components/consensus_mechanism#modular-conflict-selection-function"},"Modular Conflict Selection Function")," is an abstraction on how a node sets an initial opinion on conflicts based on the .")),(0,i.kt)("h2",{id:"data-flow---overview"},"Data Flow - Overview"),(0,i.kt)("p",null,"The diagram below represents the interaction between the different modules in the protocol (",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/implementation_design/event_driven_model"},"event driven"),"). Each blue box represents a component of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/develop/packages/tangle"},"Tangle codebase"),", which has events (in yellow boxes) that belong to it. Those events will trigger methods (the green boxes), that can also trigger other methods. This triggering is represented by the arrows in the diagram. Finally, the purple boxes represent events that do not belong to the component that triggered them."),(0,i.kt)("p",null,"As an example, take the Parser component. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessGossipMessage")," will trigger the method ",(0,i.kt)("inlineCode",{parentName:"p"},"Parse"),", which is the only entry to the component. There are three possible outcomes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),": triggering a ",(0,i.kt)("inlineCode",{parentName:"p"},"ParsingFailed")," event, a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageRejected")," event, or a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageParsed")," event. In the last case, the event will trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"StoreMessage")," method (which is the entry to the Storage component), whereas the first two events do not trigger any other component."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(51085).Z},(0,i.kt)("img",{loading:"lazy",alt:"Data Flow - Overview",src:o(95757).Z,title:"Data Flow - Overview",width:"3822",height:"3302"}))),(0,i.kt)("p",null,"We call this the data flow, i.e., the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/protocol"},"life cycle of a message"),", from message reception (meaning that we focus here on the point of view of a node receiving a message issued by another node) up until acceptance in the Tangle. Notice that any message, either created locally by the node or received from a neighbor needs to pass through the data flow."),(0,i.kt)("h3",{id:"message-factory"},"Message Factory"),(0,i.kt)("p",null,"The IssuePayload function creates a valid payload which is provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateMessage")," method, along with a set of parents chosen with the Tip Selection Algorithm. Then, the Message Factory component is responsible to find a nonce compatible with the PoW requirements defined by the rate control module. Finally, the message is signed. Notice that the message generation should follow the rates imposed by the rate setter, as defined in ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/congestion_control#rate-setting"},"rate setting"),"."),(0,i.kt)("h3",{id:"parser"},"Parser"),(0,i.kt)("p",null,"The first step after the arrival of the message to the message inbox is the parsing, which consists of the following different filtering processes (meaning that the messages that don't pass these steps will not be stored):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bytes filter"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Recently Seen Bytes: it compares the incoming messages with a pool of recently seen bytes to filter duplicates."),(0,i.kt)("li",{parentName:"ol"},"PoW check: it checks if the PoW requirements are met, currently set to the message hash starting with 22 zeroes.")),(0,i.kt)("p",null,"Followed by the bytes filters, the received bytes are parsed into a message and its corresponding payload and ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle#syntactical-validation"},"syntactically validated"),". From now on, the filters operate on message objects rather than just bytes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Message filter"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Signature check: it checks if the message signature is valid."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/goshimmer/protocol_specification/components/tangle#message-timestamp-vs-transaction-timestamp"},"Timestamp Difference Check for transactions"),": it checks if the timestamps of the payload, and the message are consistent with each other")),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Only messages that pass the Parser are stored, along with their metadata. Additionally, new messages are stored as approvers of their parents, i.e., a reverse mapping that enables us to walk the Tangle into the future cone of a message."),(0,i.kt)("h3",{id:"solidifier"},"Solidifier"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle#Solidification"},"Solidification")," is the process of requesting missing messages. In this step, the node checks if all the past cone of the message is known; in the case that the node realizes that a message in the past cone is missing, it sends a request to its neighbors asking for that missing message. This process is recursively repeated until all of a message's past cone up to the genesis (or snapshot) becomes known to the node.\nThis way, the protocol enables any node to retrieve the entire message history, even for nodes that have just joined the network."),(0,i.kt)("h3",{id:"scheduler"},"Scheduler"),(0,i.kt)("p",null,"The scheduler makes sure that the network as a whole can operate with maximum throughput and minimum delays while providing consistency, fairness (according to aMana), and security. It, therefore, regulates the allowed influx of messages to the network as a ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/congestion_control"},"congestion-control mechanism"),"."),(0,i.kt)("h3",{id:"booker"},"Booker"),(0,i.kt)("p",null,"After scheduling, the message goes to the booker. This step is different between messages that contain a transaction payload and messages that do not contain it."),(0,i.kt)("p",null,"In the case of a non-transaction payload, booking into the Tangle occurs after the conflicting parents branches check, i.e., after checking if the parents' branches contain sets of (two or more) transactions that belong to the same conflict set. In the case of this check not being successful, the message is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," and not booked."),(0,i.kt)("p",null,"In the case of a transaction as payload, initially, the following check is done:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"UTXO check: it checks if the inputs of the transaction were already booked. If the message does not pass this check, the message is not booked. If it passes the check, it goes to the next block of steps."),(0,i.kt)("li",{parentName:"ol"},"Balances check: it checks if the sum of the values of the generated outputs equals the sum of the values of the consumed inputs. If the message does not pass this check, the message is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Unlock conditions: checks if the unlock conditions are valid. If the message does not pass this check, the message is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Inputs' branches validity check: it checks if all the consumed inputs belong to a valid branch. If the message does not pass this check, the message is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step.")),(0,i.kt)("p",null,"After the objective checks, the following subjective checks are done:"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Inputs\' branches rejection check: it checks if all the consumed inputs belong to a non-rejected branch. Notice that this is not an objective check, so the node is susceptible (even if with a small probability) to have its opinion about rejected branches changed by a reorganization. For that reason, if the message does not pass this check, the message is booked into the Tangle and ledger state (even though the balances are not altered by this message, since it will be booked to a rejected branch). This is what we call "lazy booking", which is done to avoid huge re-calculations in case of a reorganization of the ledger. If it passes the check, it goes to the next step.'),(0,i.kt)("li",{parentName:"ol"},"Double spend check: it checks if any of the inputs is conflicting with a transaction that was already confirmed. As in the last step, this check is not objective and, thus, if the message does not pass this check, it is lazy booked into the Tangle and ledger state, into an invalid branch. If it passes the check, it goes to the next step.")),(0,i.kt)("p",null,"At this point, the missing steps are the most computationally expensive:"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Inputs' conflicting branches check: it checks if the branches of the inputs are conflicting. As in the last step, if the message does not pass this check, the message is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Conflict check: it checks if the inputs are conflicting with an unconfirmed transaction. In this step, the branch to which the message belongs is computed. In both cases (passing the check or not), the transaction is booked into the ledger state and the message is booked into the Tangle, but its branch ID will be different depending on the outcome of the check.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(64105).Z},(0,i.kt)("img",{loading:"lazy",alt:"Booker",src:o(1493).Z,title:"Booker",width:"1822",height:"621"}))),(0,i.kt)("p",null,"Finally, after a message is booked, it might become a ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/markers"},"marker")," (depending on the marker policy) and can be gossiped."),(0,i.kt)("h3",{id:"consensus-mechanism"},"Consensus Mechanism"),(0,i.kt)("p",null,"A detailed description can be found ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/consensus_mechanism"},"here"),"."),(0,i.kt)("h3",{id:"tip-manager"},"Tip Manager"),(0,i.kt)("p",null,"The first check done in the tip manager is the eligibility check (i.e., subjective timestamp is ok), after passing it, a message is said to be ",(0,i.kt)("inlineCode",{parentName:"p"},"eligible")," for tip selection (otherwise, it's ",(0,i.kt)("inlineCode",{parentName:"p"},"not eligible"),").\nIf a message is eligible for ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle#tsa"},"tip selection")," and its payload is ",(0,i.kt)("inlineCode",{parentName:"p"},"liked"),", along with all its weak past cone, the message is added to the strong tip pool and its parents are removed from the strong tip pool. If a message is eligible for tip selection, its payload is ",(0,i.kt)("inlineCode",{parentName:"p"},"liked")," but its branch is not liked it is added to the weak tip pool."))}d.isMDXComponent=!0},64105:function(e,t,o){t.Z=o.p+"assets/files/booker-b4b40d422eb236f9bd7bc84724245725.png"},51085:function(e,t,o){t.Z=o.p+"assets/files/data-flow-ddec65cfe6be1a0e178ffdcf785e39fc.png"},29665:function(e,t,o){t.Z=o.p+"assets/files/layers-8fa7d412981883f7a41d753629f40bab.png"},1493:function(e,t,o){t.Z=o.p+"assets/images/booker-b4b40d422eb236f9bd7bc84724245725.png"},95757:function(e,t,o){t.Z=o.p+"assets/images/data-flow-ddec65cfe6be1a0e178ffdcf785e39fc.png"},93703:function(e,t,o){t.Z=o.p+"assets/images/layers-8fa7d412981883f7a41d753629f40bab.png"},3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=l(o),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(g,s(s({ref:t},h),{},{components:o})):n.createElement(g,s({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);