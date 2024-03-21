// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core';

import { OptimismSepolia } from './chain';

const config = {
  readOnlyChainId: OptimismSepolia.chainId,
  readOnlyUrls: {
    [OptimismSepolia.chainId]: process.env.NEXT_PUBLIC_HTTPS,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, OptimismSepolia],
};

export function Providers({ children }) {
  return (
  <DAppProvider config={config}>
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </DAppProvider>
  )
}