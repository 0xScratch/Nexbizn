'use client'

import BuyToken from "./tokenComponents/BuyToken"
import SellToken from "./tokenComponents/SellToken"
import { Flex, Spacer } from "@chakra-ui/react"
import Balance from "./tokenComponents/Balance"
import { useEthers, MoonbaseAlpha, useContractFunction } from "@usedapp/core"
import NexToken from '../contracts-data/NexToken.json'
import Auction from '../contracts-data/Auction.json'
import { Contract } from "ethers"

const { tokenAddress, auctionAddress } = require('../contracts-data/addresses.json')

export default function Token() {
    const tokenContract = new Contract(tokenAddress, NexToken.abi)
    const auctionContract = new Contract(auctionAddress, Auction.abi)
    const { account, chainId, switchNetwork } = useEthers()
    return (
        <main className="">
            <Balance contract={tokenContract} account={account}/>
            <Flex gap={52} justify='center'>
                <BuyToken contract={auctionContract} account={account} MoonbaseAlpha={MoonbaseAlpha} useContractFunction={useContractFunction} chainId={chainId} switchNetwork={switchNetwork}/>
                
                <SellToken contract={auctionContract} account={account} MoonbaseAlpha={MoonbaseAlpha} useContractFunction={useContractFunction} chainId={chainId} switchNetwork={switchNetwork}/>
            </Flex>
        </main>
    )
}