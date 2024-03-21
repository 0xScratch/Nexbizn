'use client'

import { Chain } from '@usedapp/core'

export const OptimismSepolia: Chain = {
  chainId: 11155420,
  chainName: 'OptimismSepolia',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  getExplorerAddressLink: (address: string) => `https://sepolia-optimism.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://sepolia-optimism.etherscan.io/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: 'https://sepolia.optimism.io',
  blockExplorerUrl: 'https://sepolia-optimism.etherscan.io',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  }
}