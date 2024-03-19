# Nexbizn: Own Your Brand's Digital Legacy

***Nexbizn*** is a platform built on **Moonbeam**, a parachain of the Polkadot blockchain, empowering brands to harness the power of NFTs for impactful marketing campaigns. It is made up of two words ***Next*** and ***Business***

## Visual Tour (Pictorial Walkthrough)

!["Home Page"](/frontend/public/first.png)

!["Tokens Page"](/frontend/public/second.png)

## Table of Contents

- [Why Nexbizn?](#why-nexbizn)
- [How Nexbizn Works?](#how-nexbizn-works)
- [Note for the Reviewers](#note-for-the-reviewers)
- [What I learnt](#what-i-learnt)
  - [Mistakes](#mistakes)
  - [Learnings and Tips](#learnings-and-tips)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Why Nexbizn?

We know NFTs are everywhere, like bridging real world assets to the digital world, owning something unique and rare, and the ability to prove ownership of digital assets. But, what if we could use NFTs to create a ***Hoarding*** type of thing as it happens with all those brands we see on buildings, billboards, and other places. and they pay for it right?

That's where Nexbizn comes in. Web3 brands deserve it's place, not necessarily on those physical places (if that happened more often, people be like - "Crypto took over") but on the digital world, where they can be seen by everyone, and brands could push their products and services to the people who are interested in them.

In simple words, Brands can take this particular NFT on lease by winning up the auctions and use it for their marketing campaigns, and the owner of the NFT(i.e platform itself) gets paid for it. It's a win-win situation for both the brand and the platform.

## How Nexbizn Works?

1. ***Registeration***: Brands can register themselves by dropping in the *tokenUri* or *metadata* of their brand's digital assets. One can try [**Pinata**](https://www.pinata.cloud) or [**IPFS**](https://ipfs.io) for storing the metadata and drop it's url right in the registration box. Make sure the metadata is in JSON format and contains the following fields:
    - name
    - description
    - image

    Take a look at this [*example!*](https://amber-random-peafowl-702.mypinata.cloud/ipfs/QmRWkJ3oywt1U1w8DQ4PXgvNx9879PpZ53StyJEDFYjYBP)

2. ***Buying/Selling Tokens***: This platform uses **NEX** tokens for bidding in auctions. Brands can buy these tokens from the platform and if won the auction, the tokens will be burned right away. Rest of the participants can sell them if they are willing to, cuz these tokens have no monetary value outside the platform.

3. ***Auctions***: Usually, the auctions will be held autonomously like every 24 hours and till then participants can register themselves, or buy up some tokens or just wait. Make sure the data collected in a particular auction get erased and participants need to register again for the next one (although, this gives me an idea of having a valid profile for the participants, but that's for later). Now let's discuss the rules and how this auction really works:
    - The auction will be held in a **Unpermissioned Candle Style**, meaning the participants can see the highest bid and the time left for the auction to end.
    - Suppose the auction is to be held for 1 hour, then whole auction will be divided in 3600 slots (1 slot = 1 second). and will keep noting which participant has the highest bid at a particular slot.
    - As the auction ends, the platform will randomly pick up a slot and the participant whose name on it will win the auction.
    - It's like more the slots you acquire by bidding high in a continuous way, more the chances of winning the auction. and sometimes, even if you bid high most of the times, you might not win the auction. It's all about luck and strategy. So plan well!
    - This system is designed to prevent the last minute sniping and to give everyone a fair chance to win the auction.
    - ***Note***: These biddings will check whether you really have that amount of tokens in your wallet, and it won't submit them instantly..so no worries about signing up for multiple transactions (I know that's a headache)

4. ***Mint/Lease***: After winning the auction, you will notice a button to claim your spot. Once they do, the previous NFT will be burnt and a new one gets minted with brand's metadata. Owner will be the platform itself and that brand can take it up on lease for the next 24 hours. Share it on X, Farcaster or any social media platform and let the world know about your brand's digital legacy. Plus, we will be showing it too right on our platform's home page!

## Note for the Reviewers

Well, this project do have some good features but they aren't implemented yet due to lack of time as I built it right in the last 2-3 days.

Although, I did start working on it much before but was engaged with !ink boilerplate and other stuff. Due to some issues, errors and lack of help by the community, I had to start right from scratch with [***moonbeam***](https://moonbeam.network) and atleast feeling quite excited that got something to submit (even if not completely implemented) and [learnt a lot](#what-i-learnt) during these 2-3 days.

Features to implement:

1. Can create profiles for the participants such that they don't need to register again and again for the next auctions.
2. Right now, the auction tab is not effective, really buggy and not implementing that exact system I wrote about. This need to be fixed.
3. Extraction of data from the metadata and aligning it right on our NFT.

## What I learnt

As it was my first hackathon, I do realised some mistakes and teachings which could help someone move ahead including me. This section will be divided in two parts - **Mistakes** and **Learnings and Tips** I encountered on the way!

### Mistakes

- **Giving a bit more time to UI than required**: Feels like the time spent on presenting this home page good, wasn't a good path to take. Should be better focused on the functioning of dapp rather than how it looks.
- **Trying new stuff**: It's good to try something new but remember not to just carried away. I do tried some new tools and libraries to save my time but probably it wasn't a good idea to do so (especially when you are lacking by time)
- **Not building the auction system first**: I should have built the auction system first cuz that's the most exciting part of the platform. Maybe the procedure in my mind was to built it in an organized way but that didn't worked out well. Will remember this for the next time.

### Learnings and Tips

- **Habit of noting down things**: Do remember to note down any feature, tool, idea or whatever you feel is good for your project. Cuz chances are high that you might forget it later.
- **Don't stick on something for too long**: If something is not working the way you want, change the process and try something else. Yea *ego* hits up but it's better to let it go and find another way.
- **useDapp**: Using it for the first time was a good experience. It's a good library to interact with the blockchain and the process is quite seamless, kind of stands next to wagmi and viem.
- **Expect the worst and be ready for it**: Yea, when trying out something new, expect the worst scenario and just be ready to tackle it. Like, I was going good with !ink and then suddenly faced some weird issues, could have left the hackathon right there but calmed down, a deep breath and started with moonbeam. Things will be messed up, but you need to keep going.

That's all! I hope you like the project and I'm looking forward to your feedback and suggestions. Thanks for reading!

## Getting Started

To get started with Nexbizn, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/0xScratch/Nexbizn.git
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Compile the contracts:

    ```bash
    npx hardhat compile
    ```

4. Create a `secrets.json` in the root directory and a `.env` file in the `frontend`. Add your private key of wallets to both files as shown below:

    - secrets.json:

        ```json
        {
            "privateKey": "YOUR_PRIVATE_KEY",
        }

    - .env:

        ```env
            PRIVATE_KEY="YOUR_PRIVATE_KEY"
        ```

5. Deploy the contracts to the Moonbase Alpha testnet:

    ```bash
    npx hardhat run scripts/deploy.js --network moonbase
    ```

6. Note the contract addresses and update the `addresses.json` file in the `frontend` directory or wherever you find it. Also, update the files such as `NexToken.json`, `NexNFT.json` and `Auction.json` in the `frontend` directory. Just head to the `artifacts` section in the root of the project, pick up the files and replace them with the existing ones in the `frontend` directory.

7. Move to frontend and install the required dependencies:

    ```bash
    cd frontend
    pnpm install
    ```

8. Finally, start the frontend:

    ```bash
    pnpm run dev
    ```

9. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
