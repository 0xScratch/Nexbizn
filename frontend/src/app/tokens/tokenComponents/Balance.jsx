import { Box, Flex, Text, Stack, Divider } from '@chakra-ui/react'
import { useCall } from '@usedapp/core'
import { utils } from 'ethers'
import { useEffect, useState } from 'react'
import { debounce } from 'lodash'


const Balance = ({contract, account}) => {
    const [debouncedAccount, setDebouncedAccount] = useState(account)

    useEffect(() => {
        // Debounce account updates
        const debouncedUpdate = debounce(setDebouncedAccount, 1000)
        debouncedUpdate(account)
        return () => debouncedUpdate.cancel()
    }, [account])

    const balanceOf = useCall({ contract, method: 'balanceOf', args: [account] })
    // console.log(balanceOf)
    
    const formattedBalance = balanceOf && balanceOf.value ? parseFloat(utils.formatEther(balanceOf.value.toString())).toFixed(0) : '??';

    console.log(formattedBalance)

    
    const balanceData = [
        { label: 'Balance:', value: `${formattedBalance} NEX`, color: 'teal.700' },
        { label: 'Network', value: 'Moonbase', color: 'green.500' },
        { label: 'Price per NEX:', value: '0.1 DEV', color: 'pink.700' },
    ]
    
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" w="50%" h="300px" bgGradient="linear-to-r(teal.300, pink.300)" p={8} marginLeft={370} marginBottom={20} marginTop={5}>
      <Box bg="white" shadow="md" rounded="lg" overflow="hidden">
        <Stack spacing={4} px={8} py={6}>
          <Text fontSize="2xl" fontWeight="bold" color="blackAlpha.900">
            My Crypto Vault
          </Text>
          {balanceData.map((item) => (
            <Flex key={item.label} justifyContent="space-between" alignItems="center">
              <Text fontSize="md" color={item.color}>
                {item.label}
              </Text>
              <Text fontSize="md" fontWeight="bold">
                {item.value}
              </Text>
            </Flex>
          ))}
          <Divider orientation="horizontal" borderColor="gray.200" />
          <Text fontSize="sm" color="gray.500">
            Last Updated: 2024-03-10
          </Text>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Balance
