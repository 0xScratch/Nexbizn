// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider, MoonbaseAlpha, Localhost } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: MoonbaseAlpha.chainId,
  readOnlyUrls: {
    [MoonbaseAlpha.chainId]: getDefaultProvider(
      'https://moonbase-alpha.blastapi.io/5fbc6157-38f8-481c-a84b-5cf5c431f2bc'
    ),
  },
};

// const hardhatConfig = {
//   readOnlyChainId: Localhost.chainId,
//   readOnlyUrls: {
//     [Localhost.chainId]: 'http://127.0.0.1:8545/',
//   },
// };

export function Providers({ children }) {
  return (
  <DAppProvider config={config}>
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </DAppProvider>
  )
}