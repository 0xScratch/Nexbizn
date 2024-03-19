'use client'

import { useEthers } from '@usedapp/core';
import React from 'react';
import { Image } from '@chakra-ui/next-js';
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { activateBrowserWallet, deactivate, account } = useEthers();

    // Handle the wallet toggle
    const handleWalletConnection = () => {
        if (account) deactivate();
        else activateBrowserWallet();
    }
    // console.log(account)

    const [tabIndex, setTabIndex] = useState(0);
    // console.log(localStorage.getItem('tabIndex'))

    // Load the tab index from localStorage when the component mounts
    useEffect(() => {
        const savedTabIndex = localStorage.getItem('tabIndex');
        console.log(savedTabIndex)
        if (savedTabIndex) {
        setTabIndex(Number(savedTabIndex));
        }
    }, []);

    // TODO: Fix that tab change functionality!
        
    const handleTabsChange = (index) => {
        localStorage.setItem('tabIndex', index);
        console.log(index)
        setTabIndex(index);
    }

    return (
        <nav className='bg-[#201629]'>
            <Flex direction={'row'}>
                <Flex className="logo" justify='center'>
                    <Image 
                        src="/logo.png" 
                        alt="NexBizn"
                        width={150}
                        height={71} 
                        />
                </Flex>
                <Spacer />
                <Flex className="tab" marginTop='13'>
                    <Tabs position="relative" variant="unstyled" onChange={handleTabsChange} index={tabIndex}>
                        <TabList gap='24' className='text-purple-300 font-bold' fontFamily='cursive'>
                            <Link href="/">
                                <Tab>
                                    <p>Home</p>
                                </Tab>
                            </Link>
                            <Link href="/tokens">
                                <Tab>
                                    <p>Tokens</p>
                                </Tab>
                            </Link>
                            <Link href="/auction">
                                <Tab>
                                    <p>Auction</p>
                                </Tab>
                            </Link>
                        </TabList>
                        <TabIndicator
                            mt="-5px"
                            height="1.5px"
                            bg="pink.800"
                            borderRadius="2px"
                        />
                    </Tabs>
                </Flex>
                <Flex>
                    <Button colorScheme='red' variant='outline' onClick={handleWalletConnection} marginTop={4} marginRight={3} marginLeft={32}>
                        {account ? `Disconnect ${account.substring(0, 6)}...` : 'Connect Wallet 🔗'}
                    </Button>
                </Flex>
            </Flex>
        </nav>
    );
};

export default Navbar;