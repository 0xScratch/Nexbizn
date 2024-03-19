'use client'
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { useEthers, useContractFunction, MoonbaseAlpha } from "@usedapp/core";
import { Contract } from "ethers";
import Auction from "../app/contracts-data/Auction.json";

const { auctionAddress } = require('../app/contracts-data/addresses.json');

const HomePage = () => {
  const fetchTokenUri = async (tokenUri) => {
    const response = await fetch(tokenUri)
    const data = await response.json()
    return data;
  }

  const [uri, setUri] = useState('');

// useEffect(() => {
//   const tokenUri = 'https://amber-random-peafowl-702.mypinata.cloud/ipfs/QmTR3FqypF5tNRBRFPMQN5mV2yrAuoL47yL33HVPcHmmti';
  
//   fetchTokenUri(tokenUri).then(data => {
//     console.log(data.image);
//   });
// }, []);
  const contract = new Contract(auctionAddress, Auction.abi)
  const { account, chainId, switchNetwork } = useEthers();

  const { state, send } = useContractFunction(contract, 'register');
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (chainId != MoonbaseAlpha.chainId) {
        await switchNetwork(MoonbaseAlpha);
      }
      send(uri);
    } catch (error) {
      console.log(error);
    }
  }

  const isMining = state?.status === 'Mining';

  return (
    <Box h="80vh" display="flex">
      <Box p={8} flex="1">
        <Heading as="h1" size="2xl" color="white" fontWeight="bold">
          OWN YOUR BRAND&apos;S DIGITAL LEGACY!
        </Heading>
        <Box mt={8}> 
          <Text fontSize="sm" color="gray.200">
            Own the metaverse with impactful NFT marketing campaigns, securing prime ad space through competitive auctions to build your brand&apos;s lasting digital legacy
          </Text>
        </Box>
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          <Input 
            placeholder="Drop your tokenURI" 
            size="md" mb={4} 
            color='white' 
            bg='black' 
            onChange={(e) => setUri(e.target.value)}
        />
          <Button
            colorScheme="purple"
            size="lg"
            bgGradient="linear(to-r, purple.700, purple.500)"
            _hover={{ bgGradient: "linear(to-r, purple.500, purple.700)" }}
            borderRadius="full"
            isDisabled={uri == '' || account == null}
            isLoading={isMining}
            loadingText="Warping in..."
            marginTop={5}
            onClick={handleRegister}
          >
            Register your Spot!!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
