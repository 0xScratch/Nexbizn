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

import { Box, Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from 'react'
import { utils } from 'ethers'
import BeatLoader from 'react-spinners/BeatLoader'

const SellToken = ({contract, account, chainId, switchNetwork, MoonbaseAlpha, useContractFunction}) => {

  const [value, setValue] = useState(0)

  const {state, send} = useContractFunction(contract, 'sellTokens')
  const handleSell = async (event) => {
    event.preventDefault()
    try {

      if (chainId != MoonbaseAlpha.chainId) {
        await switchNetwork(MoonbaseAlpha)
      }
      send(Number(value))
    } catch (error) {
      console.log(error)
    }
    
  }
  const isMining = state?.status === 'Mining'

  return (
    <Flex justifyContent='center' alignItems='center'>
      {/* Gradient Option 1 (stronger LTR) */}
      <Box
        bg="linear-gradient(to left, #364c82, #7993d1)" 
        p={6}
        borderRadius="xl"   
        w={500}
        color="white"
        className="text-lg"
        boxShadow="inset 0 0 0 1px rgba(0, 0, 0, 0.1)" 
      >
        {/* <form> */}
          <FormControl>
            <FormLabel fontSize="2xl" className="text-center">
              Enter amount of tokens to Sell
            </FormLabel>
            <Spacer mt={4} />
            <NumberInput min={0} size="lg">
              <NumberInputField
                placeholder="0 NEX"
                className="text-left pl-2 text-lg focus:ring-indigo-500 focus:ring-opacity-50 bg-gray-800 rounded-md" 
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
                type="submit"
                colorScheme="transparent"
                size="lg"
                mt={4}
                className="rounded-full border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-indigo-500" 
                isDisabled={value == 0 || account == null}
                onClick={handleSell}
                isLoading={isMining}
                spinner={<BeatLoader size={8} color='white'/>}
              >
                Sell Tokens
              </Button>
            </Flex>
          </FormControl>
        {/* </form> */}
      </Box>
    </Flex>
  )
}

export default SellToken
