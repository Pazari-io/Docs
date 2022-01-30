# Website

This repository contains all documentiation and blogs by Pazari team.

## Black Paper 

Meanwhile, we are working to make our docs awesome you can quickly gain a lot of information by reading our [black paper.](https://pazari-storage.sgp1.cdn.digitaloceanspaces.com/MVP/pazari_black_paper.pdf)


## What is Pazari?
Pazari is a digital-only goods/assets marketplace that can be described as "Web3 Shutterstock on Steroids". Pazari aims to be a one-stop-shop for any kind of digital file, not just stock assets like Shutterstock offers, but even entire programs, software, and data files will be sellable as well. Pazari is a platform that Merchants of all types and from all disciplines can find a market for their skills, no matter how big or small--and all Merchants who sell on Pazari keep far more than their peers on Web2 platforms.

While the business model of Pazari strongly resembles that of Shutterstock, the actual inventory selection will be more comparable to The Pirate Bay--but with all items being sold legitimately. Pazari is the world's first universal digital marketplace.

Pazari's MVP can support several file types such as PDFs, MP3s, MP4s, JPEGs, and even game assets--just to name a few file types. Over time support for additional file types will roll out until Pazari becomes a singular destination where you can buy, sell, and download anything digital.

After Pazari V1 has gone live, we will focus on rolling out Pazari Collaborations. This key expansion to the Pazari contracts ecosystem which will use multi-signature smart contracts to create group projects that pay out royalties to contributing members from every item sale. Items created through a Collaboration Contract will be managed by the collaboration group via multi-signature smart contracts, ensuring that all contributors have an equal say in how the item is sold. While this feature is still only in its conceptual phase, this will become a core feature of Pazari's unique business model after Pazari V1 has gone live and work on Pazari Collaborations begins.


## How are files uploaded to Pazari for sale?

All digital files are first sent through "file tokenization", a process which securely stores and encrypts the original file on a private server (*not* hosted by AWS), and then creates any number of cryptocurrency tokens that can be purchased on NFT exchanges and through the Pazari Marketplace. Once purchased, these tokens contain a link to download the file(s) and a decryption key to unlock them. A simple wallet check is conducted by the server hosting the encrypted files to check that the user owns the token that unlocks the files, and if they pass the check then the content is unlocked and they can download the file they purchased.

Later, the Pazari engine will be able to handle the decryption process behind the scenes for certain file types, and will even support in-browser decryption and content streaming similar to apps like Spotify and Kindle, which can be used to create DRM-protected content that can be retraded after purchase just like an NFT can. However, this idea is still in its conceptual phase, and for now all content sold on Pazari is protected through watermarking and encryption, and is directly downloaded to the buyer's device(s) similar to a stock asset site.


## What can we do with these tokens? Why use tokens at all?

Tokens come with the core feature of verifiable ownership, and serve as a permanent receipt of purchase that is stored on-chain forever (unless burned).

The wallet check feature can be implemented by anyone on their personal website, and is intended for Merchants looking to explore new business models that revolve around rewarding customers through exclusive content and opportunities that are only available to their Pazari customers. This creates new marketing gimmicks like unlocking bonus content for customers who own specific tokens, conducting free "airdrops" of tokenized content to specific Pazari customers, and exclusive-access members' areas that are only unlocked when a special token is owned--just to name a few ideas. 

There are many things that can be done with the ability to rapidly check how many Pazari Tokens a buyer owns, and Pazari Tokens themselves make it easy to reward their buyers (more on that later). This use case is already employed by many NFT projects, and is nothing new to the blockchain industry, but Pazari aims to take this ability to the next level and make it readily available to non-crypto people.

Tokens can also represent a content use license that can be checked at any time by anyone. If content use disputes arise, then the buyer only needs to prove they control the wallet that purchased a token to settle the dispute. However, since Pazari is a global marketplace it is advised to not post any restricted-use licenses until Pazari can implement Avalanche sub-nets that can provide legal support for such licenses in various jurisdictions. For now, Merchants can freely and safely sell content that has full content use licensing for all applications, commercial or personal.

Pazari MVP's Marketplace contract is capable of handling ERC1155 NFTs, but not ERC721 NFTs just yet. Support for ERC721 NFTs will be available soon after the MVP is deployed. The Pazari MVP immediately begins restricted to its own purpose-built token that is designed to be a one-way-transfer token specifically intended for downloadable digital content, and cannot be transferred after sale unless they are being burned or sent back to the seller. Soon after release Pazari MVP will expand into off-platform NFTs that can be sold by their owners, and eventually we will offer unique NFT smart contracts and minting applications that will permit Merchants to create their own truly unique NFT collections through Pazari without ever needing to find a Web3 developer.


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

