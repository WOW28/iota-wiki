"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26293],{56382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),d=n(74606),a=["components"],c={title:"Secure DIDs",sidebar_label:"Secure"},s=void 0,l={unversionedId:"decentralized_identifiers/secure",id:"decentralized_identifiers/secure",title:"Secure DIDs",description:"TODO: Stronghold",source:"@site/external/identity.rs/documentation/docs/decentralized_identifiers/secure.mdx",sourceDirName:"decentralized_identifiers",slug:"/decentralized_identifiers/secure",permalink:"/identity.rs/decentralized_identifiers/secure",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/decentralized_identifiers/secure.mdx",tags:[],version:"current",frontMatter:{title:"Secure DIDs",sidebar_label:"Secure"},sidebar:"docs",previous:{title:"Update",permalink:"/identity.rs/decentralized_identifiers/update"},next:{title:"Resolve",permalink:"/identity.rs/decentralized_identifiers/resolve"}},u={},p=[{value:"Examples",id:"examples",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TODO: Stronghold"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,o.kt)(d.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_create\n\nuse std::path::PathBuf;\n\nuse identity::account::Account;\nuse identity::account::AccountStorage;\nuse identity::account::IdentitySetup;\nuse identity::account::Result;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Sets the location and password for the Stronghold\n  //\n  // Stronghold is an encrypted file that manages private keys.\n  // It implements best practices for security and is the recommended way of handling private keys.\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".into();\n\n  // Create a new identity using Stronghold as local storage.\n  //\n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let account: Account = Account::builder()\n    .storage(AccountStorage::Stronghold(stronghold_path, Some(password), None))\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // Retrieve the did of the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Print the local state of the DID Document\n  println!("[Example] Local Document from {} = {:#?}", iota_did, account.document());\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n'))}h.isMDXComponent=!0}}]);