'use client'

import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useEthers, useContractFunction, MoonbaseAlpha } from '@usedapp/core';
import { Contract } from 'ethers';
import Auction from './Auction.json';
const { auctionAddress } = require('./addresses.json');


const AuctionHandler = () => {
  const [currentWinner, setCurrentWinner] = useState(''); // [1]
  const [tokens, setTokens] = useState(0);
  const [baseBid, setBaseBid] = useState(10);
  const [highestBid, setHighestBid] = useState(0);
  const [countdown, setCountdown] = useState(60); // 1 hour in seconds
  const [isOpen, setIsOpen] = useState(false);
  const { account, chainId, switchNetwork } = useEthers();
  const contract = new Contract(auctionAddress, Auction.abi)

  const { state, send } = useContractFunction(contract, 'winnerDetails', {chainId: MoonbaseAlpha.chainId, privateKey: process.env.PRIVATE_KEY});
  const { state: state1, send: send1} = useContractFunction(contract, 'mintNFT')

  const handleWinnerDetails = async () => {
    try {
      if (chainId != MoonbaseAlpha.chainId) {
        await switchNetwork(MoonbaseAlpha);
      }
      send(localStorage.getItem('currentWinner'), localStorage.getItem('highestBid'));
    } catch (error) {
      console.log(error);
    }
  }

  const handleMintFunction = async () => {
    try {
      if (chainId != MoonbaseAlpha.chainId) {
        await switchNetwork(MoonbaseAlpha);
      }
      send1();
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setCurrentWinner(localStorage.getItem('currentWinner'));
      setIsOpen(true);
    }
  }, [countdown]);

  const handleBid = () => {
    // Your existing bid handling logic
    if (localStorage.getItem('highestBid')) {
        if (tokens > localStorage.getItem('highestBid')) {
            setHighestBid(tokens);
            localStorage.setItem('highestBid', tokens);
            localStorage.setItem('currentWinner', account);
        }
    } else {
        localStorage.setItem('highestBid', tokens);
        localStorage.setItem('currentWinner', account);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMint = () => {
    // Logic to mint NFT
    handleWinnerDetails();
    handleMintFunction();

    localStorage.removeItem('highestBid');
    localStorage.removeItem('currentWinner');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="90vw"
      height="80vh"
      padding={4}
    >
      <Box
        width="400px"
        padding={4}
        backgroundColor="white"
        borderRadius="md"
        boxShadow="md"
      >
        <Text fontSize="2xl" marginBottom={4}>Auction</Text>
        <Text fontSize="xl" marginBottom={4}>Time remaining: {countdown} seconds</Text>
        <Input
          type="number"
          value={tokens}
          onChange={(e) => setTokens(e.target.value)}
          marginBottom={4}
          placeholder='0 DEV'
        />
        <Button colorScheme="blue" onClick={handleBid} marginBottom={4}>Bid</Button>
        <Text><strong>Base Bid:</strong> {baseBid} DEV</Text>
        <Text><strong>Current Highest Bid:</strong> {highestBid} DEV</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Auction ended</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>The auction has ended. The highest bid was {highestBid} DEV.</Text>
            {currentWinner && (
              <Button colorScheme="blue" onClick={handleMint}>Mint NFT</Button>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AuctionHandler;