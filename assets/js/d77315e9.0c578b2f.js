"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[52772],{73468:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),l=t(76018),o=t(71871),s=t(74606),d=t(8813),c=["components"],u={title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},p=void 0,m={unversionedId:"verifiable_credentials/create",id:"verifiable_credentials/create",title:"Create a Verifiable Credential",description:"Explain how a VC is created and verified",source:"@site/external/identity.rs/documentation/docs/verifiable_credentials/create.mdx",sourceDirName:"verifiable_credentials",slug:"/verifiable_credentials/create",permalink:"/identity.rs/verifiable_credentials/create",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/verifiable_credentials/create.mdx",tags:[],version:"current",frontMatter:{title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/verifiable_credentials/overview"},next:{title:"Revocation",permalink:"/identity.rs/verifiable_credentials/revoke"}},f={},v=[{value:"Example",id:"example",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3},{value:"Low-level API",id:"low-level-api",level:3}],h={toc:v};function g(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain how a VC is created and verified."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how you can create a Verifiable Credential and validate it. In this example, Alice takes the role of the subject, while we also have an issuer.\nThe issuer signs a UniversityDegreeCredential type verifiable credential with Alice's name and DID.\nThis Verifiable Credential can be verified by anyone, allowing Alice to take control of it and share it with anyone."),(0,r.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},d.Z),(0,r.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes subject and issuer DID\n//! Documents, then creates a Verifiable Credential (vc) specifying claims about the\n//! subject, and retrieves information through the CredentialValidator API.\n//!\n//! cargo run --example create_vc\n\nuse identity::credential::Credential;\nuse identity::crypto::SignatureOptions;\nuse identity::iota::CredentialValidation;\nuse identity::iota::Receipt;\nuse identity::iota::Resolver;\nuse identity::prelude::*;\n\nmod common;\nmod create_did;\n\npub async fn create_vc() -> Result<()> {\n  // Create a DID Document/KeyPair for the credential issuer (see create_did.rs).\n  let (issuer_doc, issuer_key, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // Create a DID Document/KeyPair for the credential subject (see create_did.rs).\n  let (subject_doc, _, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // Create an unsigned Credential with claims about `subject` specified by `issuer`.\n  let mut credential: Credential = common::issue_degree(&issuer_doc, &subject_doc)?;\n\n  // Sign the Credential with the issuer\'s private key.\n  issuer_doc.sign_data(\n    &mut credential,\n    issuer_key.private(),\n    issuer_doc.default_signing_method()?.id(),\n    SignatureOptions::default(),\n  )?;\n\n  println!("Credential JSON > {:#}", credential);\n\n  // Validate the verifiable credential\n  let resolver: Resolver = Resolver::new().await?;\n  let validation: CredentialValidation = common::check_credential(&resolver, &credential).await?;\n  println!("Credential Validation > {:#?}", validation);\n  assert!(validation.verified);\n\n  Ok(())\n}\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let _ = create_vc().await?;\n  Ok(())\n}\n')),(0,r.kt)(o.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, Config, Credential, SignatureOptions, VerifierOptions} from \'@iota/identity-wasm\';\nimport {createIdentity} from \'./create_did\';\nimport {manipulateIdentity} from \'./manipulate_did\';\n\n/**\n This example shows how to create a Verifiable Credential and validate it.\n In this example, alice takes the role of the subject, while we also have an issuer.\n The issuer signs a UniversityDegreeCredential type verifiable credential with Alice\'s name and DID.\n This Verifiable Credential can be verified by anyone, allowing Alice to take control of it and share it with whoever they please.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function createVC(clientConfig) {\n    // Create a default client configuration from the parent config network.\n    const config = Config.fromNetwork(clientConfig.network);\n\n    // Create a client instance to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    // Creates new identities (See "create_did" and "manipulate_did" examples)\n    const alice = await createIdentity(clientConfig);\n    const issuer = await manipulateIdentity(clientConfig);\n\n    // Prepare a credential subject indicating the degree earned by Alice\n    let credentialSubject = {\n        id: alice.doc.id.toString(),\n        name: "Alice",\n        degreeName: "Bachelor of Science and Arts",\n        degreeType: "BachelorDegree",\n        GPA: "4.0"\n    };\n\n    // Create an unsigned `UniversityDegree` credential for Alice\n    const unsignedVc = Credential.extend({\n        id: "https://example.edu/credentials/3732",\n        type: "UniversityDegreeCredential",\n        issuer: issuer.doc.id.toString(),\n        credentialSubject,\n    });\n\n    // Sign the credential with the Issuer\'s newKey\n    const signedVc = issuer.doc.signCredential(unsignedVc, {\n        method: issuer.doc.id.toString() + "#newKey",\n        public: issuer.newKey.public,\n        private: issuer.newKey.private,\n    }, SignatureOptions.default());\n\n    // Check if the credential is verifiable.\n    const result = await client.checkCredential(signedVc.toString(), VerifierOptions.default());\n\n    console.log(`VC verification result: ${result.verified}`);\n\n    return {alice, issuer, signedVc};\n}\n\nexport {createVC};\n'))))}g.isMDXComponent=!0},71871:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(83117),a=t(67294),r=t(5730),l=t(10109),o=t(86010),s="tabItem_LplD";function d(e){var n,t,r,d=e.lazy,c=e.block,u=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(n=null!=u?u:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),C=b.tabGroupChoices,w=b.setTabGroupChoices,_=(0,a.useState)(y),D=_[0],k=_[1],I=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=C[m];null!=S&&S!==D&&h.some((function(e){return e.value===S}))&&k(S)}var V=function(e){var n=e.currentTarget,t=I.indexOf(n),i=h[t].value;i!==D&&(x(n),k(i),null!=m&&w(m,i))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=I.indexOf(e.currentTarget)+1;t=I[i]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:D===n?0:-1,"aria-selected":D===n,key:n,ref:function(e){return I.push(e)},onKeyDown:T,onFocus:V,onClick:V},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":D===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(v.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==D})}))))}function c(e){var n=(0,r.Z)();return a.createElement(d,(0,i.Z)({key:String(n)},e))}},8813:function(e,n){n.Z='// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_signing\n\nuse std::path::PathBuf;\n\nuse identity::account::Account;\nuse identity::account::AccountStorage;\nuse identity::account::IdentitySetup;\nuse identity::account::Result;\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::core::Url;\nuse identity::credential::Credential;\nuse identity::credential::Subject;\nuse identity::crypto::KeyPair;\nuse identity::crypto::SignatureOptions;\nuse identity::did::verifiable::VerifierOptions;\nuse identity::did::DID;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::IotaDID;\nuse identity::iota::ResolvedIotaDocument;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // ===========================================================================\n  // Create Identity - Similar to create_did example\n  // ===========================================================================\n\n  // Stronghold settings\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".into();\n\n  // Create a new Account with stronghold storage.\n  let mut account: Account = Account::builder()\n    .storage(AccountStorage::Stronghold(stronghold_path, Some(password), None))\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // ===========================================================================\n  // Signing Example\n  // ===========================================================================\n\n  // Add a new Ed25519 Verification Method to the identity\n  account\n    .update_identity()\n    .create_method()\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Create a subject DID for the recipient of a `UniversityDegree` credential.\n  let subject_key: KeyPair = KeyPair::new_ed25519()?;\n  let subject_did: IotaDID = IotaDID::new(subject_key.public().as_ref())?;\n\n  // Create the actual Verifiable Credential subject.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": subject_did.as_str(),\n    "degree": {\n      "type": "BachelorDegree",\n      "name": "Bachelor of Science and Arts"\n    }\n  }))?;\n\n  // Issue an unsigned Credential...\n  let mut credential: Credential = Credential::builder(Default::default())\n    .issuer(Url::parse(account.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // ...and sign the Credential with the previously created Verification Method\n  account\n    .sign("key-1", &mut credential, SignatureOptions::default())\n    .await?;\n\n  println!("[Example] Local Credential = {:#}", credential);\n\n  // Fetch the DID Document from the Tangle\n  //\n  // This is an optional step to ensure DID Document consistency.\n  let resolved: ResolvedIotaDocument = account.resolve_identity().await?;\n\n  // Retrieve the DID from the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  // Ensure the resolved DID Document can verify the credential signature\n  let verified: bool = resolved\n    .document\n    .verify_data(&credential, &VerifierOptions::default())\n    .is_ok();\n\n  println!("[Example] Credential Verified = {}", verified);\n\n  Ok(())\n}\n'}}]);