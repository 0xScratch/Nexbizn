import { Flex, Spacer } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { Box, Button } from '@chakra-ui/react'
// import { useEthers, useContractFunction, MoonbaseAlpha } from '@usedapp/core'
import { useState } from 'react'
import { utils } from 'ethers'
import BeatLoader from 'react-spinners/BeatLoader'

// TODO: Make the Inputfield empty as the focus goes away!
// TODO: display messages when someone buys or sell the tokens

const BuyToken = ({contract, account, chainId, switchNetwork, MoonbaseAlpha, useContractFunction}) => {
  const [value, setValue] = useState(0)

  const {state, send} = useContractFunction(contract, 'purchaseTokens')
  const handlePurchase = async (event) => {
    event.preventDefault()
    try {

      if (chainId != MoonbaseAlpha.chainId) {
        await switchNetwork(MoonbaseAlpha)
      }
      send(Number(value), {value: utils.parseEther((Number(value) * 0.1).toString())})
    } catch (error) {
      console.log(error)
    }
    
  }
  const isMining = state?.status === 'Mining'

  return (
    <Flex justifyContent='center' alignItems='center'>
      {/* Gradient Option 2 (stronger LTR) */}
      <Box
        bg="linear-gradient(to left, #c23616, #ff4040)" 
        p={6}
        borderRadius="xl" 
        w={500}
        color="white"
        className="text-lg"
        boxShadow="none" 
      >
        {/* <form> */}
          <FormControl>
            <FormLabel fontSize="2xl" className="text-center">
              Enter amount of tokens to Buy
            </FormLabel>
            <Spacer mt={4} />
            <NumberInput min={0} size="lg">
              <NumberInputField
                placeholder="0 NEX"
                className="text-left pl-2 text-lg focus:ring-pink-500 focus:ring-opacity-50 bg-gray-800 rounded-md" 
                onChange={(e) => setValue(e.target.value)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Spacer mt={4} />
            <Flex justifyContent='center'>
              <Button
                // type="submit"
                colorScheme="transparent" 
                size="lg"
                mt={4}
                className="rounded-full border border-white px-8 py-3 text-white text-shadow-md font-medium hover:bg-white hover:text-pink-500" 
                isDisabled={value == 0 || account == null}
                onClick={handlePurchase}
                isLoading={isMining}
                spinner={<BeatLoader size={8} color='white' />}
              >
                Buy Tokens
              </Button>
            </Flex>
          </FormControl>
        {/* </form> */}
      </Box>
    </Flex>
  )
}

export default BuyToken
